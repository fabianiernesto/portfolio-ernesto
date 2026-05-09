import { motion } from "framer-motion";

const Stage4_Unno = () => {
  return (
    <section
      id="stage-4"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Full-bleed background photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/unno_photo.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Dark overlay 60% */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.60)",
          zIndex: 1,
        }}
      />

      {/* Year inscription — top right, behind content */}
      <div
        className="font-display text-anton-140 absolute pointer-events-none select-none"
        style={{
          top: "8vh",
          right: "4vw",
          color: "#fffce8",
          opacity: 0.20,
          zIndex: 2,
          lineHeight: 0.9,
          textAlign: "right",
        }}
      >
        2025 — 2026
      </div>

      {/* Floor lines */}
      <div className="floor-line" style={{ top: 0, zIndex: 3 }} aria-hidden="true" />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          paddingTop: "140px",
          paddingBottom: "140px",
          paddingLeft: "clamp(80px, 12vw, 180px)",
          paddingRight: "6vw",
          maxWidth: "760px",
        }}
      >
        {/* Headline */}
        <motion.h2
          className="font-display"
          style={{ color: "#fffce8", margin: 0, fontSize: "64px", textTransform: "none" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Co-Founder at 21
        </motion.h2>

        {/* Red underline */}
        <motion.div
          style={{
            height: 1,
            backgroundColor: "#a9170b",
            marginTop: "16px",
            transformOrigin: "left",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Paragraphs */}
        <div style={{ marginTop: "64px", display: "flex", flexDirection: "column", gap: "40px" }}>
          <motion.p
            className="font-body text-[16px] leading-[1.65]"
            style={{ margin: 0, color: "rgba(255, 252, 232, 0.90)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            Nico and I started{" "}
            <span style={{ color: "#fffce8", fontWeight: 700 }}>UNNO®STUDIO</span>{" "}
            with no clients, no system, nothing... and the first call we had was to close one.
          </motion.p>

          <motion.p
            className="font-body text-[16px] leading-[1.65]"
            style={{ margin: 0, color: "rgba(255, 252, 232, 0.90)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            I don't really know how to explain what it's like to build something from scratch with another person. There's something strange about having to decide{" "}
            <span style={{ color: "#fffce8", fontWeight: 700 }}>EVERYTHING</span>{" "}
            at once, the price, how it gets delivered, what we're promising, how we actually do it... while simultaneously trying to make it work. It's not what people picture when they hear{" "}
            <span style={{ color: "#fffce8", fontWeight: 700 }}>'co-founder' at 21</span>.
          </motion.p>

          <motion.p
            className="font-body text-[16px] leading-[1.65]"
            style={{ margin: 0, color: "rgba(255, 252, 232, 0.90)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            But{" "}
            <span style={{ color: "#fffce8", fontWeight: 700 }}>it worked</span>. And that still feels a little unreal to me.
          </motion.p>
        </div>
      </div>

      <div className="floor-line" style={{ bottom: 0, zIndex: 3 }} aria-hidden="true" />
    </section>
  );
};

export default Stage4_Unno;
