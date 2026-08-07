import { motion } from "framer-motion";
import BackToGarage from "../components/BackToGarage";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const RED = "#a9170b";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
};

const WhyPage = () => {
  const isMobile = useIsMobile();
  const P = {
    className: "font-body",
    style: {
      fontSize: isMobile ? 15 : 17,
      lineHeight: 1.85,
      color: "rgba(255,252,232,0.82)",
      margin: 0,
    },
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        backgroundColor: "#0d0d0b",
        paddingLeft: isMobile ? 24 : "clamp(80px, 12vw, 180px)",
        paddingRight: isMobile ? 24 : "clamp(60px, 10vw, 160px)",
        paddingTop: isMobile ? 100 : 140,
        paddingBottom: isMobile ? 80 : 140,
      }}
    >
      <BackToGarage />

      <div style={{ maxWidth: 720 }}>
        <motion.span
          className="font-body"
          style={{ fontSize: 12, color: "rgba(255,252,232,0.50)", display: "block", marginBottom: 28, letterSpacing: "0.1em", textTransform: "uppercase" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          02 — The origin
        </motion.span>

        <motion.h1
          className="font-display"
          style={{ fontSize: isMobile ? 52 : "clamp(64px, 9vw, 120px)", color: CREAM, lineHeight: 0.92, margin: 0 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          WHY<br />MOTORSPORT
        </motion.h1>

        {/* The story */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: isMobile ? 48 : 72 }}>
          <motion.p {...P} {...fadeUp} transition={{ duration: 0.7, delay: 0.25 }}>
            One of those old tube TVs. Vettel in the Red Bull, engines screaming
            through the speakers, Antonio Lobato's voice riding on top of all of
            it... and me lying on my dad, completely glued to the screen,
            refusing to move. I couldn't tell you who won that race. I just
            remember being right there next to him.
          </motion.p>

          <motion.p {...P} {...fadeUp} transition={{ duration: 0.7 }}>
            That's the thing about my father and me, we understand each other
            better inside a paddock or in front of a race than almost anywhere
            else. It's not that we don't talk about other things... it's that
            something happens when it's cars that doesn't happen anywhere else.
          </motion.p>
        </div>

        {/* Pull quote */}
        <motion.blockquote
          className="font-display"
          {...fadeUp}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: isMobile ? 30 : "clamp(36px, 4.5vw, 56px)",
            lineHeight: 1.05,
            color: RED,
            margin: isMobile ? "56px 0" : "80px 0",
            padding: 0,
          }}
        >
          MOTORSPORT HANDED US A LANGUAGE BEFORE WE KNEW WE WERE MISSING ONE.
        </motion.blockquote>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <motion.p {...P} {...fadeUp} transition={{ duration: 0.7 }}>
            And somewhere along the way the connection stopped being separable.
            I don't know where the passion for the sport ends and where what I
            feel talking about it with my dad begins. Honestly, I'm not sure I
            want to know.
          </motion.p>

          <motion.p {...P} {...fadeUp} transition={{ duration: 0.7 }}>
            The other half is simpler, I just love to drive. Gears, empty roads,
            no destination... it clears my head better than anything else I've
            found, my own form of active therapy. I've been like this since I
            was two years old and CARS was the only film in the house that
            mattered.
          </motion.p>

          <motion.p
            {...P}
            {...fadeUp}
            transition={{ duration: 0.7 }}
            style={{ ...P.style, color: CREAM }}
          >
            So no, wanting to work in this industry was never a career move.
            Some things you choose... this one was decided a long time ago, on a
            sofa, in front of a tube TV.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default WhyPage;
