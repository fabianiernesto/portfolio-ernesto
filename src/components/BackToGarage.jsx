import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Fixed "back to hub" link shown on every sub-page.
 * White + mix-blend-difference so it stays readable on cream and dark alike.
 */
const BackToGarage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      style={{
        position: "fixed",
        top: 20,
        left: 20,
        zIndex: 8000,
        mixBlendMode: "difference",
      }}
    >
      <Link
        to="/"
        data-hover="true"
        className="font-body"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          color: "#ffffff",
          textDecoration: "none",
          fontSize: 11,
          letterSpacing: "0.12em",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 5H1.5M1.5 5L4.5 2M1.5 5L4.5 8" />
        </svg>
        GARAGE
      </Link>
    </motion.div>
  );
};

export default BackToGarage;
