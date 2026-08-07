import { motion } from "framer-motion";
import BackToGarage from "../components/BackToGarage";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const RED = "#a9170b";

const WhyPage = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        minHeight: "100dvh",
        backgroundColor: "#0d0d0b",
        display: "flex",
        alignItems: "center",
        paddingLeft: isMobile ? 24 : "clamp(80px, 12vw, 180px)",
        paddingRight: isMobile ? 24 : "6vw",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <BackToGarage />

      <div style={{ maxWidth: 760 }}>
        <motion.span
          className="font-body"
          style={{ fontSize: 12, color: "rgba(255,252,232,0.50)", display: "block", marginBottom: 28, letterSpacing: "0.1em", textTransform: "uppercase" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          02 — The origin
        </motion.span>

        <motion.h1
          className="font-display"
          style={{ fontSize: isMobile ? 52 : "clamp(64px, 9vw, 120px)", color: CREAM, lineHeight: 0.92, margin: 0 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          WHY<br />MOTORSPORT
        </motion.h1>

        <motion.p
          className="font-body"
          style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.8, color: "rgba(255,252,232,0.80)", margin: "40px 0 0 0", maxWidth: 560 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          This one deserves to be told properly... it starts with my father, a
          paddock, and a Sunday that never really ended.
        </motion.p>

        <motion.span
          className="font-display"
          style={{ display: "inline-block", fontSize: 15, color: RED, letterSpacing: "0.08em", marginTop: 44, borderBottom: "1px solid rgba(169,23,11,0.4)", paddingBottom: 4 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          IN THE WORKSHOP — COMING SOON
        </motion.span>
      </div>
    </div>
  );
};

export default WhyPage;
