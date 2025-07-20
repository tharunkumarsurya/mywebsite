import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import { SOCIALS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Footer
const Footer = () => {
  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-8 bg-primary border-t border-t-secondary/5"
      )}
    >
      <div className="w-full flex flex-col justify-center items-center gap-4 max-w-7xl mx-auto">
        <p className="text-white text-md font-bold text-center">
          &copy; Tharun {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="text-purple-500 text-lg font-bold text-center">
          <Typewriter
            words={["Connect With Me :)"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </p>

        {/* Nav Links (Social Icons) */}
        <ul className="list-none flex gap-6">
          {SOCIALS.map((social) => (
            <li
              key={social.name}
              className="text-secondary font-poppins font-medium cursor-pointer text-[16px] opacity-100 hover:opacity-40 transition"
            >
              <Link to={social.link} target="_blank" rel="noreferrer noopener">
                <img src={social.icon} alt={social.name} className="h-6 w-6" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
