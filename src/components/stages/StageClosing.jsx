import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const CREAM = "#fffce8";
const RED = "#a9170b";
const PL = "clamp(80px, 12vw, 180px)";

const StageClosing = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="stage-closing"
      style={{ position: "relative", overflow: "hidden", minHeight: "100dvh", display: "flex", alignItems: "center" }}
    >
      {/* Full-bleed background — Lando */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0d0d0b",
          backgroundImage: "url('/contact_lando.jpg')",
          backgroundSize: "cover",
          backgroundPosition: isMobile ? "58% center" : "center",
          zIndex: 0,
        }}
      />

      {/* Overlay — darker on the left where the copy sits */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: isMobile
            ? "rgba(0,0,0,0.62)"
            : "linear-gradient(to right, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.6) 48%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: isMobile ? 100 : 120,
          paddingBottom: isMobile ? 100 : 120,
          paddingLeft: isMobile ? "24px" : PL,
          paddingRight: isMobile ? "24px" : "6vw",
          maxWidth: 720,
        }}
      >
        <motion.span
          className="font-display"
          style={{ fontSize: 20, color: "rgba(255,252,232,0.60)", display: "block" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ACCEPTING CALLS
        </motion.span>

        <motion.h2
          className="font-display"
          style={{
            fontSize: isMobile ? 48 : "clamp(58px, 7vw, 100px)",
            color: CREAM,
            lineHeight: 0.92,
            margin: "16px 0 0 0",
            whiteSpace: "nowrap",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          LET'S TALK.
        </motion.h2>

        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: 20, margin: "36px 0 0 0", maxWidth: 540 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <p className="font-body" style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
            If you're in motorsport or automotive, or you know someone who is,
            write me. An email and a LinkedIn message land in the same place,
            and I answer every single one.
          </p>
          <p className="font-body" style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
            No pitch needed, no formalities... I just really like talking to
            people who live in this world ;)
          </p>
        </motion.div>

        <motion.div
          style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 14 : 20, marginTop: 40 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {/* Email — primary */}
          <motion.a
            href="mailto:fabianicolladoernesto@gmail.com?subject=Hello%20Ernesto"
            className="font-display"
            data-hover="true"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: RED,
              color: CREAM,
              textDecoration: "none",
              padding: isMobile ? "14px 24px" : "15px 30px",
              fontSize: 14,
              letterSpacing: "0.08em",
            }}
            whileHover={{ scale: 1.03, backgroundColor: "#8a1208" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            EMAIL ME
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
            </svg>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/ernestofabiani/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display"
            data-hover="true"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: RED,
              color: CREAM,
              textDecoration: "none",
              padding: isMobile ? "14px 24px" : "15px 30px",
              fontSize: 14,
              letterSpacing: "0.08em",
            }}
            whileHover={{ scale: 1.03, backgroundColor: "#8a1208" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            LINKEDIN
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default StageClosing;
