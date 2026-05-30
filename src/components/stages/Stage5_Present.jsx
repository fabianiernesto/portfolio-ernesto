import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useIsMobile from "../../hooks/useIsMobile";

const Stage5_Present = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const videoY = useTransform(heroProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(heroProgress, [0, 1], ["0%", "-7%"]);
  const portraitY = useTransform(aboutProgress, [0, 1], ["-6%", "6%"]);

  const isMobile = useIsMobile();

  return (
    <section id="stage-5">

      {/* ── BEFORE THE CIRCUIT — video background ─────────────────── */}
      <div
        ref={heroRef}
        style={{ position: "relative", overflow: "hidden", minHeight: "100dvh", display: "flex", alignItems: "center" }}
      >

        {/* Background video — parallax layer (taller than container for room to move) */}
        <motion.video
          autoPlay muted loop playsInline
          style={{
            position: "absolute",
            left: 0, right: 0,
            top: "-20%",
            width: "100%",
            height: "140%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
            y: videoY,
          }}
        >
          <source src="/hero_bg.mp4" type="video/mp4" />
        </motion.video>

        {/* Dark overlay 55% */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)", zIndex: 1 }} />

        {/* Content — counter-parallax (moves slightly opposite to video) */}
        <motion.div
          style={{
            position: "relative", zIndex: 2,
            paddingTop: isMobile ? "12vh" : "14vh",
            paddingBottom: isMobile ? "14vh" : "18vh",
            paddingLeft: isMobile ? "24px" : "clamp(80px, 12vw, 180px)",
            paddingRight: isMobile ? "24px" : "6vw",
            y: textY,
          }}
        >
          <motion.h2
            className="font-display text-anton-80"
            style={{ color: "#fffce8" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            BEFORE THE
            <br />
            CIRCUIT
          </motion.h2>

          <div style={{ marginTop: 64, maxWidth: 560, display: "flex", flexDirection: "column", gap: 40 }}>
            <motion.p
              className="font-body"
              style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,252,232,0.80)", margin: 0 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              This is not a CV. It's a walkthrough of everything that got me here, the experiences, the decisions, the moments that shaped how I think and how I work.
            </motion.p>

            <motion.p
              className="font-body"
              style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,252,232,0.80)", margin: 0 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              Scroll through and you'll find four years of building things from scratch inside startups, a co-founded studio, two Erasmus exchanges, a hackathon win, and a pitch that walked out with Best Pitch Award at IQS 2025.
            </motion.p>

            <motion.p
              className="font-body"
              style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,252,232,0.80)", margin: 0 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: 0.45 }}
            >
              All of it pulling toward the same place: the motor industry. Motorsport, automotive, the business behind both. That's where I'm going. This is where I've been.
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll indicator — bottom center */}
        <div style={{
          position: "absolute", bottom: 32, left: 0, right: 0,
          zIndex: 3, display: "flex", flexDirection: "column",
          alignItems: "center", gap: 6,
        }}>
          <span className="font-body" style={{ fontSize: 11, color: "rgba(255,252,232,0.85)", letterSpacing: "0.08em", textTransform: "lowercase", fontWeight: 600 }}>
            scroll to explore
          </span>
          <svg
            width="12" height="8" viewBox="0 0 12 8" fill="none"
            style={{ animation: "pulse-chevron 1.5s ease-in-out infinite" }}
          >
            <path d="M1 1L6 7L11 1" stroke="rgba(255,252,232,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

      </div>

      {/* ── ABOUT / IDENTITY SECTION ──────────────────────────────── */}
      <div
        ref={aboutRef}
        style={{
          position: "relative",
          height: isMobile ? "auto" : "100dvh",
          overflow: "hidden",
          display: "flex",
          backgroundColor: "#a9170b",
          paddingTop: isMobile ? 60 : 0,
          paddingBottom: isMobile ? 60 : 0,
        }}
      >

        {/* Two-column content */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          alignItems: isMobile ? "flex-start" : "center",
        }}>

          {/* Portrait photo */}
          <div style={{
            flex: isMobile ? "none" : "0 0 50%",
            width: isMobile ? "100%" : "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: isMobile ? 32 : 0,
          }}>
            <motion.div style={{ y: isMobile ? 0 : portraitY }}>
              <motion.img
                src="/ernesto_portrait.jpg"
                alt="Ernesto Fabiani"
                style={{
                  width: isMobile ? 200 : 320,
                  height: isMobile ? 200 : 320,
                  objectFit: "cover", objectPosition: "top center",
                  display: "block", borderRadius: "50%",
                }}
                initial={{ opacity: 0, scale: 1.04 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>

          {/* Text */}
          <div style={{
            flex: isMobile ? "none" : "0 0 50%",
            paddingRight: isMobile ? 24 : 80,
            paddingLeft: isMobile ? 24 : 0,
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>

            {/* ABOUT label */}
            <motion.span
              className="font-body"
              style={{
                fontSize: 12, color: "rgba(255,252,232,0.50)",
                letterSpacing: "0.1em", textTransform: "uppercase",
                display: "block", marginBottom: 12,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              ABOUT
            </motion.span>

            {/* Name */}
            <motion.h1
              className="font-display"
              style={{ fontSize: isMobile ? 40 : 72, color: "#fffce8", lineHeight: 1, margin: 0 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              ERNESTO FABIANI
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="font-body"
              style={{ fontSize: 15, color: "rgba(255,252,232,0.60)", marginTop: 12, marginBottom: 0 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              in love with business in motorsport
            </motion.p>

            {/* Divider */}
            <motion.div
              style={{ width: 160, height: 1, backgroundColor: "rgba(255,252,232,0.20)", marginTop: 20, marginBottom: 20 }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: 0.9 }}
            />

            {/* Bio paragraphs */}
            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 460 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 1.0 }}
            >
              <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
                21 years old, just graduated, zero experience in the motor industry... and I've never wanted something this clearly in my life.
              </p>
              <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
                I've spent the last three years throwing myself into things I had no business doing at that age, a HealthTech startup at 19, co-founding my own studio at 20, two Erasmus exchanges, a hackathon win, a pitch that walked out with Best Pitch Award at IQS. Not because I had a plan, but because sitting still has never been an option for me.
              </p>
              <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
                Motorsport has been there through all of it. The business behind the sport, the decisions that happen away from the circuit, the strategy, the operations, the people who make it run. That's where I'm going, and I'm not particularly good at giving up on things.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              style={{ display: "flex", gap: 24, marginTop: 28 }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 1.2 }}>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/ernestofabiani/"
                target="_blank" rel="noopener noreferrer"
                className="font-body"
                style={{ fontSize: 12, color: "rgba(255,252,232,0.90)", letterSpacing: "0.05em", textDecoration: "none", position: "relative", display: "inline-block" }}
                whileHover="hover" data-hover="true"
              >
                LinkedIn
                <motion.span variants={{ hover: { scaleX: 1, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } } }}
                  initial={{ scaleX: 0 }}
                  style={{ display: "block", height: 1, backgroundColor: "rgba(255,252,232,0.40)", transformOrigin: "left", marginTop: 3 }} />
              </motion.a>

              {/* Contact */}
              <motion.a
                href="mailto:fabianicolladoernesto@gmail.com?subject=Hello%20Ernesto"
                className="font-body"
                data-hover="true"
                style={{
                  fontSize: 12, color: "rgba(255,252,232,0.90)", letterSpacing: "0.05em",
                  textDecoration: "none", position: "relative", display: "inline-block",
                }}
                whileHover="hover"
              >
                Contact
                <motion.span variants={{ hover: { scaleX: 1, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } } }}
                  initial={{ scaleX: 0 }}
                  style={{ display: "block", height: 1, backgroundColor: "rgba(255,252,232,0.40)", transformOrigin: "left", marginTop: 3 }} />
              </motion.a>
            </motion.div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Stage5_Present;
