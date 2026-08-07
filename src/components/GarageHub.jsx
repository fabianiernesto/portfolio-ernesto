import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const RED = "#a9170b";

const ITEMS = [
  {
    index: "01",
    title: "THE ROAD HERE",
    desc: "Four years of building, told as they happened.",
    to: "/story",
  },
  {
    index: "02",
    title: "WHY MOTORSPORT",
    desc: "Where the obsession comes from.",
    to: "/why-motorsport",
  },
  {
    index: "03",
    title: "BUILDING NOW",
    desc: "What I'm doing about it, today.",
    to: "/building-now",
  },
  {
    index: "04",
    title: "LET'S TALK",
    desc: "Motorsport or automotive? Reach out.",
    to: "/contact",
  },
];

const GarageHub = ({ entered }) => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        minHeight: "100dvh",
        backgroundColor: "#0d0d0b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: isMobile ? 32 : 48,
        paddingBottom: isMobile ? 32 : 48,
        paddingLeft: isMobile ? 24 : "clamp(48px, 8vw, 120px)",
        paddingRight: isMobile ? 24 : "clamp(48px, 8vw, 120px)",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={entered ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}
      >
        <span className="font-display" style={{ fontSize: isMobile ? 16 : 18, color: CREAM, letterSpacing: "0.04em" }}>
          ERNESTO FABIANI
        </span>
        <span className="font-body" style={{ fontSize: 11, color: "rgba(255,252,232,0.40)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          in love with business in motorsport
        </span>
      </motion.div>

      {/* Menu */}
      <nav style={{ display: "flex", flexDirection: "column" }}>
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: 28 }}
            animate={entered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={item.to} style={{ textDecoration: "none" }} data-hover="true">
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: isMobile ? 14 : 28,
                  padding: isMobile ? "20px 0" : "26px 0",
                  borderBottom: "1px solid rgba(255,252,232,0.12)",
                  cursor: "pointer",
                }}
              >
                <motion.span
                  className="font-body"
                  variants={{ rest: { color: "rgba(255,252,232,0.35)" }, hover: { color: RED } }}
                  transition={{ duration: 0.2 }}
                  style={{ fontSize: isMobile ? 12 : 14, letterSpacing: "0.08em", flexShrink: 0 }}
                >
                  {item.index}
                </motion.span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <motion.span
                    className="font-display"
                    variants={{ rest: { x: 0, color: CREAM }, hover: { x: isMobile ? 0 : 16, color: CREAM } }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: "block",
                      fontSize: isMobile ? 34 : "clamp(44px, 5.5vw, 76px)",
                      lineHeight: 1,
                    }}
                  >
                    {item.title}
                  </motion.span>
                  <motion.span
                    className="font-body"
                    variants={{ rest: { opacity: 0.45, x: 0 }, hover: { opacity: 0.8, x: isMobile ? 0 : 16 } }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: "block",
                      fontSize: isMobile ? 13 : 14,
                      color: CREAM,
                      marginTop: 8,
                    }}
                  >
                    {item.desc}
                  </motion.span>
                </div>

                <motion.span
                  variants={{ rest: { opacity: 0, x: -12 }, hover: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.25 }}
                  style={{ color: RED, flexShrink: 0, display: isMobile ? "none" : "block" }}
                >
                  <svg width="26" height="26" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
                  </svg>
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={entered ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.0 }}
        style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}
      >
        <span className="font-body" style={{ fontSize: 11, color: "rgba(255,252,232,0.35)", letterSpacing: "0.06em" }}>
          Barcelona → Madrid, 2026
        </span>
        <a
          href="mailto:fabianicolladoernesto@gmail.com"
          className="font-body"
          data-hover="true"
          style={{ fontSize: 11, color: "rgba(255,252,232,0.35)", letterSpacing: "0.06em", textDecoration: "none" }}
        >
          fabianicolladoernesto@gmail.com
        </a>
      </motion.div>
    </div>
  );
};

export default GarageHub;
