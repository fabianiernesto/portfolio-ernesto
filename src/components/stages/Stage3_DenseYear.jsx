import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const RED = "#a9170b";
const CREAM = "#fffce8";
const PL = "clamp(80px, 12vw, 180px)";

const Stage3_DenseYear = () => {
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (!modalOpen || !modalVideoRef.current) return;
    const v = modalVideoRef.current;
    const t = setTimeout(() => {
      if (v.requestFullscreen) v.requestFullscreen().catch(() => {});
      else if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
      else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
    }, 80);
    return () => clearTimeout(t);
  }, [modalOpen]);

  return (
    <section id="stage-3" style={{ position: "relative", overflow: "hidden" }}>

      {/* ── SECTION HEADLINE ──────────────────────────────────────── */}
      <div style={{ backgroundColor: CREAM, minHeight: "30vh", display: "flex", alignItems: "center", paddingLeft: PL, paddingRight: "6vw" }}>
        <motion.h2
          className="font-display"
          style={{ fontSize: 72, lineHeight: 0.9, margin: 0, color: RED }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          TWO THINGS AT ONCE
        </motion.h2>
      </div>

      {/* ── AURAX BLOCK ───────────────────────────────────────────── */}
      <div id="aurax-block" style={{ position: "relative", overflow: "hidden", backgroundColor: RED }}>

        {/* Year inscription — top right */}
        <motion.div
          className="font-display text-anton-140 absolute pointer-events-none select-none"
          style={{ top: "6vh", right: "4vw", color: CREAM, zIndex: 2, lineHeight: 0.9, textAlign: "right" }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 0.20, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          2024 — 2025
        </motion.div>

        <div style={{ position: "relative", zIndex: 3, paddingTop: 80, paddingBottom: 80, paddingLeft: PL, paddingRight: "max(80px, 6vw)" }}>
          <div style={{ maxWidth: 600 }}>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-display text-anton-20" style={{ color: CREAM, display: "block" }}>AURAX</span>
              <span className="font-body" style={{ fontSize: 12, color: CREAM, opacity: 0.5, letterSpacing: "0.04em", marginTop: 4, display: "block" }}>Oct 2024 — Oct 2025</span>
            </motion.div>

            <motion.img
              src="/aurax_logo.png"
              alt="Aurax"
              style={{ height: 48, width: "auto", display: "block", marginTop: 16 }}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <motion.h2
              className="font-display"
              style={{ color: CREAM, margin: "32px 0 0 0", fontSize: "clamp(40px, 5vw, 64px)", textTransform: "none", lineHeight: 1.0 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              From Intern to<br />Project Manager
            </motion.h2>

            <motion.div
              style={{ height: 1, backgroundColor: "rgba(255,252,232,0.25)", marginTop: 16, transformOrigin: "left" }}
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              style={{ marginTop: 28, maxWidth: 520, display: "flex", flexDirection: "column", gap: 20 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
                Started as an intern. Three months later I was running three things at once that nobody had run before inside that company.
              </p>
              <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
                The <span style={{ color: CREAM, fontWeight: 700 }}>tester programme</span> for MouthX, coordinating logistics, user communication, feedback loops across real patients. The entire <span style={{ color: CREAM, fontWeight: 700 }}>dental sector vertical</span>, from zero, market research to B2B partnerships to closing a deal with one of the largest dental clinic groups in Spain... alone, start to finish.
              </p>
              <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
                And the <span style={{ color: CREAM, fontWeight: 700 }}>ERP system</span>, sitting with engineers and figuring out, mostly self-taught, how internal operations should actually be structured. I don't know exactly when the intern title stopped making sense. But at some point it did.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.15)" }} />

      {/* ── ERASMOVE BLOCK ────────────────────────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "80vh" }}>

        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        >
          <source src="/erasmove_bg.mp4" type="video/mp4" />
        </video>

        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.60)", zIndex: 1 }} />

        <motion.button
          onClick={openModal}
          data-hover="true"
          whileHover={{ borderColor: "rgba(255,252,232,0.70)", color: "rgba(255,252,232,0.90)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.18 }}
          style={{
            position: "absolute", bottom: 32, left: PL, zIndex: 3,
            display: "flex", alignItems: "center", gap: 8,
            background: "transparent", border: "1px solid rgba(255,252,232,0.30)",
            color: "rgba(255,252,232,0.60)", padding: "8px 16px", cursor: "pointer",
            fontSize: 11, letterSpacing: "0.1em", fontFamily: "inherit",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 4.5V1h3.5M7.5 1H11v3.5M11 7.5V11H7.5M4.5 11H1V7.5" />
          </svg>
          FULL SCREEN
        </motion.button>

        <div style={{ position: "relative", zIndex: 2, paddingTop: 100, paddingBottom: 100, paddingRight: PL, paddingLeft: "6vw", maxWidth: 760, marginLeft: "auto" }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ marginBottom: 32 }}
          >
            <span className="font-display text-anton-48" style={{ color: CREAM, display: "block", lineHeight: 0.95 }}>ERASMOVE</span>
            <span className="font-body" style={{ fontSize: 12, color: CREAM, opacity: 0.5, letterSpacing: "0.04em", marginTop: 4, display: "block" }}>Oct 2024 — Aug 2025</span>
          </motion.div>

          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 520 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
              I built ERASMOVE because I'd been through the Erasmus process twice and knew exactly where it broke. The information is scattered, the deadlines are unclear, the housing search is chaos, and nobody tells you what actually matters until you've already made the mistake.
            </p>
            <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
              So I designed a structured support service. Housing, paperwork, insurance, communication with host institutions. Everything that nobody explains, packaged in a way that actually works.
            </p>
            <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
              Months of concept, user research, business model definition. Then a pitch in front of every entrepreneurship project at IQS.
            </p>
          </motion.div>

          <motion.div
            style={{ marginTop: 40 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}
          >
            <span className="font-body" style={{ fontSize: 11, color: CREAM, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6, opacity: 0.5 }}>AWARDED</span>
            <span className="font-display" style={{ fontSize: 20, color: CREAM, display: "block", lineHeight: 1.0 }}>Best Pitch Award</span>
            <span className="font-body" style={{ fontSize: 13, color: "rgba(255,252,232,0.55)", marginTop: 8, display: "block", maxWidth: 380, lineHeight: 1.6 }}>
              IQS Startup Challenge 2025 · Every project that entered. Ours walked out with it.
            </span>
          </motion.div>

        </div>
      </div>

      {/* ── VIDEO MODAL (outside transform tree → fullscreen works) ── */}
      {modalOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 9999, backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}
          onClick={closeModal}
        >
          <video
            ref={modalVideoRef}
            autoPlay muted loop playsInline
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            onClick={(e) => e.stopPropagation()}
          >
            <source src="/erasmove_bg.mp4" type="video/mp4" />
          </video>
          <motion.button
            onClick={closeModal}
            whileHover={{ borderColor: "rgba(255,252,232,0.70)", color: "rgba(255,252,232,1)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "absolute", top: 24, right: 24,
              background: "transparent", border: "1px solid rgba(255,252,232,0.30)",
              color: "rgba(255,252,232,0.70)", padding: "8px 16px",
              cursor: "pointer", fontSize: 11, letterSpacing: "0.1em", fontFamily: "inherit",
            }}
          >
            ✕ CLOSE
          </motion.button>
        </div>
      )}

    </section>
  );
};

export default Stage3_DenseYear;
