import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackToGarage from "../components/BackToGarage";
import useIsMobile from "../hooks/useIsMobile";
import { PROJECTS } from "../data/nowProjects";

const CREAM = "#fffce8";
const RED = "#a9170b";
const CARD = "#ffffff";
const TILE = "#efe9d6";
const INK = "#111110";

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

const Card = ({ project, isMobile }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-8%" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -8, boxShadow: "0 26px 50px rgba(40,28,12,0.18)" }}
    style={{
      background: CARD,
      border: "1px solid rgba(0,0,0,0.12)",
      boxShadow: "0 14px 30px rgba(40,28,12,0.10)",
      overflow: "hidden",
    }}
  >
    <Link
      to={`/building-now/${project.id}`}
      data-hover="true"
      style={{ display: "flex", flexDirection: "column", textAlign: "left", textDecoration: "none", height: "100%" }}
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
          <span className="font-display" style={{ fontSize: "clamp(80px, 10vw, 140px)", color: "rgba(0,0,0,0.07)", lineHeight: 1 }}>
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

        <h2 className="font-display" style={{ fontSize: isMobile ? 28 : "clamp(26px, 2.1vw, 36px)", color: INK, lineHeight: 1.02, margin: 0 }}>
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
    </Link>
  </motion.div>
);

const NowPage = () => {
  const isMobile = useIsMobile();

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
          style={{ fontSize: isMobile ? 24 : "clamp(28px, 3vw, 42px)", color: INK, margin: 0, maxWidth: 820 }}
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
            <Card key={p.id} project={p} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NowPage;
