import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const StageBarcelona = () => {
  const isMobile = useIsMobile();
  return (
    <section id="stage-barcelona" style={{ backgroundColor: "#fffce8", position: "relative" }}>

      {/* Top area — watermark year, full width, above the columns */}
      <div style={{
        paddingLeft: isMobile ? "24px" : "clamp(80px, 12vw, 180px)",
        paddingRight: isMobile ? "24px" : "clamp(60px, 8vw, 120px)",
        paddingTop: 48,
        overflow: "hidden",
        lineHeight: 1,
      }}>
        <motion.div
          className="font-display text-anton-140 pointer-events-none select-none"
          style={{ color: "#000", opacity: 0.06, lineHeight: 1, whiteSpace: "nowrap" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          2022 — 2023
        </motion.div>
      </div>

      {/* Two-column row */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        paddingLeft: isMobile ? "24px" : "clamp(80px, 12vw, 180px)",
        paddingRight: isMobile ? "24px" : "clamp(60px, 8vw, 120px)",
        paddingTop: isMobile ? 24 : 49,
        paddingBottom: isMobile ? 60 : 100,
        gap: isMobile ? 40 : 80,
      }}>

        {/* Left — text content */}
        <div style={{ flex: 1, minWidth: 0, marginTop: isMobile ? 0 : -145 }}>

          <motion.span
            className="font-display"
            style={{ fontSize: 20, color: "#a9170b", display: "block" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            SEP 2022 — JUN 2023
          </motion.span>

          <motion.h2
            className="font-display"
            style={{ fontSize: isMobile ? 40 : 64, color: "#000", margin: "12px 0 40px 0", lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            THE ORIGIN.
          </motion.h2>

          <motion.div
            style={{ maxWidth: 600, display: "flex", flexDirection: "column", gap: 24 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              Bachillerato in Mallorca had been genuinely hard... the kind of hard that has nothing to do with the work, I crossed paths with the wrong people and that stays with you longer than you'd like it to.
            </p>
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              Barcelona felt like I could finally breathe. First year at IQS, nobody knew me, nothing carried over, and I remember showing up with this urgency I couldn't quite explain, not ambition exactly, more like I had something to recover and I was going to do it HERE.
            </p>
          </motion.div>

        </div>

        {/* Right — circular city photo + IQS logo */}
        <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, marginTop: isMobile ? 0 : 10 }}>

          <motion.div
            style={{
              width: isMobile ? 240 : 380,
              height: isMobile ? 240 : 380,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/barcelona_city.jpg"
              alt="Barcelona"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </motion.div>

          <motion.img
            src="/iqs_logo.png"
            alt="IQS Tech Factory"
            style={{ height: isMobile ? 100 : 166, width: "auto", display: "block", mixBlendMode: "multiply", marginTop: isMobile ? -20 : -45 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          />

        </div>

      </div>

    </section>
  );
};

export default StageBarcelona;
