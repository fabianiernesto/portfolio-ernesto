import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const StageYearOne = () => {
  const isMobile = useIsMobile();
  return (
    <section id="stage-year-one" style={{ backgroundColor: "#fffce8", position: "relative" }}>

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
          style={{ color: "#000", opacity: 0.06, lineHeight: 1, whiteSpace: "nowrap", fontSize: isMobile ? "clamp(40px, 12vw, 60px)" : "clamp(72px, 9.5vw, 140px)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          2022 — 2023
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
          style={{ fontSize: 20, color: "#a9170b", display: "block" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          IQS BARCELONA · INTERNATIONAL BUSINESS
        </motion.span>

        <motion.h2
          className="font-display"
          style={{ fontSize: isMobile ? 40 : 64, color: "#000", margin: "12px 0 40px 0", lineHeight: 0.95 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          YEAR ONE.
        </motion.h2>

        <motion.div
          style={{ maxWidth: 620, display: "flex", flexDirection: "column", gap: 24 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
            IQS Barcelona. International Business, the triple degree programme. The beginning of the structure.
          </p>
          <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
            And at the end of it, the summer back on the island as an accounting intern at 5 Pétalos de Rosa. Invoices and numbers mostly, nothing glamorous about it... but it was my first real look at how a business runs day to day instead of how a lecture says it runs.
          </p>
        </motion.div>

      </div>

    </section>
  );
};

export default StageYearOne;
