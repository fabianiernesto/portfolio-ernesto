import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const StageBetaGamma = () => {
  const isMobile = useIsMobile();
  return (
    <section id="stage-beta-gamma" style={{ backgroundColor: "#fffce8", position: "relative" }}>

      {/* Top area — watermark year, full width, above the columns */}
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
          2025 — 2026
        </motion.div>
      </div>

      {/* Two-column row */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        paddingLeft: isMobile ? "24px" : "clamp(80px, 12vw, 180px)",
        paddingRight: isMobile ? "24px" : "clamp(60px, 8vw, 120px)",
        paddingTop: isMobile ? 24 : 32,
        paddingBottom: isMobile ? 60 : 100,
        gap: isMobile ? 40 : 80,
      }}>

        {/* Left — text content */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Label */}
          <motion.span
            className="font-display"
            style={{ fontSize: 20, color: "#a9170b", display: "block" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            TOP 10% OF BUSINESS STUDENTS WORLDWIDE
          </motion.span>

          {/* Headline */}
          <motion.h2
            className="font-display"
            style={{ fontSize: isMobile ? 40 : 64, color: "#000", margin: "12px 0 40px 0", lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            BETA GAMMA SIGMA
          </motion.h2>

          {/* Body */}
          <motion.div
            style={{ maxWidth: 480, display: "flex", flexDirection: "column", gap: 24 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              Beta Gamma Sigma is the honour society for business schools, and they only invite the top 10% of the students. I'll be honest with you, I had to look it up when the email landed because I had no clue what it was. Then I read it properly and just sat there for a second.
            </p>
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              What I like about this one is that I never went looking for it. I spent my degree saying yes to projects that made zero sense on paper, launching things that half worked, flying to Paris for a hackathon with people I'd met a week before... and somewhere in the middle of all that mess the grades came along too.
            </p>
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              Turns out caring about something is a pretty decent study method.
            </p>
          </motion.div>

        </div>

        {/* Right — circular photo */}
        <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, marginTop: isMobile ? 0 : 15, alignSelf: isMobile ? "center" : "auto", width: isMobile ? "100%" : "auto" }}>

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
              src="/award_bgs.jpg"
              alt="Receiving the Beta Gamma Sigma recognition at IQS"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 32%" }}
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default StageBetaGamma;
