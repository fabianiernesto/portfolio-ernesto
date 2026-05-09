import { motion } from "framer-motion";
import StageContainer from "./StageContainer";

const Stage1_FirstYear = () => {
  return (
    <StageContainer
      id="stage-1"
      minHeight="120vh"
      yearInscription={
        <div
          className="font-display text-anton-140 absolute"
          style={{ top: "8vh", left: "55vw", color: "var(--signal)", opacity: 0.16 }}
        >
          2022 — 2023
        </div>
      }
    >
      <div className="relative pl-[8vw] md:pl-[10vw] pr-4">
        <motion.h2
          className="font-display text-anton-80 text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          YEAR ONE.
        </motion.h2>

        <div className="mt-16 max-w-[620px] font-body text-[15px] leading-[1.65] text-black/85 space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            IQS Barcelona. International Business, triple degree programme.
            The beginning of the structure.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            IQS Hackathon 2023. Team DIZZY. Project ROUND. 48 hours to design a circular economy
            system for selective demolition and construction waste reuse. First competitive win.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-display text-anton-48 text-black block">Won.</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.55 }}
          >
            Accounting intern, 5 Pétalos de Rosa, Mallorca. That summer. First real look inside
            how a business actually runs day to day.
          </motion.p>
        </div>
      </div>
    </StageContainer>
  );
};

export default Stage1_FirstYear;
