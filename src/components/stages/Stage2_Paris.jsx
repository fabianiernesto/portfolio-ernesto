import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const RED = "#a9170b";
const CREAM = "#fffce8";
const PL = "clamp(80px, 12vw, 180px)";

const Stage2_Paris = () => {
  const hScrollRef = useRef(null);
  const [panel2Active, setPanel2Active] = useState(false);

  const { scrollYProgress } = useScroll({
    target: hScrollRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const dot1Opacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.3]);
  const dot2Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0.3, 1]);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setPanel2Active(v >= 0.45);
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <section id="stage-2" style={{ position: "relative" }}>

      {/* ── HORIZONTAL SCROLL WRAPPER ─────────────────────────────── */}
      <div
        ref={hScrollRef}
        style={{ height: "200vh", position: "relative" }}
      >
        {/* Sticky container */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* Panels container */}
          <motion.div
            style={{
              display: "flex",
              width: "200vw",
              height: "100%",
              x,
            }}
          >

            {/* ── PANEL 1: PARIS (CREAM bg) ─────────────────────────── */}
            <div
              style={{
                width: "100vw",
                height: "100vh",
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                backgroundColor: CREAM,
              }}
            >
              {/* Year inscription — top right */}
              <motion.div
                className="font-display pointer-events-none select-none"
                style={{
                  position: "absolute",
                  top: "10vh",
                  right: "4vw",
                  color: RED,
                  opacity: 0,
                  fontSize: 140,
                  lineHeight: 0.9,
                  textAlign: "right",
                  zIndex: 2,
                }}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 0.18, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                2023 — 2024
              </motion.div>

              {/* Content — centered vertically */}
              <div
                style={{
                  position: "relative",
                  zIndex: 3,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: PL,
                  paddingRight: "max(80px, 6vw)",
                }}
              >
                <div style={{ maxWidth: 620 }}>

                  {/* Headline */}
                  <motion.h2
                    className="font-display"
                    style={{
                      color: "#000",
                      margin: 0,
                      fontSize: 68,
                      lineHeight: 0.9,
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    PARIS. THEN
                    <br />
                    A MICROPHONE.
                  </motion.h2>

                  {/* Body paragraphs */}
                  <div
                    style={{
                      marginTop: 48,
                      display: "flex",
                      flexDirection: "column",
                      gap: 32,
                    }}
                  >
                    <motion.p
                      className="font-body"
                      style={{
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: "rgba(0,0,0,0.85)",
                        margin: 0,
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      IÉSEG School of Management.{" "}
                      <span
                        className="font-display"
                        style={{ fontSize: 28, verticalAlign: "baseline" }}
                      >
                        PARIS
                      </span>
                      . First Erasmus. The city where you stop being from somewhere and start being from everywhere.
                    </motion.p>

                    <motion.p
                      className="font-body"
                      style={{
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: "rgba(0,0,0,0.85)",
                        margin: 0,
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      Customer Service, World Duty Free, Mallorca. That summer. The contrast between Paris and a retail shift at an airport is not lost on me.
                    </motion.p>
                  </div>

                </div>
              </div>
            </div>

            {/* ── PANEL 2: PODCAST (dark bg) ───────────────────────── */}
            <div
              style={{
                width: "100vw",
                height: "100vh",
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#0f0f0f",
              }}
            >
              {/* Content — centered vertically */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: PL,
                  paddingRight: "max(80px, 6vw)",
                }}
              >
                <div style={{ maxWidth: 560 }}>

                  {/* Small label */}
                  <motion.span
                    className="font-body"
                    style={{
                      display: "block",
                      fontSize: 11,
                      color: CREAM,
                      opacity: 0,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 20,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={panel2Active ? { opacity: 0.4, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                  >
                    PODCAST · 2023 — 2024
                  </motion.span>

                  {/* Headline */}
                  <motion.h2
                    className="font-display"
                    style={{
                      color: CREAM,
                      margin: "0 0 28px 0",
                      fontSize: "clamp(32px, 4vw, 56px)",
                      lineHeight: 1.05,
                      textTransform: "none",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={panel2Active ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    La Importancia de<br />Llamarse Ernesto.
                  </motion.h2>

                  {/* Body paragraph */}
                  <motion.p
                    className="font-body"
                    style={{
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: `rgba(255,252,232,0.80)`,
                      margin: 0,
                    }}
                    initial={{ opacity: 0 }}
                    animate={panel2Active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Independent podcast on personal development and critical thinking. Six months. Built from nothing, distributed consistently, ended intentionally.
                  </motion.p>

                </div>
              </div>
            </div>

          </motion.div>

          {/* ── PANEL INDICATOR DOTS ──────────────────────────────── */}
          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 8,
              zIndex: 10,
            }}
          >
            <motion.div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.8)",
                opacity: dot1Opacity,
              }}
            />
            <motion.div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.3)",
                opacity: dot2Opacity,
              }}
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Stage2_Paris;
