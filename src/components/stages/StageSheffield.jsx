import { motion } from "framer-motion";

const StageSheffield = () => {
  return (
    <section id="stage-sheffield" style={{ position: "relative", backgroundColor: "#fffce8", overflow: "hidden" }}>

      {/* Year marker — background inscription */}
      <div
        className="font-display text-anton-140 absolute pointer-events-none select-none"
        style={{ top: "6vh", right: "4vw", color: "#000", opacity: 0.06, lineHeight: 0.9, textAlign: "right", zIndex: 1 }}
      >
        2025 — 2026
      </div>

      {/* Two columns */}
      <div style={{ display: "flex", position: "relative", zIndex: 2 }}>

        {/* Left column — breathing space */}
        <div style={{ flex: "0 0 40%" }} />

        {/* Right column — content */}
        <div style={{ flex: "0 0 60%", paddingTop: 120, paddingBottom: 120, paddingRight: 80 }}>

          {/* Logo */}
          <motion.img
            src="/sheffield_logo.png"
            alt="Sheffield Hallam University"
            style={{ height: 80, width: "auto", display: "block", marginBottom: 32 }}
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

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
            style={{ fontSize: 64, color: "#000", margin: "12px 0 40px 0", lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            SHEFFIELD
          </motion.h2>

          {/* Body */}
          <motion.div
            style={{ maxWidth: 520, display: "flex", flexDirection: "column", gap: 24 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              Sheffield is not what you expect. Grey, industrial, cold most of the year, and quiet in a way that either breaks you or forces you to figure something out.
            </p>
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              Most people took the easy version, nights out, the same pubs, the same routine every week. I get it, when the city doesn't give you much you take what's there.
            </p>
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              A month in I called Nico and we started <strong>UNNO®STUDIO</strong>, not as a university project or something to put on a CV, but as an actual company with actual clients and actual responsibility... and the grey city ended up being the best place it could have happened. No distractions. No excuses. Just the work.
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default StageSheffield;
