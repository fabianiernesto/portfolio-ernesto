import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const CREAM = "#fffce8";
const RED = "#a9170b";
const PL = "clamp(80px, 12vw, 180px)";

const StageClosing = () => {
  const isMobile = useIsMobile();
  return (
    <section
      id="stage-closing"
      style={{
        backgroundColor: RED,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingLeft: isMobile ? "24px" : PL,
        paddingRight: isMobile ? "24px" : "clamp(60px, 8vw, 120px)",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <div style={{ maxWidth: 800 }}>

        <motion.span
          className="font-body"
          style={{ fontSize: 14, color: CREAM, opacity: 0.7, display: "block", marginBottom: 32, letterSpacing: "0.02em" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          *And always remember:
        </motion.span>

        <motion.h2
          className="font-display"
          style={{
            fontSize: "clamp(52px, 7vw, 96px)",
            color: CREAM,
            lineHeight: 1.15,
            margin: 0,
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          "IF YOU WANT<br />
          <em>EXTRAORDINARY<br />
          RESULTS</em> YOU CAN'T<br />
          SETTLE TO BE<br />
          ORDINARY"
        </motion.h2>

      </div>
    </section>
  );
};

export default StageClosing;
