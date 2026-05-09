import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Garage door entrance screen.
 * Black background with garage_door.png covering the viewport (anchored to bottom).
 * Click → door animates upward out of view over 1.2s.
 * A light strip appears at the bottom edge as the door rises, then fades.
 */
const EntranceDoor = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (isDone) return null;

  const handleClick = () => {
    if (!isOpening) setIsOpening(true);
  };

  return (
    <motion.div
      onClick={handleClick}
      animate={isOpening ? { y: "-100vh" } : { y: 0 }}
      whileHover={isOpening ? {} : { filter: "brightness(1.06)" }}
      transition={
        isOpening
          ? { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          : { duration: 0 }
      }
      onAnimationComplete={() => {
        if (isOpening) {
          setIsDone(true);
          onOpen?.();
        }
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        backgroundColor: "#000000",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {/* Garage door image — full width, vertically centered, no side bars */}
      <img
        src="/garage_door.png"
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          width: "100%",
          height: "auto",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Click hint — bottom center, pulses until clicked */}
      {!isOpening && (
        <motion.div
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            pointerEvents: "none",
            zIndex: 2,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.span
            className="font-body"
            style={{ fontSize: 11, color: "rgba(255,252,232,0.9)", letterSpacing: "0.15em", fontWeight: 700 }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            CLICK TO ENTER
          </motion.span>
          <motion.svg
            width="12" height="8" viewBox="0 0 12 8" fill="none"
            animate={{ y: [0, 4, 0], opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M1 1L6 7L11 1" stroke="rgba(255,252,232,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.div>
      )}

      {/* Light strip at the bottom edge — appears and fades as door rises */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "rgba(255, 252, 232, 0.15)",
          pointerEvents: "none",
        }}
        initial={{ opacity: 0 }}
        animate={isOpening ? { opacity: [0, 1, 0] } : { opacity: 0 }}
        transition={{ duration: 1.2, times: [0, 0.35, 1] }}
      />

    </motion.div>
  );
};

export default EntranceDoor;
