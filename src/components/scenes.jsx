/* eslint-disable */
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import BackToGarage from "./BackToGarage";
import useIsMobile from "../hooks/useIsMobile";
import "../pages/story.css";

export const Media = ({ src, alt = "", pos, eager }) =>
  src.endsWith(".mp4") ? (
    <video className="media" style={{ objectPosition: pos }} src={src} autoPlay muted loop playsInline preload={eager ? "auto" : "metadata"} />
  ) : (
    <img className="media" style={{ objectPosition: pos }} src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" />
  );

export const Lines = ({ t }) => t.map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>);

const Anchor = ({ link }) =>
  !link ? null : link[1].startsWith("/") && !link[1].endsWith(".mp4") ? <Link className="lnk" to={link[1]} data-hover="true">{link[0]}</Link> : <a className="lnk" href={link[1]} target="_blank" rel="noopener noreferrer" data-hover="true">{link[0]}</a>;

const Paras = ({ t }) => t.map((x, i) => <p key={i}>{x}</p>);

const Meta = ({ d }) => (d.when ? <div className="meta"><span className="meta-w">{d.when}</span><span>{d.what}</span></div> : null);

/* Two numbers and a window. The window opens until the photograph is the screen. */
export const Cover = ({ s }) => {
  const ref = useRef(null);
  const m = useIsMobile();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const open = useTransform(p, [0.08, 0.62], [0, 1], { clamp: true });
  const clip = useTransform(open, (v) => `inset(${(m ? 30 : 20) * (1 - v)}% ${37 * (1 - v)}%)`);
  const mx = useTransform(open, (v) => `${(m ? 0 : s.shift || 0) * (1 - v)}vw`);
  const l = useTransform(open, [0, 0.8], ["0vw", "-40vw"]);
  const r = useTransform(open, [0, 0.8], ["0vw", "40vw"]);
  const o = useTransform(p, (v) => Math.min(1, Math.max(0, (v - 0.56) / 0.16)));
  const y = useTransform(o, (v) => 40 * (1 - v));
  const my = useTransform(open, (v) => `${(s.drop ? (m ? 27 : s.drop) : 0) * (1 - v)}vh`);
  return (
    <section className="cover" ref={ref}>
      <div className="cover-pin">
        <motion.div className="tt cover-n l" style={{ x: l }}>{s.from}</motion.div>
        <motion.div className="tt cover-n r" style={{ x: r }}>{s.to}</motion.div>
        <motion.div className={"cover-win" + (s.contain ? " contain" : "")} style={{ clipPath: clip }}>
          <motion.div style={{ position: "absolute", inset: 0, x: mx, y: my }}><Media src={s.cover} alt={s.coverAlt} pos={s.pos} /></motion.div>
          <motion.div className="shade" style={{ opacity: o }} />
        </motion.div>
        <motion.div className="s-center" style={{ opacity: o, y }}>
          <h2 className="tt"><Lines t={s.title} /></h2>
          <span className="c-when">{s.when}</span>
          <p>{s.intro}</p>
        </motion.div>
      </div>
    </section>
  );
};

/* A title wider than its photograph is all red, over a photograph that fades into the page. */
const Art = ({ d, x }) => {
  const long = d.title.join("").length > 12 ? " long" : "";
  return (
    <article className="panel art">
      <h3 className={"tt c-tt" + long}><Lines t={d.title} /></h3>
      <div className={"c-frame" + (d.contain ? " fit" : "") + (d.light ? " light" : d.title.join("").length > 5 ? " over" : "")}>
        <motion.div className="c-img" style={{ x }}><Media src={d.img} alt={d.alt} pos={d.pos} /></motion.div>
        <div className={"tt c-tt" + long} aria-hidden="true"><Lines t={d.title} /></div>
      </div>
      <div className="c-col l"><Meta d={d} /><Paras t={d.left} /></div>
      <div className="c-col r"><Paras t={d.right} /><Anchor link={d.link} />{d.links && <div className="lnks">{d.links.map((l) => <Anchor key={l[0]} link={l} />)}</div>}</div>
    </article>
  );
};

const Full = ({ d, x }) => (
  <article className="panel full">
    <motion.div style={{ position: "absolute", inset: 0, x }}><Media src={d.img} alt={d.alt} pos={d.pos} /></motion.div>
    <div className="shade" />
    <div className="f-text"><h3 className="tt"><Lines t={d.title} /></h3><Meta d={d} /><Paras t={d.left} /><Anchor link={d.link} /></div>
  </article>
);

/* A screen, or anything landscape: picture on top, two columns of text under it. */
const Wide = ({ d }) => (
  <article className="panel wide">
    <div className={"w-frame" + (d.fit ? " fit" : d.cert ? " cert" : "")}><Media src={d.img} alt={d.alt} pos={d.pos} /></div>
    <h3 className="tt w-tt"><Lines t={d.title} /></h3>
    <div className="w-cols">
      <div><Meta d={d} /><Paras t={d.left} /></div>
      <div><Paras t={d.right} /><Anchor link={d.link} />{d.links && <div className="lnks">{d.links.map((l) => <Anchor key={l[0]} link={l} />)}</div>}</div>
    </div>
  </article>
);

/* The same series in three championships, side by side. */
const Trio = ({ d }) => (
  <article className="panel wide trio">
    <div className={"t-row" + (d.tall ? " tall" : "")}>
      {d.trio.map(([img, alt, logo]) => (
        <figure key={img}>
          <img src={img} alt={alt} loading="lazy" decoding="async" />
          {logo && <figcaption><img src={logo} alt="" loading="lazy" /></figcaption>}
        </figure>
      ))}
    </div>
    <h3 className="tt w-tt"><Lines t={d.title} /></h3>
    <div className="w-cols">
      <div><Meta d={d} /><Paras t={d.left} /></div>
      <div><Paras t={d.right} /><Anchor link={d.link} /></div>
    </div>
  </article>
);

const Panel = ({ d, i, n, p, m }) => {
  const at = n > 1 ? i / (n - 1) : 0;
  const step = n > 1 ? 1 / (n - 1) : 1;
  const x = useTransform(p, [at - step, at + step], m ? ["0%", "0%"] : ["-3%", "3%"]);
  return d.trio ? <Trio d={d} /> : d.wide ? <Wide d={d} /> : d.full ? <Full d={d} x={x} /> : <Art d={d} x={x} />;
};

export const Track = ({ panels, label }) => {
  const [cur, setCur] = useState(0);
  const ref = useRef(null);
  const m = useIsMobile();
  const n = panels.length;
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(p, [0, 1], ["0vw", `${-(n - 1) * 100}vw`]);
  useMotionValueEvent(p, "change", (v) => setCur(Math.round(v * (n - 1))));
  const go = (i) => {
    const y = ref.current.getBoundingClientRect().top + window.scrollY + i * window.innerHeight;
    window.__lenis ? window.__lenis.scrollTo(y) : window.scrollTo(0, y);
  };
  return (
    <section className="track" ref={ref} style={{ height: `${n * 100}vh` }}>
      <div className="track-pin">
        {label && (
          <nav className={"guide" + (panels[cur].full ? " on-dark" : "")} aria-label={label}>
            <span className="guide-y">{label}</span>
            {panels.map((d, i) => (
              <button key={i} className={i === cur ? "is-on" : ""} onClick={() => go(i)} data-hover="true">{d.tab}</button>
            ))}
          </nav>
        )}
        <motion.div className="track-run" style={{ x: m ? 0 : x }}>
          {panels.map((d, i) => <Panel key={i} d={d} i={i} n={n} p={p} m={m} />)}
        </motion.div>
      </div>
    </section>
  );
};


export const Hero = ({ src, title, text, pos, dark }) => (
  <header className="s-hero">
    <Media src={src} pos={pos} eager />
    <div className="shade" style={dark ? { background: "rgba(8,8,7,.84)" } : undefined} />
    <motion.div className="s-center" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
      <h1 className="tt"><Lines t={title} /></h1>
      <p>{text}</p>
    </motion.div>
  </header>
);

export const End = ({ title, text, links = [], credits }) => (
  <footer className="s-end">
    <div className="s-center">
      <h2 className={"tt" + (title.join("").length > 20 ? " e-long" : "")}><Lines t={title} /></h2>
      {text && <p>{text}</p>}
      <div className="btns">
        {links.map(([l, h]) => h.startsWith("/")
          ? <Link key={l} to={h} data-hover="true">{l}</Link>
          : <a key={l} href={h} target={h.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" data-hover="true">{l}</a>)}
      </div>
    </div>
    {credits && <div className="cred">{credits}</div>}
  </footer>
);

export const Wing = ({ children, back, backLabel }) => (
  <div className="story"><BackToGarage to={back} label={backLabel} /><main>{children}</main></div>
);
