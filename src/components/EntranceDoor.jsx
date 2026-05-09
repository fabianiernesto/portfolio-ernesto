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
      {/* Garage door image — covers viewport, pinned to bottom */}
      <img
        src="/garage_door.png"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "bottom center",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

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
