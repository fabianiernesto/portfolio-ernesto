import { motion } from "framer-motion";
import BackToGarage from "../components/BackToGarage";
import useIsMobile from "../hooks/useIsMobile";

const RED = "#a9170b";

const NowPage = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        minHeight: "100dvh",
        backgroundColor: "#fffce8",
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
          Wanting in is not a plan. This is where the actual work will live —
          what I'm writing about the business of motorsport, and what I'm
          building around it.
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

export default NowPage;
