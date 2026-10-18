import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const StageTopClass = () => {
  const isMobile = useIsMobile();

  const photo = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
  };

  return (
    <section id="stage-top-class" style={{ backgroundColor: "#fffce8", position: "relative" }}>

      {/* Top area — watermark year */}
      <div style={{
        paddingLeft: isMobile ? "24px" : "clamp(80px, 12vw, 180px)",
        paddingRight: isMobile ? "24px" : "clamp(60px, 8vw, 120px)",
        paddingTop: 48,
        overflow: "hidden",
        lineHeight: 1,
      }}>
        <motion.div
          className="font-display pointer-events-none select-none"
          style={{ color: "#000", opacity: 0.06, lineHeight: 1, whiteSpace: "nowrap", fontSize: isMobile ? "clamp(40px, 12vw, 60px)" : "clamp(72px, 9.5vw, 140px)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          2025 — 2026
        </motion.div>
      </div>

      {/* Headline block */}
      <div style={{
        paddingLeft: isMobile ? "24px" : "clamp(80px, 12vw, 180px)",
        paddingRight: isMobile ? "24px" : "clamp(60px, 8vw, 120px)",
        paddingTop: isMobile ? 24 : 32,
      }}>

        <motion.span
          className="font-display"
          style={{ fontSize: 20, color: "#a9170b", display: "block" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          BEST ACADEMIC RECORD, INTERNATIONAL BUSINESS
        </motion.span>

        <motion.h2
          className="font-display"
          style={{ fontSize: isMobile ? 56 : "clamp(80px, 9vw, 130px)", color: "#000", margin: "10px 0 0 0", lineHeight: 0.9 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          P1.
        </motion.h2>

        <motion.p
          className="font-quote"
          style={{ fontSize: isMobile ? 26 : "clamp(30px, 3.4vw, 48px)", color: "#a9170b", margin: "14px 0 0 0", maxWidth: 820 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Top of my entire promotion.
        </motion.p>

        <motion.div
          style={{ maxWidth: 620, display: "flex", flexDirection: "column", gap: 24, marginTop: isMobile ? 32 : 44 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
            Not a module, not a semester, not a good year --&gt; the best academic record of the WHOLE International Business class. Four years of it. I found out and had to read the email twice before I called my parents.
          </p>
          <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
            And this is the one that actually got me. Because everything you've just scrolled through, Paris, Barcelona, the podcast, the year where I was doing three things at once and sleeping badly, Sheffield, UNNO... none of it came out of a plan. It came out of saying yes and figuring it out after. The plaque is just the receipt.
          </p>
          <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.75)", margin: 0 }}>
            Second photo is my favourite of the two, by the way. The guy handing out the awards pointed back at me mid-celebration like we'd just won something together, and honestly, that's exactly how it felt. The culmination of my degree, right there on a stage, in about four seconds.
          </p>
        </motion.div>

      </div>

      {/* Two photos */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 36 : 40,
        paddingLeft: isMobile ? "24px" : "clamp(80px, 12vw, 180px)",
        paddingRight: isMobile ? "24px" : "clamp(60px, 8vw, 120px)",
        paddingTop: isMobile ? 44 : 64,
        paddingBottom: isMobile ? 60 : 100,
      }}>

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <motion.div
            style={{ width: "100%", aspectRatio: "3 / 2", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.20)" }}
            {...photo}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/award_p1_plaque.jpg"
              alt="Receiving the award for the best academic record of the International Business class"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
            />
          </motion.div>
          <motion.span
            className="font-hand"
            style={{ fontSize: 20, color: "rgba(0,0,0,0.5)", textAlign: "center" }}
            {...photo}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            four years in a little black box
          </motion.span>
        </div>

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <motion.div
            style={{ width: "100%", aspectRatio: "3 / 2", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.20)" }}
            {...photo}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/award_p1_moment.jpg"
              alt="Celebrating on stage right after receiving the award"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
            />
          </motion.div>
          <motion.span
            className="font-hand"
            style={{ fontSize: 20, color: "rgba(0,0,0,0.5)", textAlign: "center" }}
            {...photo}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            and this. this one I keep.
          </motion.span>
        </div>

      </div>

    </section>
  );
};

export default StageTopClass;
