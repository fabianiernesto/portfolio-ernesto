import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const CREAM = "#fffce8";
const RED = "#a9170b";

const ITEMS = [
  {
    index: "01",
    title: "BUILT ALREADY",
    desc: "Four years of building, told as they happened.",
    to: "/story",
  },
  {
    index: "02",
    title: "WHY MOTORSPORT",
    desc: "Where the obsession comes from.",
    to: "/why-motorsport",
  },
  {
    index: "03",
    title: "BUILDING NOW",
    desc: "What I'm doing about it, today.",
    to: "/building-now",
  },
  {
    index: "04",
    title: "LET'S TALK",
    desc: "Motorsport or automotive? Reach out.",
    to: "/contact",
  },
];

/* ── F1 START GANTRY ──────────────────────────────────────────────
   Real start-light architecture: a housing hanging from a pole, five
   pods, two glass lenses per pod. Pods light up left to right, hold
   for a random beat (like a real start), then cut to black — and the
   menu launches on lights out. */

const Lens = ({ lit, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        position: "relative",
        background:
          "radial-gradient(circle at 35% 30%, #3d1511 0%, #1f0a08 55%, #130605 100%)",
        boxShadow:
          "inset 0 2px 5px rgba(0,0,0,0.8), inset 0 -1px 2px rgba(255,255,255,0.05)",
        border: "1px solid rgba(0,0,0,0.65)",
      }}
    >
      {/* lit glass */}
      <motion.div
        initial={false}
        animate={{ opacity: lit ? 1 : 0 }}
        transition={{ duration: lit ? 0.09 : 0.05, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 30%, #ff8a7a 0%, #f03225 40%, #c11d10 75%, #a9170b 100%)",
          boxShadow:
            "0 0 10px 3px rgba(240,50,37,0.85), 0 0 30px 10px rgba(169,23,11,0.5), inset 0 1px 3px rgba(255,255,255,0.4)",
        }}
      >
        {/* specular highlight */}
        <div
          style={{
            position: "absolute",
            top: "16%",
            left: "24%",
            width: "26%",
            height: "16%",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.55)",
            filter: "blur(1.5px)",
            transform: "rotate(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
};

const StartGantry = ({ litCols, lightsOut, isMobile }) => {
  const lens = isMobile ? 20 : 30;
  const podPad = isMobile ? 7 : 10;
  const podGap = isMobile ? 6 : 9;

  return (
    <div
      aria-hidden="true"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* ambient glow cast on the wall */}
      <motion.div
        initial={false}
        animate={{ opacity: lightsOut ? 0 : (litCols / 5) * 0.4 }}
        transition={{ duration: lightsOut ? 0.08 : 0.35 }}
        style={{
          position: "absolute",
          top: isMobile ? 20 : 30,
          width: isMobile ? 320 : 560,
          height: isMobile ? 200 : 300,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(169,23,11,0.5) 0%, rgba(169,23,11,0.12) 45%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(6px)",
        }}
      />

      {/* pole */}
      <div
        style={{
          width: isMobile ? 3 : 4,
          height: isMobile ? 34 : 52,
          background: "linear-gradient(90deg, #2a2a27, #4a4a45 45%, #1c1c1a)",
        }}
      />
      {/* mounting bracket */}
      <div
        style={{
          width: isMobile ? 44 : 64,
          height: isMobile ? 5 : 7,
          borderRadius: 2,
          background: "linear-gradient(180deg, #35352f, #171715)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.6)",
        }}
      />

      {/* housing */}
      <div
        style={{
          display: "flex",
          gap: podGap,
          padding: isMobile ? 8 : 11,
          marginTop: isMobile ? 3 : 4,
          borderRadius: isMobile ? 10 : 14,
          background: "linear-gradient(180deg, #23231f 0%, #151512 55%, #0c0c0a 100%)",
          border: "1px solid rgba(255,252,232,0.07)",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,252,232,0.06), inset 0 -2px 6px rgba(0,0,0,0.5)",
        }}
      >
        {[0, 1, 2, 3, 4].map((col) => (
          <div
            key={col}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? 6 : 9,
              padding: podPad,
              borderRadius: isMobile ? 7 : 10,
              background: "linear-gradient(180deg, #0e0e0c, #060605)",
              border: "1px solid rgba(0,0,0,0.7)",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.8)",
            }}
          >
            <Lens lit={!lightsOut && litCols > col} size={lens} />
            <Lens lit={!lightsOut && litCols > col} size={lens} />
          </div>
        ))}
      </div>
    </div>
  );
};

const GarageHub = ({ entered }) => {
  const isMobile = useIsMobile();
  const [litCols, setLitCols] = useState(0);
  const [lightsOut, setLightsOut] = useState(false);

  useEffect(() => {
    if (!entered) return;
    const timers = [];
    // columns on, left to right
    for (let i = 1; i <= 5; i++) {
      timers.push(setTimeout(() => setLitCols(i), 450 + (i - 1) * 330));
    }
    // all on at ~1770ms; hold a random beat like a real start, then out
    const hold = 700 + Math.random() * 800;
    timers.push(setTimeout(() => setLightsOut(true), 1770 + hold));
    return () => timers.forEach(clearTimeout);
  }, [entered]);

  return (
    <div
      style={{
        minHeight: "100dvh",
        backgroundColor: "#0d0d0b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* F1 start gantry */}
      <StartGantry litCols={litCols} lightsOut={lightsOut} isMobile={isMobile} />

      {/* Menu — launches on lights out */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: isMobile ? 24 : "clamp(48px, 8vw, 120px)",
          paddingRight: isMobile ? 24 : "clamp(48px, 8vw, 120px)",
          paddingBottom: isMobile ? 56 : 72,
        }}
      >
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: 28 }}
            animate={lightsOut ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={item.to} style={{ textDecoration: "none" }} data-hover="true">
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: isMobile ? 14 : 28,
                  padding: isMobile ? "20px 0" : "24px 0",
                  borderBottom: "1px solid rgba(255,252,232,0.12)",
                  cursor: "pointer",
                }}
              >
                <motion.span
                  className="font-body"
                  variants={{ rest: { color: "rgba(255,252,232,0.35)" }, hover: { color: RED } }}
                  transition={{ duration: 0.2 }}
                  style={{ fontSize: isMobile ? 12 : 14, letterSpacing: "0.08em", flexShrink: 0 }}
                >
                  {item.index}
                </motion.span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <motion.span
                    className="font-display"
                    variants={{ rest: { x: 0, color: CREAM }, hover: { x: isMobile ? 0 : 16, color: CREAM } }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: "block",
                      fontSize: isMobile ? 34 : "clamp(44px, 5.5vw, 76px)",
                      lineHeight: 1,
                    }}
                  >
                    {item.title}
                  </motion.span>
                  <motion.span
                    className="font-body"
                    variants={{ rest: { opacity: 0.45, x: 0 }, hover: { opacity: 0.8, x: isMobile ? 0 : 16 } }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: "block",
                      fontSize: isMobile ? 13 : 14,
                      color: CREAM,
                      marginTop: 8,
                    }}
                  >
                    {item.desc}
                  </motion.span>
                </div>

                <motion.span
                  variants={{ rest: { opacity: 0, x: -12 }, hover: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.25 }}
                  style={{ color: RED, flexShrink: 0, display: isMobile ? "none" : "block" }}
                >
                  <svg width="26" height="26" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" />
                  </svg>
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Checkered flag strip — bottom edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={lightsOut ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.5 }}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: isMobile ? 12 : 16,
          backgroundImage:
            "repeating-conic-gradient(rgba(255,252,232,0.16) 0% 25%, transparent 0% 50%)",
          backgroundSize: isMobile ? "12px 12px" : "16px 16px",
        }}
      />
    </div>
  );
};

export default GarageHub;
