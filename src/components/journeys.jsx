/* eslint-disable */
import { Fragment, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import { Anchor, Go, Lines, Media, Meta, Paras, Rich } from "./scenes";

const clamp = (v) => Math.min(1, Math.max(0, v));

/* WHY MOTORSPORT. A family album: each photograph lands on the pile like a print. */
const Print = ({ d, k, a }) => {
  const enter = useTransform(a, (v) => (k === 0 ? 1 : clamp((v - (k - 1)) / 0.85)));
  const y = useTransform(enter, (e) => `${(1 - e) * 115}vh`);
  const rot = useTransform(enter, (e) => d.tilt * (1 + (1 - e) * 4));
  const under = useTransform(a, (v) => clamp(v - k - 0.15));
  const sc = useTransform(under, (u) => 1 - u * 0.06);
  const dim = useTransform(under, (u) => u * 0.45);
  return (
    <motion.figure className="print" style={{ y, rotate: rot, scale: sc, zIndex: k + 1, aspectRatio: d.ratio }}>
      <img src={d.img} alt={d.alt} loading="lazy" decoding="async" style={{ objectPosition: d.pos }} />
      <motion.i style={{ opacity: dim }} />
      <figcaption>{d.caption}</figcaption>
    </motion.figure>
  );
};

const Leaf = ({ d, k, a }) => {
  const o = useTransform(a, (v) => clamp(1 - Math.abs(v - k) * 3.2));
  const y = useTransform(a, (v) => (v - k) * -40);
  return (
    <motion.div className="leaf" style={{ opacity: o, y, pointerEvents: "none" }}>
      <Meta d={d} />
      <h3 className="tt">{d.title}</h3>
      <Paras t={d.text} />
    </motion.div>
  );
};

/* The album stays put for one more screen at the end, so the next section slides over it
   instead of carrying the last title off the top of the page. */
export const Album = ({ items, label }) => {
  const ref = useRef(null);
  const m = useIsMobile();
  const n = items.length;
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const a = useTransform(p, (v) => Math.min(n - 1, v * (n - 1) * 1.15));
  const [cur, setCur] = useState(0);
  useMotionValueEvent(a, "change", (v) => setCur(Math.min(n - 1, Math.max(0, Math.round(v)))));
  if (m)
    return (
      <section className="album-m">
        {items.map((d) => (
          <article key={d.title}>
            <figure className="print" style={{ aspectRatio: d.ratio, rotate: `${d.tilt}deg` }}><img src={d.img} alt={d.alt} loading="lazy" style={{ objectPosition: d.pos }} /><figcaption>{d.caption}</figcaption></figure>
            <Meta d={d} /><h3 className="tt">{d.title}</h3><Paras t={d.text} />
          </article>
        ))}
      </section>
    );
  return (
    <section className="album" style={{ height: `${n * 110 + 100}vh` }}>
      <div className="album-run" ref={ref} style={{ height: `${n * 110}vh` }} aria-hidden="true" />
      <div className="album-pin">
        <div className="album-label"><span className="guide-y">{label}</span><span>{String(cur + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span></div>
        <div className="album-text">{items.map((d, k) => <Leaf key={k} d={d} k={k} a={a} />)}</div>
        <div className="album-pile">{items.map((d, k) => <Print key={k} d={d} k={k} a={a} />)}</div>
      </div>
    </section>
  );
};

/* THIS GARAGE. The door goes up as you scroll. */
export const DoorLift = ({ door, under, title, when, text }) => {
  const ref = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const y = useTransform(p, (v) => `${-clamp((v - 0.12) / 0.55) * 104}%`);
  const o = useTransform(p, (v) => clamp((v - 0.42) / 0.25));
  const ty = useTransform(o, (v) => 36 * (1 - v));
  const hint = useTransform(p, (v) => 1 - clamp(v / 0.1));
  return (
    <section className="door" ref={ref}>
      <div className="door-pin">
        <Media src={under} />
        <div className="shade" style={{ background: "rgba(8,8,7,.62)" }} />
        <motion.div className="s-center" style={{ opacity: o, y: ty, color: "var(--cream)" }}>
          <h1 className="tt"><Lines t={title} /></h1>
          <span className="c-when">{when}</span>
          <p><Rich t={text} /></p>
        </motion.div>
        <motion.div className="door-panel" style={{ y }}>
          <img src={door} alt="The garage door" />
          <motion.span className="door-hint" style={{ opacity: hint }}>Scroll to open</motion.span>
        </motion.div>
      </div>
    </section>
  );
};

/* LINKEDIN. The number does the talking. */
export const Counter = ({ value, label, text }) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(value);
    let raf, t0;
    const tick = (t) => {
      t0 = t0 || t;
      const k = Math.min(1, (t - t0) / 2400);
      setV(Math.round(value * (1 - Math.pow(1 - k, 4))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    const start = setTimeout(() => (raf = requestAnimationFrame(tick)), 350);
    return () => { clearTimeout(start); cancelAnimationFrame(raf); };
  }, [value]);
  return (
    <header className="counter">
      <div className="s-center">
        <span className="c-when">{label}</span>
        <div className="tt counter-n">{v.toLocaleString("en-GB")}</div>
        <p><Rich t={text} /></p>
      </div>
    </header>
  );
};

/* LINKEDIN. The numbers as pictures. Curve read off LinkedIn's own cumulative chart. */
const CURVE = [[0, 0], [1, 1], [2, 2], [3, 4], [4, 8], [5, 16], [6, 25], [7, 32], [8, 42], [9, 55], [9.5, 125], [10, 195], [10.5, 210], [11, 240], [11.5, 400], [12, 490], [12.8, 511]];
const MONTHS = ["Nov", "Jan", "Mar", "May", "Jul", "Sep", "Nov"];

export const Stats = ({ total, reached, outside, rows, best }) => {
  const W = 1000, H = 420;
  const X = (m) => (m / 12.8) * W, Y = (k) => H - (k / 550) * H;
  const line = CURVE.map(([m, k], i) => `${i ? "L" : "M"}${X(m).toFixed(1)},${Y(k).toFixed(1)}`).join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;
  const max = Math.max(...rows.map((r) => r[1]));
  const R = 70, C = 2 * Math.PI * R;
  const v = { once: true, margin: "-15%" };
  return (
    <section className="stats">
      <div className="stats-chart">
        <div className="stats-head"><span className="c-when">Cumulative impressions, November 2025 to November 2026</span><span className="stats-note">Read off LinkedIn's own chart, rounded</span></div>
        <svg viewBox={`0 0 ${W} ${H + 40}`} preserveAspectRatio="none" aria-label={`Impressions grew to ${total.toLocaleString("en-GB")} over the year`}>
          {[0, 200, 400].map((k) => <g key={k}><line x1="0" x2={W} y1={Y(k)} y2={Y(k)} className="grid" /><text x="0" y={Y(k) - 8} className="ax">{k ? `${k}K` : "0"}</text></g>)}
          {MONTHS.map((m, i) => <text key={i} x={(i / 6) * (W - 30)} y={H + 32} className="ax">{m}</text>)}
          <motion.path d={area} className="area" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={v} transition={{ duration: 1.2, delay: 1.2 }} />
          <motion.path d={line} className="curve" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={v} transition={{ duration: 2.2, ease: [0.45, 0, 0.2, 1] }} />
        </svg>
        <div className="stats-tag"><span className="tt">{total.toLocaleString("en-GB")}</span></div>
      </div>
      <div className="stats-row">
        <div className="stats-ring">
          <svg viewBox="0 0 180 180"><circle cx="90" cy="90" r={R} className="ring-bg" />
            <motion.circle cx="90" cy="90" r={R} className="ring" style={{ strokeDasharray: C, rotate: -90, transformOrigin: "50% 50%" }} initial={{ strokeDashoffset: C }} whileInView={{ strokeDashoffset: C * (1 - outside / 100) }} viewport={v} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} /></svg>
          <div className="ring-in"><span className="tt">{outside}%</span></div>
          <p>from people <b>outside</b> my own network</p>
        </div>
        <div className="stats-big"><span className="tt">{reached.toLocaleString("en-GB")}</span><p>people reached</p><span className="tt sm">{best[0].toLocaleString("en-GB")}</span><p>{best[1]}</p></div>
        <div className="stats-bars">
          {rows.map(([l, n], i) => (
            <div key={l} className="bar"><span>{l}</span><div><motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: Math.max(0.012, n / max) }} viewport={v} transition={{ duration: 1.1, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }} /></div><b>{n.toLocaleString("en-GB")}</b></div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Post = ({ x }) => (
  <figure className="post">
    <img src={x.img} alt={x.alt} loading="lazy" decoding="async" style={{ aspectRatio: x.ratio, objectPosition: x.pos }} />
    <figcaption>{x.alt}</figcaption>
  </figure>
);

/* LINKEDIN. One chapter per series: a cover that slides over the series before it,
   then its posts going up a column as wide as a phone, with the series beside them. */
const jump = (i) => {
  const el = document.getElementById("series-" + i);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY;
  window.__lenis ? window.__lenis.scrollTo(y) : window.scrollTo(0, y);
};

const Chapter = ({ s, i }) => (
  <section className="chapter" id={"series-" + i}>
    <div className="s-center">
      <span className="c-when">{s.when}</span>
      <h2 className="tt">{s.title}</h2>
      <p>{s.what}</p>
      {s.logos && <div className="chapter-logos">{s.logos.map((l) => <img key={l} src={l} alt="" loading="lazy" />)}</div>}
    </div>
  </section>
);

const FeedRun = ({ s, i, all, label, hold }) => {
  const ref = useRef(null);
  const col = useRef(null);
  const [g, setG] = useState(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useEffect(() => {
    if (!col.current) return;
    const measure = () => {
      const H = window.innerHeight;
      const c = [...col.current.children].map((k) => k.offsetTop + k.offsetHeight / 2);
      setG({ H, start: c[0] - H / 2, travel: Math.max(1, c[c.length - 1] - c[0]) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(col.current);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, []);
  const y = useTransform(p, (v) => (g ? -(g.start + v * g.travel) : 0));
  const run = g ? g.travel + g.H : null;
  return (
    <section className={"feed" + (hold ? " hold" : "")} style={{ height: run ? run + (hold ? g.H : 0) : `${s.posts.length * 60 + 100}vh` }}>
      <div className="run" ref={ref} style={{ height: run || `${s.posts.length * 60 + 100}vh` }} aria-hidden="true" />
      <div className="feed-pin">
        {label && (
          <nav className="guide" aria-label={label}>
            <span className="guide-y">{label}</span>
            {all.map((x, j) => <button key={x.title} className={j === i ? "is-on" : ""} onClick={() => jump(j)} data-hover="true">{x.title}</button>)}
          </nav>
        )}
        <div className="feed-l"><div className="feed-leaf on"><Meta d={s} /><h3 className="tt">{s.title}</h3><Paras t={s.left} /></div></div>
        <div className="feed-col"><motion.div ref={col} style={{ y }}>{s.posts.map((x) => <Post key={x.img} x={x} />)}</motion.div></div>
        <div className="feed-r"><div className="feed-leaf on"><Paras t={s.right} /><Anchor link={s.link} /></div></div>
      </div>
    </section>
  );
};

export const Feed = ({ series, label, hold }) => {
  const m = useIsMobile();
  if (m)
    return (
      <section className="feed-m">
        {series.map((s, i) => (
          <article key={s.title}>
            <Chapter s={s} i={i} />
            <div className="feed-m-posts">{s.posts.map((x) => <Post key={x.img} x={x} />)}</div>
            <Paras t={s.left} /><Paras t={s.right} /><Anchor link={s.link} />
          </article>
        ))}
      </section>
    );
  return series.map((s, i) => (
    <Fragment key={s.title}>
      <Chapter s={s} i={i} />
      <FeedRun s={s} i={i} all={series} label={label} hold={i < series.length - 1 || hold} />
    </Fragment>
  ));
};

/* THIS GARAGE. The first version and this one: the line moves across as you scroll. */
export const Compare = ({ d, hold }) => {
  const ref = useRef(null);
  const m = useIsMobile();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: m ? ["start 0.85", "end 0.25"] : ["start start", "end end"] });
  const cut = useTransform(p, m ? [0, 1] : [0.08, 0.78], [96, 0], { clamp: true });
  const clip = useTransform(cut, (c) => `inset(0 0 0 ${c}%)`);
  const left = useTransform(cut, (c) => `${c}%`);
  const frame = (
    <div className="cmp-frame" ref={m ? ref : undefined}>
      <img src={d.before} alt={d.beforeAlt} loading="lazy" decoding="async" />
      <motion.img src={d.after} alt={d.afterAlt} loading="lazy" decoding="async" style={{ clipPath: clip }} />
      <motion.i style={{ left }} />
    </div>
  );
  const body = (
    <>
      <div className="cmp-tags"><span>{d.beforeTag}</span><span>{d.afterTag}</span></div>
      {frame}
      <h3 className="tt w-tt">{d.title}</h3>
      <div className="w-cols"><div><Meta d={d} /><Paras t={d.left} /></div><div><Paras t={d.right} /></div></div>
    </>
  );
  if (m) return <section className="cmp-m">{body}</section>;
  return (
    <section className={"cmp" + (hold ? " hold" : "")} style={{ height: `${hold ? 340 : 240}vh` }}>
      <div className="run" ref={ref} style={{ height: "240vh" }} aria-hidden="true" />
      <div className="cmp-pin">{body}</div>
    </section>
  );
};

/* LET'S TALK. The days left to the deadline, counting down live. */
const left = (to) => Math.max(0, to - Date.now());
export const Countdown = ({ to, label, text, hold }) => {
  const [ms, setMs] = useState(() => left(to));
  const [shown, setShown] = useState(0);
  const days = Math.floor(ms / 864e5);
  useEffect(() => {
    const t = setInterval(() => setMs(left(to)), 1000);
    return () => clearInterval(t);
  }, [to]);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return setShown(days);
    let raf, t0;
    const tick = (t) => {
      t0 = t0 || t;
      const k = Math.min(1, (t - t0) / 1800);
      setShown(Math.round(days * (1 - Math.pow(1 - k, 4))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    const start = setTimeout(() => (raf = requestAnimationFrame(tick)), 300);
    return () => { clearTimeout(start); cancelAnimationFrame(raf); };
  }, [days]);
  const two = (v) => String(v).padStart(2, "0");
  const h = Math.floor(ms / 36e5) % 24, mi = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
  return (
    <section className={"cd-wrap" + (hold ? " hold" : "")}>
      <header className="counter countdown">
        <div className="s-center">
          <span className="c-when">{label}</span>
          <div className="tt counter-n">{shown}</div>
          <span className="cd-clock">days, {two(h)} h {two(mi)} min {two(s)} s</span>
          <p><Rich t={text} /></p>
        </div>
      </header>
    </section>
  );
};

/* LET'S TALK. The two ways in, as big rows that fill with red, and the address ready to copy. */
export const Talk = ({ img, alt, pos, title, left, right, email, subject, linkedin, linkedinLabel }) => {
  const [copied, setCopied] = useState(false);
  const addr = useRef(null);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      const r = document.createRange();
      r.selectNodeContents(addr.current);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
    }
  };
  return (
    <section className="talk">
      <figure className="talk-photo"><img src={img} alt={alt} loading="lazy" decoding="async" style={{ objectPosition: pos }} /></figure>
      <div className="talk-copy">
        <h2 className="tt">{title}</h2>
        <Paras t={left} />
        <Paras t={right} />
        <div className="ways">
          <a className="way" href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} data-hover="true" data-cursor="Write">
            <span className="tt">Email</span><span className="way-d" ref={addr}>{email}</span>
          </a>
          <a className="way" href={linkedin} target="_blank" rel="noopener noreferrer" data-hover="true" data-cursor="Open">
            <span className="tt">LinkedIn</span><span className="way-d">{linkedinLabel}</span>
          </a>
        </div>
        <button type="button" className="copy" onClick={copy} data-hover="true">{copied ? "Copied" : "Copy my email address"}</button>
      </div>
    </section>
  );
};

/* BUILDING NOW. One full screen per project, each in its own light, and the next one slides over it.
   kind: photo (the picture fills the screen), object (the picture floats like a piece), stack (posts fanned like cards). */
const BayArt = ({ d, e, mx, my }) => {
  const y = useTransform(e, (v) => `${(1 - v) * 70}px`);
  const r = useTransform(e, (v) => (d.tilt || 0) * (1 + (1 - v) * 2.5));
  const sc = useTransform(e, (v) => 1.08 - 0.08 * v);
  /* the piece leans towards the mouse, the photo drifts with it */
  const rx = useSpring(useTransform(my, (v) => -v * 9), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, (v) => v * 13), { stiffness: 120, damping: 18 });
  const px = useSpring(useTransform(mx, (v) => v * -26), { stiffness: 90, damping: 20 });
  const py = useSpring(useTransform(my, (v) => v * -18), { stiffness: 90, damping: 20 });
  if (d.kind === "photo")
    return (
      <Go to={d.link[1]} className="bay-photo" cursor>
        <motion.img src={d.img} alt={d.alt} style={{ objectPosition: d.pos, scale: sc, x: px, y: py }} loading="lazy" decoding="async" />
      </Go>
    );
  if (d.kind === "stack")
    return (
      <Go to={d.link[1]} className="bay-art" cursor>
        <motion.div className="bay-tilt" style={{ rotateX: rx, rotateY: ry }}>
          <motion.div className="bay-stack" style={{ y }}>
            {d.stack.map(([src, alt], k) => <img key={src} src={src} alt={alt} loading="lazy" decoding="async" className={"c" + k} />)}
          </motion.div>
        </motion.div>
      </Go>
    );
  return (
    <Go to={d.link[1]} className="bay-art" cursor>
      <motion.div className="bay-tilt" style={{ rotateX: rx, rotateY: ry }}>
        <motion.img className="bay-object" src={d.img} alt={d.alt} style={{ y, rotate: r, aspectRatio: d.ratio }} loading="lazy" decoding="async" />
      </motion.div>
    </Go>
  );
};

const Bay = ({ d, i, hold, m }) => {
  const ref = useRef(null);
  const { scrollYProgress: e } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  /* the words rise into place as the scene finishes arriving */
  const ty = useTransform(e, [0.45, 0.95], [60, 0], { clamp: true });
  const to = useTransform(e, [0.45, 0.9], [0, 1], { clamp: true });
  const cy = useTransform(e, [0.55, 1], [40, 0], { clamp: true });
  const co = useTransform(e, [0.55, 1], [0, 1], { clamp: true });
  const move = (ev) => {
    if (m) return;
    const b = ev.currentTarget.getBoundingClientRect();
    mx.set((ev.clientX - b.left) / b.width - 0.5);
    my.set((ev.clientY - b.top) / b.height - 0.5);
  };
  const leave = () => { mx.set(0); my.set(0); };
  return (
    <section ref={ref} className={`bay t-${d.tone} side-${d.side} k-${d.kind}` + (d.dim ? " dim" : "") + (hold ? " hold" : "")} id={"bay-" + i} data-tone={d.tone}>
      <div className="bay-pin" onPointerMove={move} onPointerLeave={leave}>
        <BayArt d={d} e={e} mx={mx} my={my} />
        <div className="bay-copy">
          <motion.div style={{ y: ty, opacity: to }}>
            <span className="bay-when">{d.when}</span>
            <h2 className="tt">{d.title}</h2>
          </motion.div>
          <motion.div style={{ y: cy, opacity: co }}>
            <p className="bay-what">{d.what}</p>
            <Paras t={d.text} />
            {d.stat && <div className="bay-stat"><span className="tt">{d.stat[0]}</span><span>{d.stat[1]}</span></div>}
            <Go to={d.link[1]} className="btn">{d.link[0]}</Go>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Bays = ({ items, label, hold }) => {
  const m = useIsMobile();
  const [cur, setCur] = useState(0);
  useEffect(() => {
    if (m) return;
    const els = items.map((_, i) => document.getElementById("bay-" + i));
    const on = () => {
      let k = 0;
      els.forEach((el, i) => { if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) k = i; });
      setCur(k);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [m, items]);
  const go = (i) => {
    const el = document.getElementById("bay-" + i);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY;
    window.__lenis ? window.__lenis.scrollTo(y) : window.scrollTo(0, y);
  };
  return (
    <div className={"bays" + (hold ? " hold" : "")}>
      {!m && label && (
        <div className="bays-guide">
          <nav className={"guide" + (items[cur].tone === "light" ? "" : " on-dark")} aria-label={label}>
            <span className="guide-y">{label}</span>
            {items.map((d, i) => <button key={d.title} className={i === cur ? "is-on" : ""} onClick={() => go(i)} data-hover="true">{d.title}</button>)}
          </nav>
        </div>
      )}
      {items.map((d, i) => <Bay key={d.title} d={d} i={i} m={m} hold={!m && (i < items.length - 1 || hold)} />)}
    </div>
  );
};
