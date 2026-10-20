import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const StageTopClass = () => {
  const isMobile = useIsMobile();
  return (
    <section
      id="stage-top-class"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100dvh",
      }}
    >
      {/* Full-bleed background photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/award_p1_moment.jpg')",
          backgroundSize: "cover",
          backgroundPosition: isMobile ? "68% center" : "center 30%",
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
          paddingTop: isMobile ? "80px" : "140px",
          paddingBottom: isMobile ? "80px" : "140px",
          paddingLeft: isMobile ? "24px" : "clamp(80px, 12vw, 180px)",
          paddingRight: isMobile ? "24px" : "6vw",
          maxWidth: "760px",
        }}
      >
        {/* Label */}
        <motion.span
          className="font-display"
          style={{ fontSize: 20, color: "#a9170b", display: "block", marginBottom: 14 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          2025 — 2026
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-display"
          style={{ color: "#fffce8", margin: 0, fontSize: isMobile ? "36px" : "64px", textTransform: "none" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Best academic record of my promotion
        </motion.h2>

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
            Not a module, not a semester, not a good year --&gt; the best academic record of the whole International Business class. Four years of it. I found out and had to read the email twice before I called my parents.
          </motion.p>

          <motion.p
            className="font-body text-[16px] leading-[1.65]"
            style={{ margin: 0, color: "rgba(255, 252, 232, 0.90)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            And this is the one that got me. Because everything you're about to scroll through, Sheffield, UNNO, Paris, Barcelona, the podcast, the year where I was doing three things at once and sleeping badly... none of it came out of a plan. It came out of saying yes and figuring it out after. The plaque is just the receipt.
          </motion.p>

          <motion.p
            className="font-body text-[16px] leading-[1.65]"
            style={{ margin: 0, color: "rgba(255, 252, 232, 0.90)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            That's me in the photo, by the way, about two seconds after they handed it over, with the guy giving out the awards pointing back at me like we'd just won something together. And that's how it felt. The culmination of my degree, on a stage, in about four seconds.
          </motion.p>
        </div>
      </div>

      <div className="floor-line" style={{ bottom: 0, zIndex: 3 }} aria-hidden="true" />
    </section>
  );
};

export default StageTopClass;
