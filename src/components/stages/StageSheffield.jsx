import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const StageSheffield = () => {
  const isMobile = useIsMobile();
  return (
    <section id="stage-sheffield" style={{ backgroundColor: "#fffce8", position: "relative" }}>

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

          {/* Year label */}
          <motion.span
            className="font-display"
            style={{ fontSize: 20, color: "#a9170b", display: "block" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            SEP 2025 — MAY 2026
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
            SHEFFIELD
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
              Sheffield is not what you expect. Grey, industrial, cold most of the year, and with a quietness that gets under your skin in a way that's hard to describe... it's not peaceful quiet, it's the kind that forces you to sit with yourself whether you want to or not.
            </p>
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              Most people found their own version of autopilot to deal with it, same pubs, same faces, same weekend on repeat. And I get it, when a city doesn't give you much stimulation you take whatever's there. But there's something that happens when you strip all the noise away and you're left with just yourself and a lot of empty hours, you either drift or you build something.
            </p>
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              A month in I called Nico and I joined{" "}
              <a
                href="https://www.unnostudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a9170b", textDecoration: "none", borderBottom: "1px solid rgba(169,23,11,0.40)" }}
              >
                UNNO®STUDIO
              </a>{" "}
              as Co-Founder.
            </p>
          </motion.div>

        </div>

        {/* Right — circular city photo + logo */}
        <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, marginTop: isMobile ? 0 : 15 }}>

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
              src="/Sheffield_city.png"
              alt="Sheffield"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </motion.div>

          {/* SHU logo below the circle */}
          <motion.img
            src="/sheffield_logo.png"
            alt="Sheffield Hallam University"
            style={{ height: 66, width: "auto", display: "block", marginTop: 10 }}
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

export default StageSheffield;
