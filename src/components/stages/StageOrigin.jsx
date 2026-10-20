import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const CREAM = "#fffce8";

const StageOrigin = () => {
  const isMobile = useIsMobile();
  return (
    <section id="stage-origin" style={{ backgroundColor: "#a9170b", position: "relative" }}>

      {/* Top area — watermark year */}
      <div style={{
        paddingLeft: isMobile ? "24px" : "clamp(80px, 12vw, 180px)",
        paddingRight: isMobile ? "24px" : "clamp(60px, 8vw, 120px)",
        paddingTop: 48,
        overflow: "hidden",
        lineHeight: 1,
      }}>
        <motion.div
          className="font-display pointer-events-none select-none"
          style={{ color: CREAM, opacity: 0.14, lineHeight: 1, whiteSpace: "nowrap", fontSize: isMobile ? "clamp(40px, 12vw, 60px)" : "clamp(72px, 9.5vw, 140px)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.14 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          2022
        </motion.div>
      </div>

      <div style={{
        paddingLeft: isMobile ? "24px" : "clamp(80px, 12vw, 180px)",
        paddingRight: isMobile ? "24px" : "clamp(60px, 8vw, 120px)",
        paddingTop: isMobile ? 24 : 32,
        paddingBottom: isMobile ? 60 : 100,
      }}>

        <motion.span
          className="font-display"
          style={{ fontSize: 20, color: "rgba(255,252,232,0.75)", display: "block" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          SUMMER 2022 · WAREHOUSE PORTER
        </motion.span>

        <motion.h2
          className="font-display"
          style={{ fontSize: isMobile ? 40 : 64, color: CREAM, margin: "12px 0 40px 0", lineHeight: 0.95 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          WHERE IT STARTS.
        </motion.h2>

        <motion.div
          style={{ maxWidth: 620, display: "flex", flexDirection: "column", gap: 24 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,252,232,0.88)", margin: 0 }}>
            Before any of this, a warehouse. Bottling, moving boxes, cleaning factory floors at José Collado S.A. in the summer of 2022, the last summer before everything started moving.
          </p>
          <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,252,232,0.88)", margin: 0 }}>
            It's the only summer on this page with no project in it, no pitch, no deck, nothing to build... and I think about it more than you'd expect.
          </p>
          <p className="font-display" style={{ fontSize: isMobile ? 26 : 38, color: CREAM, margin: "14px 0 0 0", lineHeight: 1 }}>
            Every floor was necessary.
          </p>
        </motion.div>

      </div>

    </section>
  );
};

export default StageOrigin;
