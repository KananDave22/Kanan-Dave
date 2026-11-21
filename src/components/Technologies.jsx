import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, FaPython, FaGithub, FaMicrosoft, FaCode, FaGitAlt } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import {
  SiCplusplus,
  SiTailwindcss,
  SiFigma,
  SiWordpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiAngular,
  SiExpress,
  SiDotnet,
  SiDocker,
  SiPostman,
  SiJira,
  SiNpm,
} from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  const categories = [
    {
      title: "Front-End Tools",
      icons: [
        { component: FaHtml5, name: "HTML5", color: "#d56b45" },
        { component: FaCss3Alt, name: "CSS3", color: "#567eaa" },
        { component: FaJs, name: "JavaScript", color: "#b89037" },
        { component: SiTypescript, name: "TypeScript", color: "#567eaa" },
        { component: RiReactjsLine, name: "React", color: "#4d9bad" },
        { component: SiAngular, name: "Angular", color: "#c75c50" },
        { component: SiTailwindcss, name: "Tailwind CSS", color: "#4b9b9b" },
        { component: BsBootstrap, name: "Bootstrap", color: "#796694" },
      ],
    },
    {
      title: "Back-End Tools",
      icons: [
        { component: FaNodeJs, name: "Node.js", color: "#64845b" },
        { component: SiExpress, name: "Express.js", color: "#a0a0a0" },
        { component: FaCode, name: "C#", color: "#796694" },
        { component: SiDotnet, name: ".NET", color: "#6a64b7" },
        { component: FaJava, name: "Java", color: "#b35d4c" },
        { component: FaPython, name: "Python", color: "#6383a1" },
        { component: SiCplusplus, name: "C++", color: "#567eaa" },
        { component: FaCode, name: "REST APIs", color: "#b89037" },
      ],
    },
    {
      title: "Databases & Cloud",
      icons: [
        { component: SiMongodb, name: "MongoDB", color: "#64845b" },
        { component: SiPostgresql, name: "PostgreSQL", color: "#567eaa" },
        { component: SiMysql, name: "MySQL", color: "#567eaa" },
        { component: FaMicrosoft, name: "Azure", color: "#4d83b3" },
        { component: FaMicrosoft, name: "Blob Storage", color: "#4d83b3" },
      ],
    },
    {
      title: "Collaboration & Tools",
      icons: [
        { component: FaGitAlt, name: "Git", color: "#c66d50" },
        { component: FaGithub, name: "GitHub", color: "#686967" },
        { component: FaMicrosoft, name: "Azure DevOps", color: "#567eaa" },
        { component: SiDocker, name: "Docker", color: "#4d83b3" },
        { component: SiPostman, name: "Postman", color: "#d56b45" },
        { component: SiJira, name: "Jira", color: "#567eaa" },
        { component: SiFigma, name: "Figma", color: "#bd6c69" },
        { component: SiWordpress, name: "WordPress", color: "#567eaa" },
        { component: SiNpm, name: "npm", color: "#c75c50" },
      ],
    },
  ];

  return (
    <section className="section skills-section" aria-labelledby="skills-title">
      <div className="section-heading compact-heading">
        <p className="eyebrow">A considered toolkit</p>
        <h2 id="skills-title">Tools of the trade</h2>
      </div>
      <div className="toolkit-grid">
        {categories.map((category) => (
          <motion.div
            className="skills-category"
            key={category.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.icons.map(({ component: Icon, color, name }) => (
                <div key={name} className="skill-item" title={name}>
                  <Icon style={{ color }} aria-hidden="true" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
