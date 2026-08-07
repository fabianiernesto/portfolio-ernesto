import { motion } from "framer-motion";
import BackToGarage from "../components/BackToGarage";
import useIsMobile from "../hooks/useIsMobile";

const RED = "#a9170b";

const PROJECTS = [
  {
    index: "01",
    title: "THE BUSINESS OF MOTORSPORT, WEEKLY",
    status: "LIVE",
    live: true,
    body: "Every week on LinkedIn I write about the business behind racing... the sponsorships, the rights deals, the decisions that happen far from the grid. Plain language, no paddock pass required.",
    link: { label: "Read on LinkedIn", href: "https://www.linkedin.com/in/ernestofabiani/" },
  },
  {
    index: "02",
    title: "AN F1 WEEKEND, RETOLD",
    status: "IN THE WORKSHOP",
    live: false,
    body: "A web app that retells every Grand Prix session for casual fans. Not more data... more attention. Built on live timing data, written the way your F1 friend would tell it.",
    link: null,
  },
  {
    index: "03",
    title: "MADRID, SEPTEMBER 2026",
    status: "LOCKED IN",
    live: false,
    body: "Moving to where the Spanish motor industry actually runs. Not waiting for the industry to find me... going to it.",
    link: null,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
};

const NowPage = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        minHeight: "100dvh",
        backgroundColor: "#fffce8",
        paddingLeft: isMobile ? 24 : "clamp(80px, 12vw, 180px)",
        paddingRight: isMobile ? 24 : "clamp(60px, 10vw, 160px)",
        paddingTop: isMobile ? 100 : 140,
        paddingBottom: isMobile ? 80 : 140,
      }}
    >
      <BackToGarage />

      <div style={{ maxWidth: 760 }}>
        <motion.span
          className="font-body"
          style={{ fontSize: 12, color: "rgba(0,0,0,0.45)", display: "block", marginBottom: 28, letterSpacing: "0.1em", textTransform: "uppercase" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          03 — Active projects
        </motion.span>

        <motion.h1
          className="font-display"
          style={{ fontSize: isMobile ? 52 : "clamp(64px, 9vw, 120px)", color: "#000", lineHeight: 0.92, margin: 0 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          BUILDING<br />NOW
        </motion.h1>

        <motion.p
          className="font-body"
          style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: "40px 0 0 0", maxWidth: 560 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          Wanting in is not a plan. This is the actual work... live, in public,
          this season.
        </motion.p>

        {/* Project blocks */}
        <div style={{ marginTop: isMobile ? 48 : 72 }}>
          {PROJECTS.map((p) => (
            <motion.article
              key={p.index}
              {...fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderTop: "1px solid rgba(0,0,0,0.15)",
                padding: isMobile ? "32px 0" : "44px 0",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <span className="font-body" style={{ fontSize: 13, color: "rgba(0,0,0,0.40)", letterSpacing: "0.08em" }}>
                  {p.index}
                </span>
                <span
                  className="font-body"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    padding: "5px 10px",
                    color: p.live ? "#fffce8" : RED,
                    backgroundColor: p.live ? RED : "transparent",
                    border: `1px solid ${p.live ? RED : "rgba(169,23,11,0.45)"}`,
                  }}
                >
                  {p.status}
                </span>
              </div>

              <h2
                className="font-display"
                style={{
                  fontSize: isMobile ? 26 : "clamp(28px, 3.2vw, 44px)",
                  color: "#000",
                  lineHeight: 1.02,
                  margin: "18px 0 0 0",
                }}
              >
                {p.title}
              </h2>

              <p
                className="font-body"
                style={{
                  fontSize: isMobile ? 14 : 15,
                  lineHeight: 1.75,
                  color: "rgba(0,0,0,0.72)",
                  margin: "16px 0 0 0",
                  maxWidth: 560,
                }}
              >
                {p.body}
              </p>

              {p.link && (
                <motion.a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body"
                  data-hover="true"
                  whileHover={{ opacity: 0.7 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 22,
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    color: RED,
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(169,23,11,0.40)",
                    paddingBottom: 3,
                  }}
                >
                  {p.link.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
                  </svg>
                </motion.a>
              )}
            </motion.article>
          ))}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }} />
        </div>
      </div>
    </div>
  );
};

export default NowPage;
