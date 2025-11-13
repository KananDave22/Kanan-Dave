import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { animate, motion } from "framer-motion";
import { SiMysql } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';

const iconVariants = (duration) => ({
  initial: { y: -10 }, // Fixed syntax error
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const icons = [
    { component: FaHtml5, color: "text-orange-500" },
    { component: FaCss3Alt, color: "text-blue-500" },
    { component: FaJs, color: "text-yellow-400" },
    { component: RiReactjsLine, color: "text-cyan-400" },
    { component: SiTailwindcss, color: "text-teal-500" },
    { component: BsBootstrap, color: "text-purple-600" },
    { component: FaNodeJs, color: "text-green-500" },
    { component: FaJava, color: "text-red-600" },
    { component: FaPython, color: "text-blue-400" },
    { component: SiCplusplus, color: "text-blue-600" },
    { component: FaGithub, color: "text-gray-100"},
    {component: SiMysql, color: "text-blue-800"},
    {component: SiPostgresql, color: "text-blue-700"},
    {component: SiMongodb, color: "text-green-600"},
    { component: SiFigma, color: "text-pink-500" },
    { component: SiWordpress, color: "text-blue-600" }, 
  ];

  return (
    <div className="border-b border-neutral-700 pb-24">
      <h2 className="my-10 text-4xl text-center">Technologies</h2>
      <motion.div className="flex flex-wrap items-center justify-center gap-4" variants={iconVariants(2.5)} initial="initial" animate="animate">
          {icons.map(({ component: Icon, color }, index) => (
            <div
              key={index}
              className="rounded-2xl border-4 border-neutral-800 p-3"
            >
              <Icon className={`text-7xl ${color}`} />
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
