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
        flexDirection: isMobile ? "column" : "row",
        alignItems: "stretch",
        overflow: "hidden",
      }}
    >
        {/* ── Copy ──────────────────────────────────────────────── */}
        <div style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: isMobile ? "24px" : PL,
          paddingRight: isMobile ? "24px" : "clamp(40px, 5vw, 80px)",
          paddingTop: isMobile ? 90 : 100,
          paddingBottom: isMobile ? 56 : 100,
          maxWidth: isMobile ? "none" : 760,
        }}>
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
              fontSize: isMobile ? 56 : "clamp(60px, 7.2vw, 100px)",
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
            style={{ display: "flex", flexDirection: "column", gap: 20, margin: "34px 0 0 0", maxWidth: 540 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <p
              className="font-body"
              style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.8, color: "rgba(0,0,0,0.78)", margin: 0 }}
            >
              If you're in motorsport or automotive, or you know someone who is,
              write me. An email and a LinkedIn message land in the same place,
              and I answer every single one.
            </p>
            <p
              className="font-body"
              style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.8, color: "rgba(0,0,0,0.78)", margin: 0 }}
            >
              No pitch needed, no formalities... I just really like talking to
              people who live in this world ;)
            </p>
          </motion.div>

          <motion.div
            style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 14 : 20, marginTop: 38 }}
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

        {/* ── Still waiting ─────────────────────────────────────── */}
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            margin: 0,
            position: "relative",
            flex: isMobile ? "0 0 auto" : "0 0 46%",
            width: isMobile ? "100%" : "auto",
            height: isMobile ? "58vh" : "auto",
            alignSelf: "stretch",
            overflow: "hidden",
          }}
        >
          <img
            src="/contact_waiting.jpg"
            alt="Fernando Alonso sitting trackside in a folding chair, waiting"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "32% center",
            }}
          />

          {/* legibility wash under the note */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "34%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0) 100%)",
            }}
          />

          <figcaption
            className="font-hand"
            style={{
              position: "absolute",
              left: isMobile ? 24 : 32,
              right: isMobile ? 24 : 32,
              bottom: isMobile ? 24 : 34,
              fontSize: isMobile ? 22 : 26,
              color: "rgba(255,252,232,0.96)",
              transform: "rotate(-0.7deg)",
            }}
          >
            “Me, waiting for that email or DM.”
          </figcaption>
        </motion.figure>
    </section>
  );
};

export default StageClosing;
