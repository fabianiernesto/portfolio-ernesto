/* eslint-disable */
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";
import { Anchor, Lines, Media, Meta, Paras, Rich } from "./scenes";

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
    <section className="album" ref={ref} style={{ height: `${n * 110}vh` }}>
      <div className="album-pin">
        <div className="album-label"><span className="guide-y">{label}</span><span>{String(cur + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span></div>
        <div className="album-text">{items.map((d, k) => <Leaf key={k} d={d} k={k} a={a} />)}</div>
        <div className="album-pile">{items.map((d, k) => <Print key={k} d={d} k={k} a={a} />)}</div>
      </div>
    </section>
  );
};

/* BUILDING NOW. An index: the list stays, the one you are on lights up. */
export const Rail = ({ items }) => {
  const ref = useRef(null);
  const m = useIsMobile();
  const n = items.length;
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [cur, setCur] = useState(0);
  useMotionValueEvent(p, "change", (v) => setCur(Math.min(n - 1, Math.floor(v * n))));
  const go = (i) => {
    const y = ref.current.getBoundingClientRect().top + window.scrollY + (i + 0.5) * (ref.current.offsetHeight - window.innerHeight) / n;
    window.__lenis ? window.__lenis.scrollTo(y) : window.scrollTo(0, y);
  };
  if (m)
    return (
      <section className="rail-m">
        {items.map((d, i) => (
          <article key={d.title}>
            <span className="rail-n">{String(i + 1).padStart(2, "0")}</span>
            <div className={"rail-shot" + (d.fit ? " fit" : "")}><Media src={d.img} alt={d.alt} pos={d.pos} /></div>
            <h3 className="tt">{d.title}</h3><Meta d={d} /><Paras t={d.text} /><Anchor link={d.link} />
          </article>
        ))}
      </section>
    );
  const d = items[cur];
  return (
    <section className="rail" ref={ref} style={{ height: `${n * 80 + 100}vh` }}>
      <div className="rail-pin">
        <ol className="rail-list">
          {items.map((x, i) => (
            <li key={x.title} className={i === cur ? "on" : ""}>
              <button onClick={() => go(i)} data-hover="true"><span className="rail-n">{String(i + 1).padStart(2, "0")}</span><span className="tt">{x.title}</span></button>
            </li>
          ))}
        </ol>
        <div className="rail-stage">
          <AnimatePresence mode="wait">
            <motion.div key={cur} className="rail-card" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
              <div className={"rail-shot" + (d.fit ? " fit" : "")}><Media src={d.img} alt={d.alt} pos={d.pos} /></div>
              <div className="rail-copy"><Meta d={d} /><Paras t={d.text} /><Anchor link={d.link} /></div>
            </motion.div>
          </AnimatePresence>
        </div>
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
