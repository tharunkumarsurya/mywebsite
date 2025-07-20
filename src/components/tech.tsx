import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";





// Technologies
export const Tech = () => {
  return (
    <SectionWrapper idName="My">

       <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I Know</p>
          <h2 className={styles.sectionHeadText}>My<span className="text-purple-500"> Skills.</span></h2>
        </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
