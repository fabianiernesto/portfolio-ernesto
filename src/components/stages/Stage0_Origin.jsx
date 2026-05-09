import { motion } from "framer-motion";
import StageContainer from "./StageContainer";

const Stage0_Origin = () => {
  return (
    <StageContainer
      id="stage-0"
      minHeight="110vh"
      floorLine={false}
      yearInscription={
        <div
          className="font-display text-anton-180 absolute"
          style={{ top: "8vh", left: "55vw", color: "var(--signal)", opacity: 0.15 }}
        >
          2022
        </div>
      }
    >
      <div className="relative pl-[8vw] md:pl-[10vw] pr-4">
        <motion.h2
          className="font-display text-anton-80 leading-[0.9] text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          WHERE IT
          <br />
          STARTS.
        </motion.h2>

        <motion.p
          className="mt-16 max-w-[620px] font-body text-[15px] leading-[1.7] text-black/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          Warehouse Porter. Jose Collado S.A. Summer 2022. Manual work. Bottling, moving boxes,
          cleaning factory floors. The last summer before everything started moving.
        </motion.p>

        <motion.p
          className="mt-[22vh] text-center font-body text-[12px] tracking-[0.04em] text-black/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 1.4, delay: 0.6 }}
        >
          Every floor was necessary.
        </motion.p>
      </div>
    </StageContainer>
  );
};

export default Stage0_Origin;
