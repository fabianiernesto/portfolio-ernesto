import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import { getProject } from "../data/nowProjects";

const CREAM = "#fffce8";
const RED = "#a9170b";
const TILE = "#efe9d6";
const INK = "#111110";

const ProjectPage = () => {
  const isMobile = useIsMobile();
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/building-now" replace />;

  const PL = isMobile ? "24px" : "clamp(80px, 12vw, 180px)";
  const PR = isMobile ? "24px" : "clamp(60px, 10vw, 160px)";

  return (
    <div style={{ backgroundColor: CREAM, position: "relative", minHeight: "100dvh" }}>
      {/* Back to the grid */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ position: "fixed", top: 20, left: 20, zIndex: 8000, mixBlendMode: "difference" }}
      >
        <Link
          to="/building-now"
          data-hover="true"
          className="font-body"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#ffffff", textDecoration: "none", fontSize: 11, letterSpacing: "0.12em" }}
        >
          <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 5H1.5M1.5 5L4.5 2M1.5 5L4.5 8" />
          </svg>
          BUILDING NOW
        </Link>
      </motion.div>

      <div
        style={{
          paddingLeft: PL,
          paddingRight: PR,
          paddingTop: isMobile ? 96 : 130,
          paddingBottom: isMobile ? 80 : 120,
        }}
      >
        <div style={{ maxWidth: 820 }}>
          <motion.span
            className="font-body"
            style={{ fontSize: 12, color: "rgba(0,0,0,0.45)", display: "block", marginBottom: 22, letterSpacing: "0.1em", textTransform: "uppercase" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {project.index} — Building now
          </motion.span>

          <motion.h1
            className="font-display"
            style={{ fontSize: isMobile ? 44 : "clamp(52px, 7vw, 96px)", color: INK, lineHeight: 0.94, margin: 0 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            {project.title}
          </motion.h1>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              marginTop: isMobile ? 40 : 56,
              width: "100%",
              aspectRatio: isMobile ? "4 / 3" : "16 / 9",
              overflow: "hidden",
              backgroundColor: TILE,
              border: "1px solid rgba(0,0,0,0.10)",
            }}
          >
            {project.img && (
              <img
                src={project.img}
                alt={project.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </motion.div>

          {/* Work in progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            style={{ marginTop: isMobile ? 48 : 72, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}
          >
            <span
              className="font-display"
              style={{ fontSize: isMobile ? 30 : 44, color: RED, lineHeight: 1 }}
            >
              WORK IN PROGRESS
            </span>
            <p className="font-body" style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.7, color: "rgba(0,0,0,0.6)", margin: 0, maxWidth: 520 }}>
              This one's still on the workbench. The full write-up is coming
              soon.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
