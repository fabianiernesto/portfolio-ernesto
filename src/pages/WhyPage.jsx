import { motion } from "framer-motion";
import BackToGarage from "../components/BackToGarage";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const RED = "#a9170b";

/* A photograph as a physical object: paper border, soft shadow, resting
   at a slight angle like a print left on a table. Straightens on hover. */
const ArchivePrint = ({ src, alt, caption, tilt = -2.2, isMobile }) => (
  <motion.figure
    initial={{ opacity: 0, y: 34, rotate: tilt * 2.4 }}
    whileInView={{ opacity: 1, y: 0, rotate: tilt }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ rotate: 0, y: -6 }}
    style={{
      margin: 0,
      width: isMobile ? "100%" : 440,
      maxWidth: 440,
      backgroundColor: "#ffffff",
      padding: isMobile ? "12px 12px 0 12px" : "16px 16px 0 16px",
      boxShadow:
        "0 22px 44px rgba(30,20,10,0.20), 0 3px 8px rgba(30,20,10,0.10)",
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "auto", display: "block" }}
    />
    <figcaption
      className="font-body"
      style={{
        fontSize: 12,
        lineHeight: 1.5,
        color: "rgba(0,0,0,0.50)",
        letterSpacing: "0.02em",
        padding: isMobile ? "12px 2px 14px 2px" : "16px 2px 18px 2px",
      }}
    >
      {caption}
    </figcaption>
  </motion.figure>
);

const WhyPage = () => {
  const isMobile = useIsMobile();

  const PL = isMobile ? "24px" : "clamp(80px, 12vw, 180px)";
  const PR = isMobile ? "24px" : "clamp(60px, 8vw, 120px)";
  const watermarkSize = isMobile ? "clamp(40px, 12vw, 60px)" : "clamp(72px, 9.5vw, 140px)";
  const titleSize = isMobile ? 40 : 64;
  const bodyStyle = {
    fontSize: 15,
    lineHeight: 1.8,
    color: "rgba(0,0,0,0.75)",
    margin: 0,
  };

  return (
    <div style={{ backgroundColor: CREAM, position: "relative" }}>
      <BackToGarage />

      {/* ── Section marker — fixed top right ──────────────────────── */}
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
          fontSize: isMobile ? 12 : 14,
          letterSpacing: "0.1em",
        }}
      >
        WHY MOTORSPORT
      </motion.span>

      {/* ── BLOCK 1 — CARS (dark, McQueen bg) ─────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "100dvh", display: "flex", alignItems: "center" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#0d0d0b",
            backgroundImage: "url('/why_cars.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, paddingTop: 120, paddingBottom: 120, paddingLeft: PL, paddingRight: PR, maxWidth: 900 }}>
          <motion.h2
            className="font-display"
            style={{ fontSize: isMobile ? 38 : 72, color: CREAM, margin: "0 0 40px 0", lineHeight: 1 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            FIRST LOVE:<br />A CARTOON CAR.
          </motion.h2>

          <motion.div
            style={{ maxWidth: 700, display: "flex", flexDirection: "column", gap: 24 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
              My mother swears she can still hear it. Three straight months of
              the same film, a two-year-old planted in front of the screen
              watching a red cartoon car go round in circles... and the second
              it ended, asking for it again like it was the first time.
            </p>
            <p className="font-body" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
              It was the engines. Even then, the sound of them put goosebumps
              on a kid who could barely talk... and when I rewatched the film a
              month ago (literally, a month ago) my skin did the EXACT same
              thing. Same shiver, same kid.
            </p>
            <p className="font-body" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
              Twenty years later CARS is still the most-watched film of my
              life, and nobody in my house has ever managed to explain it (my
              mother just rolls her eyes when it comes up). Some things move in
              before you have words for them, and this one never left.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── BLOCK 2 — MY FATHER AND A TUBE TV ─────────────────────── */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        paddingLeft: PL,
        paddingRight: PR,
        paddingTop: isMobile ? 80 : 140,
        paddingBottom: isMobile ? 60 : 100,
        gap: isMobile ? 40 : 80,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <motion.span
            className="font-display"
            style={{ fontSize: 20, color: RED, display: "block" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            A LIVING ROOM IN MALLORCA
          </motion.span>

          <motion.h2
            className="font-display"
            style={{ fontSize: titleSize, color: "#000", margin: "12px 0 40px 0", lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            MY FATHER<br />AND A TUBE TV.
          </motion.h2>

          <motion.div
            style={{ maxWidth: 600, display: "flex", flexDirection: "column", gap: 24 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body" style={bodyStyle}>
              A few years later the engines stopped being cartoons, and I wasn't
              watching alone anymore. One of those old tube TVs, Vettel in the
              Red Bull, Antonio Lobato's voice commentating over the roar of all
              of it... and me lying on top of my dad, completely glued to the
              screen, not able to move.
            </p>
            <p className="font-body" style={bodyStyle}>
              I couldn't tell you a single thing about the result. I just
              remember being right there next to him.
            </p>
            <p className="font-body" style={bodyStyle}>
              My dad and I understand each other better inside a paddock or
              watching a race than almost anywhere else, and there are moments
              when I wonder if without motorsport we would have ever really got
              to know each other the way we do.
            </p>
          </motion.div>
        </div>

        <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", alignSelf: isMobile ? "center" : "auto", width: isMobile ? "100%" : "auto" }}>
          <ArchivePrint
            src="/why_dad.jpg"
            alt="Ernesto as a toddler with his father"
            caption="My dad and me."
            tilt={-2.4}
            isMobile={isMobile}
          />
        </div>
      </div>

      {/* ── BLOCK 3 — THE SAME LANGUAGE (dark, photo bg) ──────────── */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "100dvh", display: "flex", alignItems: "center" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#0d0d0b",
            backgroundImage: "url('/why_drive.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.60)", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, paddingTop: 120, paddingBottom: 120, paddingLeft: PL, paddingRight: PR, maxWidth: 900 }}>
          <motion.span
            className="font-display"
            style={{ fontSize: 20, color: "rgba(255,252,232,0.60)", display: "block" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            TODAY
          </motion.span>

          <motion.h2
            className="font-display"
            style={{ fontSize: isMobile ? 38 : 72, color: CREAM, margin: "24px 0 40px 0", lineHeight: 1 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            THE SAME<br />LANGUAGE, STILL.
          </motion.h2>

          <motion.div
            style={{ maxWidth: 700, display: "flex", flexDirection: "column", gap: 24 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
              It's not that we don't talk about other things. It's that
              something happens when it's cars that doesn't happen anywhere
              else, a way of both actually being there at the same time without
              either of us trying.
            </p>
          </motion.div>

          <motion.p
            className="font-display"
            style={{ fontSize: isMobile ? 26 : "clamp(30px, 3.4vw, 44px)", lineHeight: 1.1, color: CREAM, margin: "56px 0 56px 0", maxWidth: 760 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            MOTORSPORT HANDED US A LANGUAGE BEFORE WE KNEW WE WERE MISSING ONE.
          </motion.p>

          <motion.p
            className="font-body"
            style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0, maxWidth: 700 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            The strangest part is that this connection has made me want to be in
            this world in a way I can no longer separate from him. I don't know
            where the passion for the sport ends and where what I feel when I'm
            with my dad talking about it begins... and honestly, I'm not sure I
            want to know.
          </motion.p>
        </div>
      </div>

      {/* ── BLOCK 4 — TINTORÉ ─────────────────────────────────────── */}
      <div style={{ paddingLeft: PL, paddingRight: PR, paddingTop: 48, overflow: "hidden", lineHeight: 1 }}>
        <motion.div
          className="font-display pointer-events-none select-none"
          style={{ color: "#000", opacity: 0.06, lineHeight: 1, whiteSpace: "nowrap", fontSize: watermarkSize }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          BARCELONA 1913
        </motion.div>
      </div>

      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        paddingLeft: PL,
        paddingRight: PR,
        paddingTop: isMobile ? 24 : 48,
        paddingBottom: isMobile ? 60 : 100,
        gap: isMobile ? 40 : 80,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <motion.span
            className="font-display"
            style={{ fontSize: 20, color: RED, display: "block" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            A FEW DAYS AGO
          </motion.span>

          <motion.h2
            className="font-display"
            style={{ fontSize: titleSize, color: "#000", margin: "12px 0 40px 0", lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            IT WAS ALREADY<br />IN THE BLOOD.
          </motion.h2>

          <motion.div
            style={{ maxWidth: 600, display: "flex", flexDirection: "column", gap: 24 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body" style={bodyStyle}>
              "Ernesto, that man you see in the photo is your great-uncle. This
              motor thing, you carry it in your blood." That's what my
              great-aunt told me a few days ago, when I mentioned I wanted to
              build a career in motorsport. And then she sent me the photo... a
              red and yellow Maserati, a man leaning on the bonnet, straight out
              of a world I've been clawing at from the outside without knowing
              it was already mine.
            </p>
            <p className="font-body" style={bodyStyle}>
              Enrique Tintoré. Barcelona, 1913. A textile industrialist and
              member of the legendary Penya Rhin, one of the very few people who
              ever shared a grid with Fangio and Nuvolari... the F1 from before
              the World Championship even existed. And he wasn't the star of it
              either, more the man putting his own money in and running the
              whole thing from the inside than the one collecting the wins.
            </p>
            <p className="font-body" style={bodyStyle}>
              And now there's me, 80 years later, obsessed with this exact
              world, learning the business behind it and chasing a way in, with
              no clue the pull already had a name in the family.
            </p>
          </motion.div>
        </div>

        <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", alignSelf: isMobile ? "center" : "auto", width: isMobile ? "100%" : "auto" }}>
          <ArchivePrint
            src="/why_tintore.png"
            alt="The red and yellow Maserati of Enrique Tintoré, Penya Rhin era"
            caption="The photo she sent me. Enrique Tintoré's Maserati."
            tilt={2.6}
            isMobile={isMobile}
          />
        </div>
      </div>

      {/* ── CLOSING (red) ─────────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: RED,
          minHeight: isMobile ? "60dvh" : "80dvh",
          display: "flex",
          alignItems: "center",
          paddingLeft: PL,
          paddingRight: PR,
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <div style={{ maxWidth: 900 }}>
          <motion.h2
            className="font-display"
            style={{ fontSize: isMobile ? 44 : "clamp(52px, 6.5vw, 88px)", color: CREAM, lineHeight: 1.1, margin: 0 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            SOME THINGS<br />YOU CHOOSE.<br />
            <em>THIS ONE<br />CHOSE FIRST.</em>
          </motion.h2>
        </div>
      </div>

    </div>
  );
};

export default WhyPage;
