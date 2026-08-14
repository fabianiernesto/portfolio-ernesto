import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const RED = "#a9170b";

const F1Page = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        backgroundColor: "#0d0d0b",
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: isMobile ? 20 : 48,
        paddingRight: isMobile ? 20 : 48,
        paddingTop: isMobile ? 90 : 110,
        paddingBottom: isMobile ? 80 : 100,
      }}
    >
      {/* Back to the grid */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ position: "fixed", top: 20, left: 20, zIndex: 8000, mixBlendMode: "difference" }}
      >
        <Link
          to="/building-now"
          data-hover="true"
          className="font-body"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#ffffff", textDecoration: "none", fontSize: 11, letterSpacing: "0.12em" }}
        >
          <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 5H1.5M1.5 5L4.5 2M1.5 5L4.5 8" />
          </svg>
          BUILDING NOW
        </Link>
      </motion.div>

      {/* The preview */}
      <motion.img
        src="/f1_preview.png"
        alt="A preview of the Formula 1 race weekend recap I'm building"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          maxWidth: 1280,
          height: "auto",
          display: "block",
          border: "1px solid rgba(255,252,232,0.14)",
          boxShadow: "0 30px 70px rgba(0,0,0,0.6)",
        }}
      />

      {/* Soon */}
      <motion.span
        className="font-display"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        style={{
          marginTop: isMobile ? 36 : 52,
          fontSize: isMobile ? 40 : "clamp(48px, 6vw, 88px)",
          color: RED,
          lineHeight: 1,
          letterSpacing: "0.02em",
        }}
      >
        SOON<motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: CREAM }}
        >...</motion.span>
      </motion.span>
    </div>
  );
};

export default F1Page;
