// import React from "react";
// import { HERO_CONTENT, ABOUT_CONTENT } from "../assets/constants";
// import hero_image from "../assets/KananPicture.png";
// import { motion } from "framer-motion";

// const container = (delay) => ({
//   hidden: { y: 30, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay } },
// });

// const Hero = () => {
//   return (
//     <section className="border-b border-neutral-700 pb-4 lg:mb-15">
//       <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center lg:justify-center max-w-6xl mx-auto px-6 gap-12">
        
//         {/* Image Section */}
//         <motion.img
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-lg border-4 border-neutral-300 object-cover"
//           src={hero_image}
//           alt="Kanan Dave"
//         />

//         {/* Text Section */}
//         <div className="max-w-xl">
//           <motion.h1
//             variants={container(0)}
//             initial="hidden"
//             animate="visible"
//             className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
//           >
//             Kanan Dave
//           </motion.h1>
//           <motion.p
//             variants={container(0.3)}
//             initial="hidden"
//             animate="visible"
//             className="text-lg lg:text-xl font-light text-neutral-600 leading-relaxed"
//           >
//             {HERO_CONTENT}
//             {ABOUT_CONTENT}
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { HERO_CONTENT, ABOUT_CONTENT } from "../assets/constants";
import hero_image from "../assets/KananPicture.png";
import { motion, useReducedMotion } from "framer-motion";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const aboutParagraphs = ABOUT_CONTENT
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph && !paragraph.includes("React · Angular"));

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-overline">
        <span>Portfolio <b>·</b> 2026</span>
        <span>Ontario, Canada <i> / </i> Available for opportunities</span>
      </div>
      <div className="hero-layout">
        <motion.div
          className="hero-copy"
          initial={shouldReduceMotion ? false : { opacity: 1, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow"><span className="status-dot" /> A developer with a design eye</p>
          <h1 id="hero-title"><span>Build with</span><em>intention.</em></h1>
          <p className="hero-role">{HERO_CONTENT}</p>
          <div className="hero-intro">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
          </div>
        </motion.div>
        <motion.figure
          className="hero-portrait-wrap"
          initial={shouldReduceMotion ? false : { x: 18, scale: 0.98 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-accent" aria-hidden="true">01 <span>/</span> 04</div>
          <div className="hero-image-frame">
            <img className="hero-portrait" src={hero_image} alt="Kanan Dave" />
          </div>
          <figcaption className="portrait-caption"><span>Curiosity, made useful</span><span>Developer · Designer</span></figcaption>
        </motion.figure>
      </div>
      <div className="hero-bottomline"><span>Full-stack development</span><a href="#skills-title"><span className="scroll-line" /> Scroll to explore</a></div>
    </section>
  );
};

export default Hero;