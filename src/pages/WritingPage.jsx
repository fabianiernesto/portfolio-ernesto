import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const INK = "#111110";
const RED = "#a9170b";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
};

const WritingPage = () => {
  const isMobile = useIsMobile();
  const PL = isMobile ? "24px" : "clamp(80px, 12vw, 180px)";
  const PR = isMobile ? "24px" : "clamp(60px, 10vw, 160px)";

  const bodyCream = { fontSize: isMobile ? 16 : 17, lineHeight: 1.85, color: "rgba(0,0,0,0.78)", margin: 0 };
  const bodyDark = { fontSize: isMobile ? 16 : 17, lineHeight: 1.85, color: "rgba(255,252,232,0.85)", margin: 0 };

  return (
    <div style={{ backgroundColor: CREAM, position: "relative" }}>
      {/* Back to the grid */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ position: "fixed", top: 20, left: 20, zIndex: 8000, mixBlendMode: "difference" }}
      >
        <Link
          to="/building-now"
          data-hover="true"
          className="font-body"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#ffffff", textDecoration: "none", fontSize: 11, letterSpacing: "0.12em" }}
        >
          <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 5H1.5M1.5 5L4.5 2M1.5 5L4.5 8" />
          </svg>
          BUILDING NOW
        </Link>
      </motion.div>

      {/* ── BLOCK 1 — CREAM hero ─────────────────────────────────── */}
      <div style={{ paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 96 : 130, paddingBottom: isMobile ? 72 : 100 }}>
        <div style={{ maxWidth: 780 }}>
          <motion.h1
            className="font-display"
            style={{ fontSize: isMobile ? 44 : "clamp(52px, 7vw, 96px)", color: INK, lineHeight: 0.94, margin: 0 }}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            THE BUSINESS<br />OF RACING
          </motion.h1>

          <motion.p
            className="font-display"
            style={{ fontSize: isMobile ? 24 : "clamp(26px, 3vw, 42px)", color: RED, lineHeight: 1.02, margin: "30px 0 0 0" }}
            {...fadeUp} transition={{ duration: 0.7 }}
          >
            Two series. Every week. On LinkedIn.
          </motion.p>

          <motion.p className="font-body" style={{ ...bodyCream, marginTop: isMobile ? 32 : 40 }} {...fadeUp} transition={{ duration: 0.7 }}>
            Motorsport gets told in highlights. The overtake, the podium, the
            radio message everyone clips. What almost never gets told is the
            layer underneath, the contract that made the seat possible, the
            sponsor whose name WAS the drive, the strategy call that decided a
            race twenty laps before anyone noticed.
          </motion.p>

          <motion.p className="font-body" style={{ ...bodyCream, marginTop: 22 }} {...fadeUp} transition={{ duration: 0.7 }}>
            That's the part I write about, in two different ways, every single
            week. And both are written so that someone who has never watched a
            race in their life follows every line... because if you need a
            paddock pass to understand it, I've written it badly.
          </motion.p>
        </div>
      </div>

      {/* ── BLOCK 2 — DARK, MOTORSPORT STORIES ───────────────────── */}
      <div style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#0d0d0b",
            backgroundImage: "url('/now_writing.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.72)", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, width: "100%", paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 90 : 120, paddingBottom: isMobile ? 90 : 120 }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 36 : "clamp(40px, 5vw, 80px)", alignItems: isMobile ? "stretch" : "center" }}>
            {/* text */}
            <div style={{ flex: 1, minWidth: 0, maxWidth: 640 }}>
              <motion.span
                className="font-display"
                style={{ fontSize: isMobile ? 30 : "clamp(32px, 3.6vw, 52px)", color: CREAM, display: "block", lineHeight: 1 }}
                {...fadeUp} transition={{ duration: 0.6 }}
              >
                MOTORSPORT STORIES
              </motion.span>

              <motion.p className="font-body" style={{ ...bodyDark, marginTop: 26 }} {...fadeUp} transition={{ duration: 0.7 }}>
                A driver, a real moment, and the decision underneath it that
                nobody talks about. Piastri turning down a confirmed F1 seat in a
                single tweet. Hamilton walking away from the biggest offer on the
                table for a team stuck mid-pack. Mazepin, who everyone wrote off
                as a slow rich kid, when the truth was that his father's company
                WAS the seat, so the day the sponsorship died so did the drive.
              </motion.p>

              <motion.p className="font-body" style={{ ...bodyDark, marginTop: 22 }} {...fadeUp} transition={{ duration: 0.7 }}>
                The story is the way in. What I'm actually chasing is the
                commercial reading underneath it, the one a fan account never
                reaches and someone who thinks in contracts and partnerships gets
                immediately. Then I sit with what it makes me think, without
                turning it into a lesson... because I don't have one.
              </motion.p>
            </div>

            {/* cover */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              style={{ flex: "0 0 auto", width: isMobile ? "100%" : "clamp(300px, 34vw, 500px)", border: "1px solid rgba(255,252,232,0.16)", boxShadow: "0 20px 44px rgba(0,0,0,0.5)", lineHeight: 0 }}
            >
              <img src="/series_stories.png" alt="A Motorsport Stories post cover" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── BLOCK 3 — CREAM, MOTORSPORT SIMPLIFIED ───────────────── */}
      <div style={{ paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 72 : 110, paddingBottom: isMobile ? 72 : 110 }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row-reverse", gap: isMobile ? 36 : "clamp(40px, 5vw, 80px)", alignItems: isMobile ? "stretch" : "center" }}>
          {/* text */}
          <div style={{ flex: 1, minWidth: 0, maxWidth: 640 }}>
            <motion.span
              className="font-display"
              style={{ fontSize: isMobile ? 30 : "clamp(32px, 3.6vw, 52px)", color: INK, display: "block", lineHeight: 1 }}
              {...fadeUp} transition={{ duration: 0.6 }}
            >
              MOTORSPORT SIMPLIFIED
            </motion.span>

            <motion.p className="font-body" style={{ ...bodyCream, marginTop: 26 }} {...fadeUp} transition={{ duration: 0.7 }}>
              One idea from the motor world, explained the way you'd explain it
              to a mate at a bar. Why a car pits to change tyres that look
              perfectly fine. How a driver stuck behind someone for twenty laps
              ends up ahead without ever overtaking. Why a soft drinks brand
              bothers running two Formula 1 teams at all.
            </motion.p>

            <motion.p className="font-body" style={{ ...bodyCream, marginTop: 22 }} {...fadeUp} transition={{ duration: 0.7 }}>
              Every one of them runs on an everyday analogy, because that's what
              makes it click, never the jargon. A race tyre going off is a brand
              new eraser that bites for a few rubs and then goes smooth and
              smears everything. And it's not only F1... WEC, WRC, NASCAR, the
              Indy 500, wherever the concept lives.
            </motion.p>

            <motion.p className="font-body" style={{ ...bodyCream, marginTop: 22 }} {...fadeUp} transition={{ duration: 0.7 }}>
              The trick is that a newcomer gets the whole thing while a proper
              fan still finds the bit they had slightly wrong. Two audiences, one
              post, no professor voice anywhere near it.
            </motion.p>
          </div>

          {/* cover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            style={{ flex: "0 0 auto", width: isMobile ? "100%" : "clamp(300px, 34vw, 500px)", border: "1px solid rgba(0,0,0,0.12)", boxShadow: "0 20px 44px rgba(40,28,12,0.18)", lineHeight: 0 }}
          >
            <img src="/series_simplified.png" alt="A Motorsport Simplified post cover" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
          </motion.div>
        </div>
      </div>

      {/* ── BLOCK 4 — DARK video, why + CTA ──────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: isMobile ? "auto" : "88vh", display: "flex", alignItems: "center" }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        >
          <source src="/hero_bg.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.68)", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 100 : 120, paddingBottom: isMobile ? 100 : 120, maxWidth: 820 }}>
          <motion.p className="font-body" style={bodyDark} {...fadeUp} transition={{ duration: 0.7 }}>
            I write these every week because it's the fastest way I know to think
            properly about an industry I want to work in. Nobody commissioned
            them and nobody is paying for them... they're just me, a topic that
            won't leave me alone, and the part of it I can't stop digging into.
          </motion.p>

          <motion.p
            className="font-display"
            style={{ fontSize: isMobile ? 28 : "clamp(32px, 3.8vw, 56px)", lineHeight: 1.05, color: CREAM, margin: "40px 0 0 0" }}
            {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
          >
            THE RACE IS THE STORY. THE BUSINESS IS THE POINT.
          </motion.p>

          <motion.a
            href="https://www.linkedin.com/in/ernestofabiani/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display"
            data-hover="true"
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.03, backgroundColor: CREAM }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 44,
              backgroundColor: "#ffffff",
              color: INK,
              textDecoration: "none",
              padding: isMobile ? "14px 24px" : "15px 30px",
              fontSize: 14,
              letterSpacing: "0.08em",
            }}
          >
            READ THEM ON LINKEDIN
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default WritingPage;
