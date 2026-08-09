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
        backgroundColor: CREAM,
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        paddingLeft: isMobile ? "24px" : PL,
        paddingRight: isMobile ? "24px" : "clamp(60px, 8vw, 120px)",
        paddingTop: isMobile ? 90 : 100,
        paddingBottom: isMobile ? 90 : 100,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: isMobile ? 48 : "clamp(48px, 7vw, 110px)",
          width: "100%",
        }}
      >
        {/* ── Copy ──────────────────────────────────────────────── */}
        <div style={{ flex: 1, minWidth: 0, maxWidth: 640 }}>
          <motion.span
            className="font-display"
            style={{ fontSize: 20, color: RED, display: "block" }}
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
              fontSize: isMobile ? 56 : "clamp(64px, 8vw, 110px)",
              color: "#000",
              lineHeight: 0.92,
              margin: "14px 0 0 0",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            LET'S<br />TALK.
          </motion.h2>

          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: 20, margin: "36px 0 0 0", maxWidth: 560 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <p
              className="font-body"
              style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.8, color: "rgba(0,0,0,0.78)", margin: 0 }}
            >
              Max is not calling. He never has and he never will, and I've made
              my peace with that.
            </p>
            <p
              className="font-body"
              style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.8, color: "rgba(0,0,0,0.78)", margin: 0 }}
            >
              My inbox does work though, so if you're in motorsport or
              automotive, or you know someone who is, write me or find me on
              LinkedIn... I answer everything ;)
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
                color: "#000",
                textDecoration: "none",
                padding: isMobile ? "14px 24px" : "15px 30px",
                fontSize: 14,
                letterSpacing: "0.08em",
                border: "1px solid rgba(0,0,0,0.35)",
              }}
              whileHover={{ borderColor: "rgba(0,0,0,1)", scale: 1.03 }}
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

        {/* ── Incoming call ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.6 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 0, y: -8 }}
          style={{
            flex: "0 0 auto",
            width: isMobile ? "min(78vw, 300px)" : "clamp(280px, 26vw, 370px)",
            padding: isMobile ? 8 : 10,
            borderRadius: isMobile ? 30 : 38,
            backgroundColor: "#111110",
            boxShadow:
              "0 26px 56px rgba(30,20,10,0.28), 0 4px 12px rgba(30,20,10,0.16)",
          }}
        >
          <img
            src="/contact_call.jpg"
            alt="An incoming call screen, as a joke"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: isMobile ? 22 : 29,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StageClosing;
