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


import React from "react";
import { HERO_CONTENT, ABOUT_CONTENT } from "../assets/constants";
import hero_image from "../assets/KananPicture.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay } },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-700 pb-12 lg:mb-20">
      <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center lg:justify-between max-w-6xl mx-auto px-6 gap-10">
        
        {/* Image Section */}
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-48 h-48 lg:w-75 lg:h-75 rounded-full shadow-lg border-4 border-neutral-300 object-cover"
          src={hero_image}
          alt="Kanan Dave"
        />

        {/* Text Section */}
        <div className="flex-1">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Kanan Dave
          </motion.h1>

          {/* Hero Content */}
          <motion.p
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="text-lg lg:text-xl font-light text-indigo-400 leading-relaxed mb-4"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* About Content (smaller font size) */}
          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="text-sm lg:text-base font-light text-neutral-100 leading-relaxed"
          >
            {ABOUT_CONTENT}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;