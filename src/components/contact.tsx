import { motion } from "framer-motion";
import { useState } from "react";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  return (
    <SectionWrapper idName="Contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Con<span className="text-purple-500">tact.</span></h3>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-12 flex flex-col gap-8"
          >
            {/* Hidden API Key */}
            <input
              type="hidden"
              name="access_key"
              value="afa34b53-8a24-486b-afd0-9c124ac6dad0"
            />

            {/* Name */}
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name*</span>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Tharun"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            {/* Email */}
            <label htmlFor="email" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email*</span>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="tharun@email.com"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            {/* Phone */}
            <label htmlFor="phone" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Phone*</span>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                placeholder="9876543210"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            {/* Message */}
            <label htmlFor="message" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message*</span>
              <textarea
                rows={7}
                name="message"
                id="message"
                required
                placeholder="Hello there!"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            {/* Submit */}
           <button
  type="submit"
  disabled={loading}
  className="button-rgb"
>
  <span>{loading ? "Sending..." : "Send"}</span>
</button>


          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
