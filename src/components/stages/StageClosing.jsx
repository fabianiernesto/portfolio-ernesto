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
      style={{
        backgroundColor: RED,
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        paddingLeft: isMobile ? "24px" : PL,
        paddingRight: isMobile ? "24px" : "clamp(60px, 8vw, 120px)",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <div style={{ maxWidth: 820 }}>

        <motion.span
          className="font-body"
          style={{ fontSize: 12, color: "rgba(255,252,232,0.50)", display: "block", marginBottom: 28, letterSpacing: "0.1em", textTransform: "uppercase" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Where I'm going
        </motion.span>

        <motion.h2
          className="font-display"
          style={{
            fontSize: isMobile ? 56 : "clamp(64px, 9vw, 120px)",
            color: CREAM,
            lineHeight: 0.92,
            margin: 0,
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          LET'S<br />TALK.
        </motion.h2>

        <motion.p
          className="font-body"
          style={{
            fontSize: isMobile ? 16 : 18,
            lineHeight: 1.7,
            color: "rgba(255,252,232,0.85)",
            margin: "36px 0 0 0",
            maxWidth: 560,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          If you're in motorsport or automotive, or know someone who is, reach
          out... always happy to connect with people in the industry ;)
        </motion.p>

        <motion.div
          style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 16 : 24, marginTop: 44 }}
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
              backgroundColor: CREAM,
              color: RED,
              textDecoration: "none",
              padding: isMobile ? "14px 24px" : "15px 30px",
              fontSize: 14,
              letterSpacing: "0.08em",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            EMAIL ME
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
            </svg>
          </motion.a>

          {/* LinkedIn — secondary */}
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
              backgroundColor: "transparent",
              color: CREAM,
              textDecoration: "none",
              padding: isMobile ? "14px 24px" : "15px 30px",
              fontSize: 14,
              letterSpacing: "0.08em",
              border: "1px solid rgba(255,252,232,0.40)",
            }}
            whileHover={{ borderColor: "rgba(255,252,232,1)", scale: 1.03 }}
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
