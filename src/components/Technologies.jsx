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
import { motion } from "framer-motion";
import { SiMysql } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';

const Technologies = () => {
  const icons = [
    { component: FaHtml5, name: "HTML5", color: "#d56b45" },
    { component: FaCss3Alt, name: "CSS3", color: "#567eaa" },
    { component: FaJs, name: "JavaScript", color: "#b89037" },
    { component: RiReactjsLine, name: "React", color: "#4d9bad" },
    { component: SiTailwindcss, name: "Tailwind", color: "#4b9b9b" },
    { component: BsBootstrap, name: "Bootstrap", color: "#796694" },
    { component: FaNodeJs, name: "Node.js", color: "#64845b" },
    { component: FaJava, name: "Java", color: "#b35d4c" },
    { component: FaPython, name: "Python", color: "#6383a1" },
    { component: SiCplusplus, name: "C++", color: "#567eaa" },
    { component: FaGithub, name: "GitHub", color: "#686967" },
    { component: SiMysql, name: "MySQL", color: "#567eaa" },
    { component: SiPostgresql, name: "PostgreSQL", color: "#567eaa" },
    { component: SiMongodb, name: "MongoDB", color: "#64845b" },
    { component: SiFigma, name: "Figma", color: "#bd6c69" },
    { component: SiWordpress, name: "WordPress", color: "#567eaa" },
  ];

  return (
    <section className="section skills-section" aria-labelledby="skills-title">
      <div className="section-heading compact-heading">
        <p className="eyebrow">A considered toolkit</p>
        <h2 id="skills-title">Tools of the trade</h2>
      </div>
      <motion.div className="skills-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.035 } } }}>
          {icons.map(({ component: Icon, color, name }) => (
            <motion.div key={name} className="skill-item" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
              <Icon style={{ color }} aria-hidden="true" />
              <span>{name}</span>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
