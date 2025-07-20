import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { SOCIALS } from "../constants";

import { cn } from "../utils/lib";
import { Typewriter } from "react-simple-typewriter";

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 "
        )}
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] pb-30" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* About Me */}
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi, I'm <span className="text-[#915eff]">THARUN</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            <Typewriter
              words={[
                "I develop 3D visuals, user interfaces and web applications.",
                "I create creative, modern, responsive websites.",
                "I focus on UI, UX, and smooth performance.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2500}
            />
          </p>
          <br />
          <div className="relative z-10">
            <ul className="list-none flex gap-6">
              {SOCIALS.map((social) => (
                <li
                  key={social.name}
                  className="text-secondary font-poppins font-medium cursor-pointer text-[16px] opacity-100 hover:opacity-40 transition"
                >
                  <Link
                    to={social.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cursor-pointer"
                  >
                    <img src={social.icon} alt={social.name} className="h-6 w-6" />
                  </Link>
                </li>
              ))}
            </ul>
            <br />
            

            <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="animated-border"
  style={{ padding: "10px 20px", color: "#fff", textDecoration: "none" }}
>
  Resume
</a>
          </div>
        </div>
      </div>
      <br />
      <br />

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center pb-8">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
