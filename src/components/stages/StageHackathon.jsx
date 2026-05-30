import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import useIsMobile from "../../hooks/useIsMobile";

const CREAM = "#fffce8";
const PL = "clamp(80px, 12vw, 180px)";

const StageHackathon = () => {
  const isMobile = useIsMobile();
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
    <section id="stage-hackathon" style={{ position: "relative", overflow: "hidden", minHeight: "100dvh" }}>

      {/* Full-bleed background video */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }}
      >
        <source src="/hackathon_bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.75)", zIndex: 1 }} />

      {/* Full screen button */}
      <motion.button
        onClick={openModal}
        data-hover="true"
        whileHover={{ borderColor: "rgba(255,252,232,0.70)", color: "rgba(255,252,232,0.90)" }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.18 }}
        style={{
          position: "absolute", bottom: 32, left: isMobile ? "24px" : PL, zIndex: 3,
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

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, paddingTop: isMobile ? 60 : 100, paddingBottom: isMobile ? 140 : 100, paddingRight: isMobile ? "24px" : PL, paddingLeft: isMobile ? "24px" : "calc(6vw - 30px)", maxWidth: 820, marginLeft: isMobile ? 0 : "auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ marginBottom: 32 }}
        >
          <span className="font-display text-anton-48" style={{ color: CREAM, display: "block", lineHeight: 0.95 }}>Winner of the IQS Hackathon 2023</span>
          <span className="font-body" style={{ fontSize: 20, color: "rgba(255,252,232,0.55)", marginTop: 12, display: "block", letterSpacing: "0.04em" }}>Project ROUND (Team DIZZY)</span>
        </motion.div>

        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 660 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
            First year at IQS, first real competition. Team DIZZY, 48 hours, a problem about construction waste that none of us knew anything about, and people I barely knew.
          </p>
          <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
            I was the one presenting in front of the jury. And something happened that day that I hadn't experienced before... I was completely calm, the kind of calm you only get when the responsibility is too big to be nervous about it. Representing the whole team does something to you.
          </p>
          <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,252,232,0.85)", margin: 0 }}>
            We won, and I walked out understanding something about how I work under pressure that I still use today.
          </p>
        </motion.div>

      </div>

      {/* Video modal */}
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
            <source src="/hackathon_bg.mp4" type="video/mp4" />
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

export default StageHackathon;
