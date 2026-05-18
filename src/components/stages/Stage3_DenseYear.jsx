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
      <div style={{ backgroundColor: RED, minHeight: "30vh", display: "flex", alignItems: "center", paddingLeft: PL, paddingRight: "6vw" }}>
        <motion.h2
          className="font-display"
          style={{ fontSize: 72, lineHeight: 0.9, margin: 0, color: CREAM }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          TWO THINGS AT ONCE
        </motion.h2>
      </div>

      {/* ── AURAX BLOCK ───────────────────────────────────────────── */}
      <div id="aurax-block" style={{ position: "relative", overflow: "hidden", backgroundColor: CREAM }}>

        {/* Year inscription — top right */}
        <motion.div
          className="font-display text-anton-140 absolute pointer-events-none select-none"
          style={{ top: "6vh", right: "4vw", color: "#000", zIndex: 2, lineHeight: 0.9, textAlign: "right" }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 0.06, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          2024 — 2025
        </motion.div>

        <div style={{ position: "relative", zIndex: 3, paddingTop: 80, paddingBottom: 80, paddingLeft: PL, paddingRight: "max(80px, 6vw)", display: "flex", alignItems: "center", gap: 64 }}>

          {/* Left — text */}
          <div style={{ flex: 1, minWidth: 0, marginTop: 80 }}>

            <motion.img
              src="/aurax_logo.png"
              alt="Aurax"
              style={{ height: 48, width: "auto", display: "block", mixBlendMode: "multiply" }}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-display" style={{ fontSize: 20, color: RED, display: "block", marginTop: 31 }}>OCT 2024 — OCT 2025</span>
            </motion.div>

            <motion.h2
              className="font-display"
              style={{ color: "#000", margin: "17px 0 0 0", fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.0 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              FROM INTERN TO<br />PROJECT MANAGER
            </motion.h2>

            <motion.div
              style={{ height: 1, backgroundColor: "rgba(0,0,0,0.15)", marginTop: 16, transformOrigin: "left" }}
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
              <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(0,0,0,0.75)", margin: 0 }}>
                Started as an intern. Three months later I was running three things at once that nobody had run before inside that company.
              </p>
              <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(0,0,0,0.75)", margin: 0 }}>
                The tester programme for MouthX, coordinating logistics, user communication, feedback loops across real patients. The entire dental sector vertical, from zero, market research to B2B partnerships to closing a deal with one of the largest dental clinic groups in Spain... alone, start to finish.
              </p>
              <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(0,0,0,0.75)", margin: 0 }}>
                And the ERP system, sitting with engineers and figuring out, mostly self-taught, how internal operations should actually be structured. I don't know exactly when the intern title stopped making sense. But at some point it did.
              </p>
            </motion.div>

          </div>

          {/* Right — MouthX product image + link below */}
          <motion.div
            style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/mouthx_device.webp"
              alt="MouthX device"
              style={{ width: 460, height: "auto", display: "block", mixBlendMode: "multiply", marginTop: 80, marginLeft: -5 }}
            />
            <motion.a
              href="https://auraxtechnology.com/es"
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
                color: RED,
                textDecoration: "none",
                borderBottom: "1px solid rgba(169,23,11,0.40)",
                paddingBottom: 3,
              }}
              whileHover={{ opacity: 0.7 }}
            >
              auraxtechnology.com
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
              </svg>
            </motion.a>
          </motion.div>

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

        <div style={{ position: "relative", zIndex: 2, paddingTop: 100, paddingBottom: 100, paddingRight: PL, paddingLeft: "calc(6vw - 30px)", maxWidth: 820, marginLeft: "auto" }}>

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
            style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 660 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
              I built ERASMOVE because I'd been through the Erasmus process twice and knew exactly where it broke, the information scattered across a hundred different places, deadlines that appear out of nowhere, a housing search that nobody prepares you for, and the general feeling that you're supposed to figure it all out alone.
            </p>
            <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
              So I designed a service that actually explained it, housing, paperwork, insurance, communication with host institutions, everything packaged in a way that worked for someone going through it for the first time.
            </p>
            <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
              Months of concept development, user research, business model definition, and then a pitch in front of every entrepreneurship project at IQS.
            </p>
          </motion.div>

          <motion.div
            style={{ marginTop: 40 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}
          >
            <span className="font-display text-anton-48" style={{ color: CREAM, display: "block", lineHeight: 0.95 }}>Best Pitch Award</span>
            <span className="font-body" style={{ fontSize: 16, color: "rgba(255,252,232,0.85)", marginTop: 12, display: "block", maxWidth: 480, lineHeight: 1.6 }}>
              From all projects, my pitch and project was the most valued in front of the judges and business angels.
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
