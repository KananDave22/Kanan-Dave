import React from "react";
import { HERO_CONTENT } from "../assets/constants";
import hero_image from "../assets/KananPicture.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-700 pb-4 lg:mb-15">
      <div className="flex flex-wrap">
        {/* Text and Name Container */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-6xl font-thin tracking-tigh lg:mt-12 lg:text-6xl"
            >Kanan Dave
            </motion.h1>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl font-light tracking-normal text-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image Container */}
        <div className="pt-7 w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{x:100, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1, delay:1}}
              className=" w-90 h-90 rounded-2xl"
              src={hero_image}
              alt="Kanan_Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
