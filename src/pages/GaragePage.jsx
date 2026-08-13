import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const INK = "#111110";
const CLAY = "#d97757"; // Claude's clay

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
};

const GaragePage = () => {
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

      {/* ── BLOCK 1 — CREAM hero, text + CLAUDE CODE wordmark ────── */}
      <div style={{ paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 96 : 130, paddingBottom: isMobile ? 72 : 100 }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "flex-start", gap: isMobile ? 40 : "clamp(40px, 6vw, 100px)" }}>
          {/* text */}
          <div style={{ flex: 1, minWidth: 0, maxWidth: 640 }}>
            <motion.h1
              className="font-display"
              style={{ fontSize: isMobile ? 44 : "clamp(52px, 7vw, 96px)", color: INK, lineHeight: 0.94, margin: 0 }}
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              THIS GARAGE
            </motion.h1>

            <motion.p
              className="font-quote"
              style={{ fontSize: isMobile ? 26 : "clamp(30px, 3.4vw, 46px)", color: INK, margin: "34px 0 0 0" }}
              {...fadeUp} transition={{ duration: 0.7 }}
            >
              I was sick of the CV everyone else hands over.
            </motion.p>

            <motion.p className="font-body" style={{ ...bodyCream, marginTop: isMobile ? 32 : 40 }} {...fadeUp} transition={{ duration: 0.7 }}>
              That PDF you fire off to a motorsport company, landing in a pile of
              hundreds that look EXACTLY the same. Same format, same structure,
              the same bullet points every single person on earth is using.
              Opened for two seconds, closed, and forgotten before the next one
              loads.
            </motion.p>

            <motion.p className="font-body" style={{ ...bodyCream, marginTop: 22 }} {...fadeUp} transition={{ duration: 0.7 }}>
              So instead of sending another one, I built this. A website you can
              actually walk through, coded from zero with Claude Code, by someone
              who had never written a single line of code in his life. Not a
              template, not an agency... just me typing what I wanted in plain
              words and watching it slowly turn into a place instead of a
              document.
            </motion.p>
          </div>

          {/* CLAUDE CODE wordmark */}
          <motion.img
            src="/claude_code_wordmark.png"
            alt="Claude Code"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              flex: "0 0 auto",
              alignSelf: isMobile ? "flex-start" : "center",
              width: isMobile ? 220 : "clamp(280px, 30vw, 460px)",
              height: "auto",
            }}
          />
        </div>
      </div>

      {/* ── BLOCK 2 — DARK, garage door background ───────────────── */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: isMobile ? "auto" : "88vh", display: "flex", alignItems: "center" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#0d0d0b",
            backgroundImage: "url('/garage_door.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.66)", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 90 : 110, paddingBottom: isMobile ? 90 : 110, maxWidth: 980 }}>
          <motion.span
            className="font-display"
            style={{ fontSize: 20, color: "rgba(255,252,232,0.55)", display: "block" }}
            {...fadeUp} transition={{ duration: 0.6 }}
          >
            THE EXPERIMENT
          </motion.span>

          <motion.p className="font-body" style={{ ...bodyDark, marginTop: 28 }} {...fadeUp} transition={{ duration: 0.7 }}>
            For months I'd been obsessed with how far AI actually goes... not the
            hype, the real thing, what one person can build alone if they
            properly go all in. A good friend of mine, Marc Guitart Frescó, told
            me you could code a website from zero without knowing how to program.
            So I set out to find whether that was true.
          </motion.p>

          <motion.p className="font-body" style={{ ...bodyDark, marginTop: 24 }} {...fadeUp} transition={{ duration: 0.7 }}>
            This is what came out. The whole thing you're walking through right
            now, my story built into it instead of flattened onto a page, this
            garage door lifting when you click it, motorsport videos and the
            places I've been running underneath, animations, all of it. What
            started as a test of whether it was even possible turned into the
            thing I'm proudest of building.
          </motion.p>
        </div>
      </div>

      {/* ── BLOCK 3 — CREAM, the sessions + terminal + bot ───────── */}
      <div style={{ position: "relative", overflow: "hidden", paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 72 : 110, paddingBottom: isMobile ? 72 : 110 }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "flex-start", gap: isMobile ? 32 : "clamp(36px, 5vw, 80px)" }}>
          {/* text + terminal */}
          <div style={{ flex: 1, minWidth: 0, maxWidth: 660 }}>
            <motion.p className="font-body" style={bodyCream} {...fadeUp} transition={{ duration: 0.7 }}>
              It was two weeks of conversations with Claude Code. I'd describe
              what I wanted in plain words, it would build it, I'd break it
              trying to change one tiny thing, and we'd work out together why it
              broke. Breaking things, understanding them, breaking them again...
              that exact loop is how I actually learned what this tool can do,
              and how far past a CV it can take you.
            </motion.p>

            {/* terminal mockup */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginTop: isMobile ? 32 : 44, backgroundColor: "#1a1a17", border: "1px solid rgba(0,0,0,0.2)", boxShadow: "0 24px 48px rgba(40,28,12,0.22)", overflow: "hidden" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
                <span className="font-body" style={{ marginLeft: 10, fontSize: 11, color: "rgba(255,252,232,0.4)", letterSpacing: "0.06em" }}>claude code</span>
              </div>
              <div style={{ padding: isMobile ? "18px 16px" : "22px 24px", display: "flex", flexDirection: "column", gap: 12, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: isMobile ? 12.5 : 13.5, lineHeight: 1.5 }}>
                <div><span style={{ color: CLAY }}>❯</span> <span style={{ color: "rgba(255,252,232,0.9)" }}>open a garage door when someone clicks</span></div>
                <div style={{ color: "rgba(255,252,232,0.55)" }}>● built the entrance --&gt; door lifts on click, 1.2s</div>
                <div><span style={{ color: CLAY }}>❯</span> <span style={{ color: "rgba(255,252,232,0.9)" }}>put the F1 videos behind my story</span></div>
                <div style={{ color: "rgba(255,252,232,0.55)" }}>● done. also fixed the thing you broke last time</div>
                <div><span style={{ color: CLAY }}>❯</span> <span style={{ color: "rgba(255,252,232,0.9)" }}>break it. understand it. break it again</span></div>
                <div style={{ color: "rgba(255,252,232,0.55)" }}>● ...for two weeks straight <span style={{ opacity: 0.5 }}>▋</span></div>
              </div>
            </motion.div>
          </div>

          {/* Claude Code mascots */}
          <div
            style={{
              flex: "0 0 auto",
              alignSelf: "center",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: isMobile ? 6 : 10,
              width: isMobile ? 260 : "clamp(220px, 22vw, 320px)",
            }}
          >
            {[
              { src: "/claude_bot.png", alt: "Claude Code mascot with a coffee" },
              { src: "/claude_wizard.png", alt: "Claude Code mascot as a wizard" },
              { src: "/claude_chef.png", alt: "Claude Code mascot as a chef" },
              { src: "/claude_detective.png", alt: "Claude Code mascot as a detective" },
            ].map((bot, i) => (
              <motion.img
                key={bot.src}
                src={bot.src}
                alt={bot.alt}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.6, delay: i * 0.1 },
                  scale: { duration: 0.6, delay: i * 0.1 },
                  y: { duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                }}
                whileHover={{ scale: 1.08, rotate: i % 2 ? 3 : -3 }}
                style={{ width: "100%", height: "auto" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── BLOCK 4 — DARK video, differentiation + close ────────── */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: isMobile ? "auto" : "92vh", display: "flex", alignItems: "center" }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        >
          <source src="/hero_bg.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.66)", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 100 : 120, paddingBottom: isMobile ? 100 : 120, maxWidth: 820 }}>
          <motion.p className="font-body" style={bodyDark} {...fadeUp} transition={{ duration: 0.7 }}>
            A web portfolio looks like something only developers get to make. It
            isn't, not anymore. I'm a business student, not an engineer, and
            honestly that was half the point. The other half was seeing how far I
            could push Claude Code myself, past anything I'd done with it before,
            and the only way to learn that is to build something real and let it
            break on you.
          </motion.p>

          <motion.p
            className="font-display"
            style={{ fontSize: isMobile ? 30 : "clamp(34px, 4vw, 60px)", lineHeight: 1.05, color: CREAM, margin: "44px 0 0 0" }}
            {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
          >
            AT LEAST MINE ISN'T ANOTHER PDF IN THE PILE.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default GaragePage;
