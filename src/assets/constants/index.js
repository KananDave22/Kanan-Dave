import project1 from "../Project-1.png"
import project2 from "../Project-2.png"
import project3 from "../Project-3.png"
import nirma from "../NirmaLogo.jpg"
import windsor from "../windsorlogo.png"

export const HERO_CONTENT = `Full Stack Developer with a Master’s in Electrical and Computer Engineering. Adept at building scalable web applications and experienced in front-end development, UI/UX design, and integrating user insights for enhanced engagement. Proficient in Agile environments, delivering accessible and responsive interfaces. Passionate about solving complex problems and continuously learning new technologies.`;

export const ABOUT_CONTENT = `As a Full Stack Developer with a Master’s in Electrical and Computer Engineering, I bring a unique blend of technical expertise and creative design skills to the table. My professional journey has spanned crafting seamless user interfaces, building responsive and accessible web solutions, and enhancing user engagement through data-driven design insights. 

During my career, I’ve honed my skills in React, JavaScript, and CSS while collaborating in Agile environments to deliver high-quality, scalable applications. My experience includes developing dynamic front-end components, optimizing UI/UX designs, and ensuring accessibility compliance with scores exceeding 90%.

I thrive in team-oriented settings, where I contribute to solving complex challenges and improving user satisfaction. With a passion for learning new technologies and a commitment to delivering excellence, I am eager to create meaningful, cutting-edge digital experiences.
`;

export const EXPERIENCES = [
    {
      year: "Sep 2024 - Dec 2024",
      role: "Full Stack Developer Intern",
      company: "Vosyn",
      description: `• Designed and implemented highly responsive single-page applications (SPAs) using React.js and MUI, adhering to best practices.
        • Built reusable components and optimized the application for scalability and maintainability.
        • Implemented event-driven architecture in collaboration with back-end and cloud teams ensuring seamless data flow and integration.
        • Leveraged tools like npm, Web-pack, and Git for dependency management, build, and version control.
        • Participated in Agile ceremonies (daily stand-ups, sprint planning, retrospectives), following the Software Development Life Cycle (SDLC).
        • Optimized application performance through techniques such as code splitting, lazy loading, and resulting in improved page load times and user experience.`,
      technologies: ["React.js", "JavaScript", "Redux", "API", "GIT Version Control", "Tailwind CSS", "HTML", "Notion"],
    },
    {
        year: "Jun 2024 - Sep 2024",
        role: "AI Web Designer UI/UX Intern",
        company: "Vosyn",
        description: `• Developed and deployed dynamic web content with CMS platforms like WordPress and Webflow, collaborating with interdisciplinary teams to design user-friendly, WCAG 2.0-compliant interfaces, resulting in a 30% improvement in user experience using Figma.
        • Utilized Google Analytics to monitor website traffic and gather insights on user behavior, supporting data-driven improvements to enhance engagement and functionality.
        \n• Analyzed user behavior and integrated insights into design projects, increasing engagement and satisfaction by 20%; achieved KPI metrics to secure an accessibility score of 90% or greater.
        \n• Applied JavaScript DOM manipulation to resolve UI/UX discrepancies during testing, reducing reported bugs by 25%.`,
        technologies: ["WordPress", "Figma", "DOM Manipulation", "JavaScript", "CSS", "Tailwind CSS", "HTML"],
      },

      {
        year: "Jan 2022 - May 2022",
        role: "Full Stack Developer Intern",
        company: "Indian Navy - INS Valsura",
        description: `• Coordinated the design of a unique offline location-tracking system using ESP8266, IMU, GPRS, and GPS modules, achieving an 80% accuracy in position determination and reducing location errors by 15%, while ensuring data accuracy and reliability.
        • Engineered a self-sufficient mapping solution, cutting internet-based dependence and assuring effective functionality, leveraging data aggregation techniques to achieve a 20% increase in operational efficiency.
        • Developed a database to aggregate and analyze location data, enhancing precision, improving data-driven decision-making, and boosting situational awareness by 25%.`,
        technologies: ["Embedded C", "Python", "MYSQL", "JavaScript", "Django", "CSS", "HTML"],
      },
      {
        year: "Jun 2021 - Aug 2021",
        role: "Python Development Intern",
        company: "EWARN Systems",
        description: `• Designed a real-time signal control system and utilized data pipelines to optimize traffic flow, reducing congestion by 25% and average wait times by 15%.
        • Extracted and analyzed critical parameters from traffic datasets, enabling adaptive, data-driven signal optimization, and improving overall efficiency.`,
        technologies: ["Python"],
      },
]

export const PROJECTS = [
  {
    title: "Keeper App",
    image: project1,
    description: `• Developed "Keeper App", a dynamic task management application using React.js, HTML, CSS, and JavaScript, focusing on core features such as task creation, editing, and deletion.
    
    • Implemented React state and props for efficient data management within Keeper App, ensuring responsive design and cross-browser compatibility through modern web development techniques.`,
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "BootStrap"],
  }, 
  {
    title: "Portfolio Website",
    image: project2,
    description: `Developed a webpage from concept to launch, designing wire frames and interactive prototypes in Figma, then building a fully functional and responsive site using front-end technologies including JavaScript.
    • Engineered a website showcasing professional details focusing on cross-device compatibility and optimal user experience, leveraging JavaScript for enhanced interactivity.`,
    technologies: ["JavaScript", "HTML", "css", "BootStrap"],
  }, 

  {
    title: "HR Analytics Dashboard",
    image: project3,
    description: `• Designed a Power BI dashboard to visualize and analyze performance data, tracking trends and performance metrics.
    • Utilized Power Query for data cleaning and transformation, ensuring data accuracy and consistency.
    • Created dynamic visualizations with slicers and filters to enable interactive data exploration for stakeholders.`,
    technologies : ["Power BI", "Power Query", "Microsoft Excel"],
  }
]

export const EDUCATIONS = [
  {
    uniName: "University of Windsor",
    degree: "Master in Electrical and Computer Engineering",
    image: windsor,
    duration: "Jan 2023 - Apr 2023",
    recognition: "M.Eng Honour Roll "
  },
  {
    uniName: "Nirma University",
    degree: "Bachelor in Electronics and Communication Engineering",
    image: nirma,
    duration: "Jun 2018 - May 2022"
  },
]