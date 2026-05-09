import { motion } from "framer-motion";

const Stage5_Present = () => {
  return (
    <section id="stage-5">

      {/* ── BEFORE THE CIRCUIT — video background ─────────────────── */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>

        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            zIndex: 0,
          }}
        >
          <source src="/hero_bg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay 55% */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)", zIndex: 1 }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          paddingTop: "14vh", paddingBottom: "18vh",
          paddingLeft: "clamp(80px, 12vw, 180px)", paddingRight: "6vw",
        }}>
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
              Scroll through and you'll find two years of building things from scratch inside startups, a co-founded studio, two Erasmus exchanges, a hackathon win, and a pitch that walked out with Best Pitch Award at IQS 2025.
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
        </div>

        {/* Scroll indicator — bottom center */}
        <div style={{
          position: "absolute", bottom: 32, left: 0, right: 0,
          zIndex: 3, display: "flex", flexDirection: "column",
          alignItems: "center", gap: 6,
        }}>
          <span className="font-body" style={{ fontSize: 11, color: "rgba(255,252,232,0.35)", letterSpacing: "0.08em", textTransform: "lowercase" }}>
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
      <div style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", backgroundColor: "#a9170b" }}>

        {/* Two-column content */}
        <div style={{
          display: "flex", width: "100%", alignItems: "center",
        }}>

          {/* LEFT HALF — portrait photo */}
          <div style={{
            flex: "0 0 50%", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}>
            <motion.img
              src="/ernesto_portrait.jpg"
              alt="Ernesto Fabiani"
              style={{
                width: 320, height: 320,
                objectFit: "cover", objectPosition: "top center",
                display: "block", borderRadius: "50%",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* RIGHT HALF — text */}
          <div style={{
            flex: "0 0 50%", paddingRight: 80,
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
              style={{ fontSize: 72, color: "#fffce8", lineHeight: 1, margin: 0 }}
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
                I've never been good at waiting until I'm ready, and I'm not starting now. Just graduated, zero experience in the motor industry, and completely pulled toward it anyway...
              </p>
              <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
                Junior Project Manager at a startup in Barcelona at 19, thrown into things I had no business doing at that age. Co-founded UNNO®STUDIO at 20, built growth systems for eCommerce brands from scratch. Two experiences, same pattern: figure it out by doing it, learn fast, don't wait.
              </p>
              <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
                Motorsport kept pulling me back through all of it, so here I am, writing about it every week and building toward working inside it.
              </p>
              <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,252,232,0.85)", margin: 0 }}>
                If that sounds worth following, stick around ;)
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              style={{ display: "flex", gap: 24, marginTop: 28 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/ernestofabiani/" },
                { label: "Instagram", href: null },
                { label: "Contact", href: null },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href || "#"}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  className="font-body"
                  style={{
                    fontSize: 12, color: "rgba(255,252,232,0.55)",
                    letterSpacing: "0.05em", textDecoration: "none",
                  }}
                  data-hover="true"
                >
                  {label}
                </a>
              ))}
            </motion.div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Stage5_Present;
