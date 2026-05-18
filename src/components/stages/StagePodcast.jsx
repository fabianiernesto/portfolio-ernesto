import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const StagePodcast = () => {
  const isMobile = useIsMobile();
  return (
    <section
      id="stage-podcast"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Full-bleed background photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/podcast_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Dark overlay 60% */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.60)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          paddingTop: isMobile ? 80 : 120,
          paddingBottom: isMobile ? 80 : 120,
          paddingLeft: isMobile ? 24 : 220,
          paddingRight: isMobile ? 24 : "6vw",
          maxWidth: 900,
        }}
      >
        {/* Year label */}
        <motion.span
          className="font-display"
          style={{ fontSize: 20, color: "rgba(255,252,232,0.60)", display: "block" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          JAN 2024 — JUN 2024
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-display"
          style={{
            fontSize: isMobile ? 38 : 72,
            color: "#fffce8",
            margin: "24px 0 40px 0",
            lineHeight: 1,
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          La Importancia de<br />Llamarse Ernesto
        </motion.h2>

        {/* Body */}
        <motion.div
          style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 24 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <p className="font-body" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
            No format, no guest list, no strategy... just me talking through things I was figuring out in real time because at some point the thoughts needed somewhere to go and writing wasn't cutting it anymore.
          </p>
          <p className="font-body" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
            The people around me listened, close friends, family, and that was enough to keep going. It was never meant to reach anyone beyond that, and honestly that's what made it feel real, there was no performance behind it.
          </p>
          <p className="font-body" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
            Six months, published consistently, ended intentionally. I still don't know if I said anything particularly useful... but thinking out loud through a microphone taught me something writing never did.
          </p>

          {/* Spotify link */}
          <motion.a
            href="https://open.spotify.com/show/0OWNjTm5ghlJACRpFlahEc?si=d19f5308493b48f4"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            data-hover="true"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginTop: 8,
              fontSize: 12,
              letterSpacing: "0.08em",
              color: "#fffce8",
              textDecoration: "none",
              width: "fit-content",
              borderBottom: "1px solid rgba(255,252,232,0.50)",
              paddingBottom: 3,
            }}
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            Listen on Spotify →
          </motion.a>
        </motion.div>

      </div>

    </section>
  );
};

export default StagePodcast;
