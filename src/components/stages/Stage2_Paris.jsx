import { motion } from "framer-motion";

const Stage2_Paris = () => {
  return (
    <section id="stage-2" style={{ backgroundColor: "#fffce8", position: "relative" }}>

      {/* Top area — watermark year, full width, above the columns */}
      <div style={{
        paddingLeft: "clamp(80px, 12vw, 180px)",
        paddingRight: "clamp(60px, 8vw, 120px)",
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
          2023 — 2024
        </motion.div>
      </div>

      {/* Two-column row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        paddingLeft: "clamp(80px, 12vw, 180px)",
        paddingRight: "clamp(60px, 8vw, 120px)",
        paddingTop: 64,
        paddingBottom: 100,
        gap: 80,
      }}>

        {/* Left — text content */}
        <div style={{ flex: 1, minWidth: 0 }}>

          <motion.span
            className="font-display"
            style={{ fontSize: 20, color: "#a9170b", display: "block" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            AUG 2023 — MAY 2024
          </motion.span>

          <motion.h2
            className="font-display"
            style={{ fontSize: 64, color: "#000", margin: "12px 0 40px 0", lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            PARIS. THEN A MICROPHONE.
          </motion.h2>

          <motion.div
            style={{ maxWidth: 600, display: "flex", flexDirection: "column", gap: 24 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              Paris was my first Erasmus, the first time I'd ever gone somewhere completely alone, and I think I understood pretty quickly that the city was going to give me EXACTLY what I put into it, nothing more.
            </p>
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              So every weekend, without exception, I walked. Solo, hours through the centre, the same streets and different ones, the same museums visited again and again until I stopped looking at things like a tourist and started actually seeing them. I don't know how to explain what that kind of solitude does to you when you're 19 and you let it in properly... it's uncomfortable at first and then it becomes the thing you look forward to most.
            </p>
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              It ended up being the happiest year of my life. And somewhere in the middle of all those walks something started forming that I hadn't planned, a need to say things out loud, to think through a microphone. That became the podcast.
            </p>
          </motion.div>

        </div>

        {/* Right — circular city photo + IESEG logo */}
        <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>

          <motion.div
            style={{
              width: 380,
              height: 380,
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
              src="/paris_city.jpg"
              alt="Paris"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </motion.div>

          <motion.img
            src="/IESEG-Logo-2012-rgb.jpg"
            alt="IESEG School of Management"
            style={{ height: 56, width: "auto", display: "block", mixBlendMode: "multiply", marginTop: 16 }}
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

export default Stage2_Paris;
