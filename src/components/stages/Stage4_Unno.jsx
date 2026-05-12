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
            I don't think anyone really understands what building something from zero with another person feels like until they've done it... it's that permanent background feeling that nothing is guaranteed, that the next client might not come, that what you built yesterday could fall apart tomorrow, and you just keep going anyway because stopping feels worse than the uncertainty.
          </motion.p>

          <motion.p
            className="font-body text-[16px] leading-[1.65]"
            style={{ margin: 0, color: "rgba(255, 252, 232, 0.90)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Nico and I went through all of it, the weeks where everything clicked and the weeks where nothing did, calls that went well and ones that didn't, having to make decisions about EVERYTHING with no reference point for what the right answer was.
          </motion.p>

          <motion.p
            className="font-body text-[16px] leading-[1.65]"
            style={{ margin: 0, color: "rgba(255, 252, 232, 0.90)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            It worked. And I still don't know exactly how.
          </motion.p>
        </div>
      </div>

      <div className="floor-line" style={{ bottom: 0, zIndex: 3 }} aria-hidden="true" />
    </section>
  );
};

export default Stage4_Unno;
