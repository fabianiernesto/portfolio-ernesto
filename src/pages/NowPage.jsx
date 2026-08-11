import { motion } from "framer-motion";
import BackToGarage from "../components/BackToGarage";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const RED = "#a9170b";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
};

const StatusChip = ({ label, live }) => (
  <span
    className="font-body"
    style={{
      display: "inline-block",
      fontSize: 10,
      letterSpacing: "0.14em",
      padding: "5px 11px",
      whiteSpace: "nowrap",
      color: live ? CREAM : "rgba(255,252,232,0.70)",
      backgroundColor: live ? RED : "transparent",
      border: `1px solid ${live ? RED : "rgba(255,252,232,0.30)"}`,
    }}
  >
    {label}
  </span>
);

const NowPage = () => {
  const isMobile = useIsMobile();

  const PL = isMobile ? "24px" : "clamp(80px, 12vw, 180px)";
  const PR = isMobile ? "24px" : "clamp(60px, 10vw, 160px)";

  const body = {
    fontSize: isMobile ? 15 : 16,
    lineHeight: 1.8,
    color: "rgba(255,252,232,0.82)",
    margin: 0,
  };

  const Project = ({ index, status, live, title, children }) => (
    <motion.article
      {...fadeUp}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderTop: "1px solid rgba(255,252,232,0.16)",
        padding: isMobile ? "40px 0" : "56px 0",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 20 : "clamp(32px, 5vw, 80px)",
      }}
    >
      <div
        style={{
          flex: isMobile ? "none" : "0 0 150px",
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          alignItems: isMobile ? "center" : "flex-start",
          gap: isMobile ? 14 : 16,
        }}
      >
        <span
          className="font-body"
          style={{ fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,252,232,0.40)" }}
        >
          {index}
        </span>
        <StatusChip label={status} live={live} />
      </div>

      <div style={{ flex: 1, minWidth: 0, maxWidth: 720 }}>
        <h2
          className="font-display"
          style={{
            fontSize: isMobile ? 30 : "clamp(32px, 3.6vw, 52px)",
            color: CREAM,
            lineHeight: 1,
            margin: "0 0 20px 0",
          }}
        >
          {title}
        </h2>
        {children}
      </div>
    </motion.article>
  );

  return (
    <div style={{ backgroundColor: "#0d0d0b", position: "relative", minHeight: "100dvh" }}>
      <BackToGarage />

      {!isMobile && (
        <motion.span
          className="font-display"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 8000,
            mixBlendMode: "difference",
            color: "#ffffff",
            fontSize: 14,
            letterSpacing: "0.1em",
          }}
        >
          BUILDING NOW
        </motion.span>
      )}

      <div
        style={{
          paddingLeft: PL,
          paddingRight: PR,
          paddingTop: isMobile ? 100 : 150,
          paddingBottom: isMobile ? 80 : 130,
        }}
      >
        {/* ── Opening ───────────────────────────────────────────── */}
        <motion.p
          className="font-quote"
          style={{
            fontSize: isMobile ? 26 : "clamp(30px, 3.4vw, 46px)",
            color: CREAM,
            margin: 0,
            maxWidth: 840,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Wanting in is not a plan, so this is the part I can actually control.
        </motion.p>

        <motion.p
          className="font-body"
          style={{ ...body, marginTop: 28, maxWidth: 620 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          Three things running at the same time right now, all of them pointing
          at the same place.
        </motion.p>

        <div style={{ marginTop: isMobile ? 56 : 90 }}>
          {/* ── 01 — LinkedIn ───────────────────────────────────── */}
          <Project index="01" status="LIVE, EVERY WEEK" live title="WRITING ABOUT THE BUSINESS OF RACING">
            <p className="font-body" style={body}>
              I publish two series on LinkedIn every week, and both come from
              the same place... this sport is far more interesting underneath
              than the highlights ever make it look.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 24 : 40,
                marginTop: 32,
              }}
            >
              <div style={{ flex: 1, minWidth: 0, borderLeft: `2px solid ${RED}`, paddingLeft: 18 }}>
                <span
                  className="font-display"
                  style={{ display: "block", fontSize: 17, color: CREAM, marginBottom: 10, letterSpacing: "0.02em" }}
                >
                  MOTORSPORT SIMPLIFIED
                </span>
                <p className="font-body" style={{ ...body, fontSize: 14, lineHeight: 1.7 }}>
                  One idea from the motor world explained the way you'd explain
                  it to a mate at a bar. F1, WEC, WRC, NASCAR, the Indy 500...
                  no jargon, no paddock pass required.
                </p>
              </div>

              <div style={{ flex: 1, minWidth: 0, borderLeft: `2px solid ${RED}`, paddingLeft: 18 }}>
                <span
                  className="font-display"
                  style={{ display: "block", fontSize: 17, color: CREAM, marginBottom: 10, letterSpacing: "0.02em" }}
                >
                  MOTORSPORT STORIES
                </span>
                <p className="font-body" style={{ ...body, fontSize: 14, lineHeight: 1.7 }}>
                  A driver, a real moment, and the contract or the money or the
                  team politics sitting underneath it that the highlight reel
                  never shows you.
                </p>
              </div>
            </div>

            <motion.a
              href="https://www.linkedin.com/in/ernestofabiani/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body"
              data-hover="true"
              whileHover={{ opacity: 0.7 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 32,
                fontSize: 12,
                letterSpacing: "0.1em",
                color: CREAM,
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,252,232,0.45)",
                paddingBottom: 3,
              }}
            >
              Read it on LinkedIn
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
              </svg>
            </motion.a>
          </Project>

          {/* ── 02 — This portfolio ─────────────────────────────── */}
          <Project index="02" status="LIVE, YOU'RE IN IT" live title="THIS GARAGE, CODED FROM SCRATCH">
            <p className="font-body" style={body}>
              You're standing inside it. I built this whole thing myself with
              Claude Code, no template and no agency, shaped as a garage because
              that's the only honest way to lay out a story where every turn
              ends up back at the motor world.
            </p>
            <p className="font-body" style={{ ...body, marginTop: 20 }}>
              I could have written "I learn fast and I build things" on a CV
              instead. This felt like the better argument.
            </p>
          </Project>

          {/* ── 03 — F1 project ─────────────────────────────────── */}
          <Project index="03" status="IN THE WORKSHOP" title="MAKING A RACE WEEKEND WORTH WATCHING">
            <p className="font-body" style={body}>
              Watching a Grand Prix asks you to already know everything, and if
              you don't, the whole thing turns into cars going round while
              someone shouts numbers at you.
            </p>
            <p className="font-body" style={{ ...body, marginTop: 20 }}>
              So I'm building a way to live a race weekend that actually holds
              your attention, put together from real timing data and told the
              way the friend who watches every session would tell it to you.
              Still in pieces on the workbench... but this one I'm genuinely
              obsessed with.
            </p>
          </Project>

          <div style={{ borderTop: "1px solid rgba(255,252,232,0.16)" }} />
        </div>
      </div>
    </div>
  );
};

export default NowPage;
