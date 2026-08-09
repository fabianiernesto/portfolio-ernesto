import { useState } from "react";
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
    img: "/hub_now.jpg",
    alt: "Formula 1 car seen from above with the driver in the cockpit",
  },
  {
    index: "02",
    title: "WHY MOTORSPORT",
    desc: "Where the obsession comes from.",
    to: "/why-motorsport",
    img: "/hub_why.jpg",
    alt: "Renault F1 pit stop with the crew swarming the car",
  },
  {
    index: "03",
    title: "BUILDING NOW",
    desc: "What I'm doing about it, today.",
    to: "/building-now",
    img: "/hub_built.jpg",
    alt: "Renault F1 driver celebrating with four fingers raised",
  },
  {
    index: "04",
    title: "LET'S TALK",
    desc: "Motorsport or automotive? Reach out.",
    to: "/contact",
    img: "/hub_talk.jpg",
    alt: "Chrome racing helmet reflecting the paddock",
  },
];

const Panel = ({ item, i, entered, isMobile, hovered, setHovered }) => {
  const isHovered = hovered === i;
  const someoneElse = hovered !== null && hovered !== i;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={entered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => !isMobile && setHovered(i)}
      onMouseLeave={() => !isMobile && setHovered(null)}
      style={{
        position: "relative",
        overflow: "hidden",
        flexGrow: isMobile ? 1 : isHovered ? 1.9 : someoneElse ? 0.8 : 1,
        flexBasis: 0,
        minHeight: isMobile ? "25dvh" : "auto",
        transition: "flex-grow 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
        borderRight: isMobile ? "none" : i < 3 ? "1px solid #0d0d0b" : "none",
        borderBottom: isMobile ? (i < 3 ? "1px solid #0d0d0b" : "none") : "none",
      }}
    >
      <Link
        to={item.to}
        data-hover="true"
        style={{ position: "absolute", inset: 0, display: "block", textDecoration: "none" }}
      >
        {/* photo */}
        <img
          src={item.img}
          alt={item.alt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: isHovered ? "brightness(0.8) saturate(1)" : "brightness(0.45) saturate(0.75)",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "filter 0.6s ease, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />

        {/* legibility gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.25) 38%, rgba(0,0,0,0.05) 60%)",
          }}
        />

        {/* number — top left */}
        <span
          className="font-body"
          style={{
            position: "absolute",
            top: isMobile ? 16 : 24,
            left: isMobile ? 20 : 24,
            fontSize: 12,
            letterSpacing: "0.1em",
            color: isHovered ? RED : "rgba(255,252,232,0.55)",
            transition: "color 0.3s ease",
          }}
        >
          {item.index}
        </span>

        {/* title block — bottom */}
        <div
          style={{
            position: "absolute",
            left: isMobile ? 20 : 24,
            right: isMobile ? 20 : 20,
            bottom: isMobile ? 18 : 28,
          }}
        >
          <span
            className="font-display"
            style={{
              display: "block",
              color: CREAM,
              fontSize: isMobile ? 30 : "clamp(24px, 2.4vw, 40px)",
              lineHeight: 0.95,
              textWrap: "balance",
            }}
          >
            {item.title}
          </span>
          <span
            className="font-body"
            style={{
              display: "block",
              color: "rgba(255,252,232,0.75)",
              fontSize: 13,
              lineHeight: 1.5,
              marginTop: 10,
              maxWidth: 280,
              opacity: isMobile ? 1 : isHovered ? 1 : 0,
              transform: isMobile ? "none" : isHovered ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {item.desc}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const GarageHub = ({ entered }) => {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        height: "100dvh",
        backgroundColor: "#0d0d0b",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflow: "hidden",
      }}
    >
      {ITEMS.map((item, i) => (
        <Panel
          key={item.to}
          item={item}
          i={i}
          entered={entered}
          isMobile={isMobile}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

export default GarageHub;
