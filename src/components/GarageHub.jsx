import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const RED = "#a9170b";

const ITEMS = [
  {
    index: "01",
    title: "BUILT ALREADY",
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
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Menu */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: isMobile ? 24 : "clamp(48px, 8vw, 120px)",
          paddingRight: isMobile ? 24 : "clamp(48px, 8vw, 120px)",
        }}
      >
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: 28 }}
            animate={entered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
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
                  padding: isMobile ? "20px 0" : "24px 0",
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

      {/* Checkered flag strip — bottom edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={entered ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.9 }}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: isMobile ? 12 : 16,
          backgroundImage:
            "repeating-conic-gradient(rgba(255,252,232,0.16) 0% 25%, transparent 0% 50%)",
          backgroundSize: isMobile ? "12px 12px" : "16px 16px",
        }}
      />
    </div>
  );
};

export default GarageHub;
