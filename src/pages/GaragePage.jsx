import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const INK = "#111110";
const CLAY = "#d97757"; // Claude's clay
const RED = "#a9170b";

/* Claude spark mark, rebuilt as a radial burst for decorative use */
const Spark = ({ size = 44, color = CLAY, style }) => {
  const rays = 12;
  const cx = 50, cy = 50, inner = 7, outer = 47;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" style={style}>
      {Array.from({ length: rays }, (_, i) => {
        const a = (Math.PI * 2 * i) / rays;
        return (
          <line
            key={i}
            x1={cx + Math.cos(a) * inner}
            y1={cy + Math.sin(a) * inner}
            x2={cx + Math.cos(a) * outer}
            y2={cy + Math.sin(a) * outer}
            stroke={color}
            strokeWidth={5}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

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

      {/* ── BLOCK 1 — CREAM hero + the PDF problem ───────────────── */}
      <div style={{ position: "relative", overflow: "hidden", paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 96 : 130, paddingBottom: isMobile ? 72 : 100 }}>
        <Spark size={isMobile ? 34 : 70} style={{ position: "absolute", top: "12%", right: "6%", opacity: 0.5 }} />
        <Spark size={isMobile ? 22 : 40} style={{ position: "absolute", top: "40%", right: "16%", opacity: 0.26 }} />
        {!isMobile && <Spark size={30} style={{ position: "absolute", bottom: "14%", left: "5%", opacity: 0.24 }} />}

        <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
          <motion.span
            className="font-body"
            style={{ fontSize: 12, color: "rgba(0,0,0,0.45)", display: "block", marginBottom: 22, letterSpacing: "0.1em", textTransform: "uppercase" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            02 — Building now
          </motion.span>

          <motion.h1
            className="font-display"
            style={{ fontSize: isMobile ? 44 : "clamp(52px, 7vw, 96px)", color: INK, lineHeight: 0.94, margin: 0 }}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            THIS GARAGE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 9, marginTop: 26, padding: "7px 14px 7px 10px", border: `1px solid ${CLAY}`, borderRadius: 999 }}
          >
            <Spark size={18} />
            <span className="font-body" style={{ fontSize: 11, letterSpacing: "0.14em", color: "#8a3d24" }}>
              BUILT WITH CLAUDE CODE
            </span>
          </motion.div>

          <motion.p
            className="font-quote"
            style={{ fontSize: isMobile ? 26 : "clamp(30px, 3.4vw, 46px)", color: INK, margin: "40px 0 0 0" }}
            {...fadeUp} transition={{ duration: 0.7 }}
          >
            I was sick of the CV everyone else hands over.
          </motion.p>

          <motion.p className="font-body" style={{ ...bodyCream, marginTop: isMobile ? 32 : 44, maxWidth: 640 }} {...fadeUp} transition={{ duration: 0.7 }}>
            That PDF you fire off to a motorsport company, landing in a pile of
            hundreds that look EXACTLY the same. Same format, same structure,
            the same bullet points every single person on earth is using.
          </motion.p>
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

        <div style={{ position: "relative", zIndex: 2, paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 90 : 110, paddingBottom: isMobile ? 90 : 110, maxWidth: 760 }}>
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
            places I've been running underneath, animations, all of it.
          </motion.p>

          <motion.p
            className="font-hand"
            style={{ fontSize: isMobile ? 20 : 24, color: "rgba(255,252,232,0.8)", marginTop: 34, transform: "rotate(-0.5deg)" }}
            {...fadeUp} transition={{ duration: 0.7 }}
          >
            The door you clicked to get in.
          </motion.p>
        </div>
      </div>

      {/* ── BLOCK 3 — CREAM, the sessions + terminal ─────────────── */}
      <div style={{ position: "relative", overflow: "hidden", paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 72 : 110, paddingBottom: isMobile ? 72 : 110 }}>
        <Spark size={isMobile ? 24 : 46} color={RED} style={{ position: "absolute", top: "10%", right: "9%", opacity: 0.16 }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
          <motion.p className="font-body" style={{ ...bodyCream, maxWidth: 640 }} {...fadeUp} transition={{ duration: 0.7 }}>
            Two weeks of conversations with Claude Code. Breaking things,
            understanding them, breaking them again.
          </motion.p>

          {/* terminal mockup */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginTop: isMobile ? 32 : 44, backgroundColor: "#1a1a17", border: "1px solid rgba(0,0,0,0.2)", boxShadow: "0 24px 48px rgba(40,28,12,0.22)", overflow: "hidden", maxWidth: 620 }}
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

        <div style={{ position: "relative", zIndex: 2, paddingLeft: PL, paddingRight: PR, paddingTop: isMobile ? 100 : 120, paddingBottom: isMobile ? 100 : 120, maxWidth: 780 }}>
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
