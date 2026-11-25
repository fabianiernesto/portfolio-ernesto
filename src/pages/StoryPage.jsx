/* eslint-disable */
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import BackToGarage from "../components/BackToGarage";
import useIsMobile from "../hooks/useIsMobile";
import { SEASONS } from "../data/story";
import "./story.css";

const A = "/story/";

const Media = ({ src, alt = "", pos, eager }) =>
  src.endsWith(".mp4") ? (
    <video className="media" style={{ objectPosition: pos }} src={src} autoPlay muted loop playsInline preload={eager ? "auto" : "metadata"} />
  ) : (
    <img className="media" style={{ objectPosition: pos }} src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" />
  );

const Lines = ({ t }) => t.map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>);

const Anchor = ({ link }) =>
  link ? <a className="lnk" href={link[1]} target="_blank" rel="noopener noreferrer" data-hover="true">{link[0]}</a> : null;

const Paras = ({ t }) => t.map((x, i) => <p key={i}>{x}</p>);

const Meta = ({ d }) => (d.when ? <div className="meta"><span className="meta-w">{d.when}</span><span>{d.what}</span></div> : null);

/* Two numbers and a window. The window opens until the photograph is the screen. */
const Cover = ({ s }) => {
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
      <div className={"c-frame" + (d.light ? " light" : d.title.join("").length > 5 ? " over" : "")}>
        <motion.div className="c-img" style={{ x }}><Media src={d.img} alt={d.alt} pos={d.pos} /></motion.div>
        <div className={"tt c-tt" + long} aria-hidden="true"><Lines t={d.title} /></div>
      </div>
      <div className="c-col l"><Meta d={d} /><Paras t={d.left} /></div>
      <div className="c-col r"><Paras t={d.right} /><Anchor link={d.link} /></div>
    </article>
  );
};

const Full = ({ d, x }) => (
  <article className="panel full">
    <motion.div style={{ position: "absolute", inset: 0, x }}><Media src={d.img} alt={d.alt} pos={d.pos} /></motion.div>
    <div className="shade" />
    <div className="f-text"><h3 className="tt"><Lines t={d.title} /></h3><Meta d={d} /><Paras t={d.left} /></div>
  </article>
);

const Panel = ({ d, i, n, p, m }) => {
  const at = n > 1 ? i / (n - 1) : 0;
  const step = n > 1 ? 1 / (n - 1) : 1;
  const x = useTransform(p, [at - step, at + step], m ? ["0%", "0%"] : ["-3%", "3%"]);
  return d.full ? <Full d={d} x={x} /> : <Art d={d} x={x} />;
};

const Track = ({ panels, label }) => {
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

const ME = [{
  tab: "Ernesto Fabiani",
  title: ["Ernesto Fabiani"], img: A + "portrait.webp", alt: "Ernesto Fabiani", pos: "62% 20%",
  left: ["22 years old, Mallorca to Barcelona to Madrid, International Business graduate, and I've never wanted something this clearly in my life, a job in motorsport, on the business side of it."],
  right: ["I've spent four years throwing myself into things I had no business doing at that age, because sitting still has never been an option for me.", "From here the page goes BACKWARDS, from what I do today, through each year of my degree, to a warehouse floor in 2022."],
  link: ["LinkedIn", "https://www.linkedin.com/in/ernestofabiani/"],
}, {
  tab: "José Collado", title: ["José Collado"], img: A + "jc.webp", alt: "José Collado S.A.", pos: "30% 50%",
  when: "July 2026 to today", what: "Head of B2B Digital Growth, remote from Madrid",
  left: ["José Collado S.A. is a chemical disinfection company founded in 1925. I was brought in right after graduating to build its B2B digital growth function from the ground up."],
  right: ["In practice that's LinkedIn, email marketing and the website, all of it tied to how the company reaches business clients online and converts them.", "And four summers before that I was cleaning its factory floors, so keep scrolling to the very end :)"],
}];

const StoryPage = () => (
  <div className="story">
    <BackToGarage />
    <main>
      <header className="s-hero">
        <Media src={A + "hero.mp4"} eager />
        <div className="shade" />
        <motion.div className="s-center" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
          <h1 className="tt">Built already</h1>
          <p>This is not a CV. It's the four years that got me here, 2026 back to 2022.</p>
        </motion.div>
      </header>
      <Track panels={ME} label="Today, 2026" />
      {SEASONS.map((s) => (
        <div key={s.from}>
          <Cover s={s} />
          <Track panels={s.panels} label={`${s.title[0]}, ${s.when}`} />
        </div>
      ))}
      <footer className="s-end">
        <div className="s-center">
          <h2 className="tt">Let's talk</h2>
          <p>If you're in motorsport or automotive, or you know someone who is, write me. No pitch needed, no formalities... I just really like talking to people who live in this world ;)</p>
          <div className="btns">
            <Link to="/contact" data-hover="true">Contact</Link>
            <a href="https://www.linkedin.com/in/ernestofabiani/" target="_blank" rel="noopener noreferrer" data-hover="true">LinkedIn</a>
          </div>
        </div>
        <div className="cred">Photos: Sheffield, Benedict Hunjan (CC BY-SA 3.0). Paris, Getfunky Paris (CC BY 2.0). Barcelona, Mickey Løgitmark (CC BY 3.0). Cropped and resized, via Wikimedia Commons.</div>
      </footer>
    </main>
  </div>
);

export default StoryPage;
