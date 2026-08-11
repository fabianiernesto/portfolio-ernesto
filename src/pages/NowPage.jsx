import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackToGarage from "../components/BackToGarage";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const RED = "#a9170b";
const CARD = "#ffffff";
const TILE = "#efe9d6";
const INK = "#111110";

/* ── Project data ──────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "writing",
    index: "01",
    status: "LIVE, EVERY WEEK",
    live: true,
    title: "THE BUSINESS OF RACING",
    teaser: "Two weekly series on LinkedIn.",
    img: "/now_writing.jpg",
    link: { label: "Read it on LinkedIn", href: "https://www.linkedin.com/in/ernestofabiani/" },
    body: [
      "Every week I publish two series on LinkedIn, and both come from the same place... this sport is far more interesting underneath than the highlights ever make it look.",
      "MOTORSPORT SIMPLIFIED takes one idea from the motor world and explains it the way you'd explain it to a mate at a bar. F1, WEC, WRC, NASCAR, the Indy 500... no jargon, no paddock pass required.",
      "MOTORSPORT STORIES takes a driver and a real moment, and digs out the contract, the money or the team politics sitting underneath it that the highlight reel never shows you.",
    ],
  },
  {
    id: "garage",
    index: "02",
    status: "LIVE, YOU'RE IN IT",
    live: true,
    title: "THIS GARAGE",
    teaser: "Coded from scratch, no template.",
    img: "/now_garage.jpg",
    link: null,
    body: [
      "You're standing inside it. I built this whole thing myself with Claude Code, no template and no agency, shaped as a garage because that's the only honest way to lay out a story where every turn ends up back at the motor world.",
      "I could have written \"I learn fast and I build things\" on a CV instead. This felt like the better argument.",
    ],
  },
  {
    id: "f1",
    index: "03",
    status: "IN THE WORKSHOP",
    live: false,
    title: "A RACE, WORTH WATCHING",
    teaser: "Making a Grand Prix hold your attention.",
    img: "/now_f1.jpg",
    link: null,
    body: [
      "Watching a Grand Prix asks you to already know everything, and if you don't, the whole thing turns into cars going round while someone shouts numbers at you.",
      "So I'm building a way to live a race weekend that actually holds your attention, put together from real timing data and told the way the friend who watches every session would tell it to you.",
      "Still in pieces on the workbench... but this one I'm genuinely obsessed with.",
    ],
  },
];

const StatusChip = ({ label, live }) => (
  <span
    className="font-body"
    style={{
      display: "inline-block",
      fontSize: 10,
      letterSpacing: "0.14em",
      padding: "5px 11px",
      whiteSpace: "nowrap",
      color: live ? CREAM : RED,
      backgroundColor: live ? RED : "transparent",
      border: `1px solid ${live ? RED : "rgba(169,23,11,0.45)"}`,
    }}
  >
    {label}
  </span>
);

const Card = ({ project, onOpen, isMobile }) => (
  <motion.button
    onClick={() => onOpen(project)}
    data-hover="true"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-8%" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -8, boxShadow: "0 26px 50px rgba(40,28,12,0.18)" }}
    style={{
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      padding: 0,
      cursor: "pointer",
      background: CARD,
      border: "1px solid rgba(0,0,0,0.12)",
      boxShadow: "0 14px 30px rgba(40,28,12,0.10)",
      overflow: "hidden",
      fontFamily: "inherit",
    }}
  >
    {/* image / placeholder */}
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "3 / 4",
        overflow: "hidden",
        backgroundColor: TILE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {project.img ? (
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span
          className="font-display"
          style={{ fontSize: "clamp(80px, 10vw, 140px)", color: "rgba(0,0,0,0.07)", lineHeight: 1 }}
        >
          {project.index}
        </span>
      )}
    </div>

    {/* meta */}
    <div style={{ padding: isMobile ? "24px 22px 26px" : "28px 28px 30px", display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <StatusChip label={project.status} live={project.live} />
        <span className="font-body" style={{ fontSize: 13, color: "rgba(0,0,0,0.35)", letterSpacing: "0.1em" }}>
          {project.index}
        </span>
      </div>

      <h2
        className="font-display"
        style={{ fontSize: isMobile ? 28 : "clamp(26px, 2.1vw, 36px)", color: INK, lineHeight: 1.02, margin: 0 }}
      >
        {project.title}
      </h2>

      <p className="font-body" style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.60)", margin: 0 }}>
        {project.teaser}
      </p>

      <span
        className="font-body"
        style={{ marginTop: "auto", paddingTop: 6, fontSize: 12, letterSpacing: "0.08em", color: RED, display: "inline-flex", alignItems: "center", gap: 7 }}
      >
        OPEN
        <svg width="11" height="11" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
        </svg>
      </span>
    </div>
  </motion.button>
);

const NowPage = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(null);

  const PL = isMobile ? "24px" : "clamp(80px, 12vw, 180px)";
  const PR = isMobile ? "24px" : "clamp(60px, 10vw, 160px)";

  return (
    <div style={{ backgroundColor: CREAM, position: "relative", minHeight: "100dvh" }}>
      <BackToGarage />

      {!isMobile && (
        <motion.span
          className="font-display"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 8000,
            mixBlendMode: "difference",
            color: "#ffffff",
            fontSize: 14,
            letterSpacing: "0.1em",
          }}
        >
          BUILDING NOW
        </motion.span>
      )}

      <div
        style={{
          paddingLeft: isMobile ? "24px" : "clamp(40px, 5vw, 80px)",
          paddingRight: isMobile ? "24px" : "clamp(40px, 5vw, 80px)",
          paddingTop: isMobile ? 96 : 120,
          paddingBottom: isMobile ? 72 : 90,
        }}
      >
        {/* ── Intro ─────────────────────────────────────────────── */}
        <motion.p
          className="font-quote"
          style={{
            fontSize: isMobile ? 24 : "clamp(28px, 3vw, 42px)",
            color: INK,
            margin: 0,
            maxWidth: 820,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Wanting in is not a plan, so this is the part I can actually control.
          Three things running right now, all pointing at the same place... pick
          one.
        </motion.p>

        {/* ── Cards ─────────────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? 24 : "clamp(20px, 2.2vw, 34px)",
            marginTop: isMobile ? 44 : 64,
          }}
        >
          {PROJECTS.map((p) => (
            <Card key={p.id} project={p} onOpen={setOpen} isMobile={isMobile} />
          ))}
        </div>
      </div>

      {/* ── Detail modal ──────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              backgroundColor: "rgba(20,14,6,0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: isMobile ? 16 : 32,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: CARD,
                border: "1px solid rgba(0,0,0,0.12)",
                boxShadow: "0 30px 70px rgba(20,14,6,0.35)",
                width: "100%",
                maxWidth: 680,
                maxHeight: "88dvh",
                overflowY: "auto",
                position: "relative",
              }}
            >
              {/* close */}
              <button
                onClick={() => setOpen(null)}
                data-hover="true"
                style={{
                  position: "absolute",
                  top: 16,
                  right: 18,
                  zIndex: 2,
                  background: "rgba(255,252,232,0.85)",
                  border: "1px solid rgba(0,0,0,0.12)",
                  cursor: "pointer",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "rgba(0,0,0,0.55)",
                  fontFamily: "inherit",
                  padding: "8px 12px",
                }}
              >
                ✕ CLOSE
              </button>

              {/* image / placeholder */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  backgroundColor: TILE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {open.img ? (
                  <img src={open.img} alt={open.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <span className="font-display" style={{ fontSize: 120, color: "rgba(0,0,0,0.07)" }}>
                    {open.index}
                  </span>
                )}
              </div>

              {/* body */}
              <div style={{ padding: isMobile ? "28px 24px 32px" : "40px 44px 44px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                  <StatusChip label={open.status} live={open.live} />
                </div>

                <h2
                  className="font-display"
                  style={{ fontSize: isMobile ? 34 : 48, color: INK, lineHeight: 0.98, margin: "0 0 24px 0" }}
                >
                  {open.title}
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {open.body.map((para, i) => (
                    <p
                      key={i}
                      className="font-body"
                      style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.75, color: "rgba(0,0,0,0.78)", margin: 0 }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {open.link && (
                  <motion.a
                    href={open.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body"
                    data-hover="true"
                    whileHover={{ opacity: 0.7 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      marginTop: 32,
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      color: RED,
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(169,23,11,0.4)",
                      paddingBottom: 3,
                    }}
                  >
                    {open.link.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NowPage;
