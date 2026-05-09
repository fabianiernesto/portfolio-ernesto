import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StageContainer = ({
  id,
  children,
  yearInscription,
  minHeight = "100vh",
  floorLine = true,
  className = "",
  parallaxBg = -120,
  parallaxContent = -40,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [parallaxBg * -1, parallaxBg]);
  const yContent = useTransform(scrollYProgress, [0, 1], [parallaxContent * -1, parallaxContent]);

  return (
    <section
      ref={ref}
      id={id}
      className={`stage-section ${className}`}
      style={{ minHeight }}
    >
      {yearInscription && (
        <motion.div style={{ y: yBg }} className="year-inscription">
          {yearInscription}
        </motion.div>
      )}

      {floorLine && <div className="floor-line" style={{ top: 0 }} aria-hidden="true" />}

      <motion.div
        style={{ y: yContent }}
        className="layer-content relative w-full max-w-[1400px] mx-auto py-[18vh]"
      >
        {children}
      </motion.div>

      {floorLine && <div className="floor-line" style={{ bottom: 0 }} aria-hidden="true" />}
    </section>
  );
};

export default StageContainer;
