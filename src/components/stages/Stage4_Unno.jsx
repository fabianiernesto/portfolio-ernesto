import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const Stage4_Unno = () => {
  const isMobile = useIsMobile();
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
          paddingTop: isMobile ? "80px" : "140px",
          paddingBottom: isMobile ? "80px" : "140px",
          paddingLeft: isMobile ? "24px" : "clamp(80px, 12vw, 180px)",
          paddingRight: isMobile ? "24px" : "6vw",
          maxWidth: "760px",
        }}
      >
        {/* Headline */}
        <motion.h2
          className="font-display"
          style={{ color: "#fffce8", margin: 0, fontSize: isMobile ? "36px" : "64px", textTransform: "none" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Co-Founder at 21
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
            We acquired the first clients directly, built the full delivery system from scratch, audit to deployment, and positioned UNNO®STUDIO in the DTC retention space. Everything you see at unnostudio.com we built from zero.
          </motion.p>

          <motion.p
            className="font-body text-[16px] leading-[1.65]"
            style={{ margin: 0, color: "rgba(255, 252, 232, 0.90)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            My role sat across the commercial and operational side, client acquisition, closing calls alongside Nico where we made a natural duo, him with the technical depth and me with the human connection, and building the systems underneath that made it possible to deliver at quality without breaking when things scaled.
          </motion.p>

          <motion.a
            href="https://www.unnostudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            data-hover="true"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              letterSpacing: "0.1em",
              color: "#fffce8",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,252,232,0.50)",
              paddingBottom: 3,
              width: "fit-content",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.6 }}
            whileHover={{ opacity: 0.7 }}
          >
            unnostudio.com
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
            </svg>
          </motion.a>
        </div>
      </div>

      <div className="floor-line" style={{ bottom: 0, zIndex: 3 }} aria-hidden="true" />
    </section>
  );
};

export default Stage4_Unno;
