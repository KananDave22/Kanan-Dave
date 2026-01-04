import project1 from "../Project-1.png"
import project2 from "../Project-2.png"
import project3 from "../Project-3.jpg"
import nirma from "../NirmaLogo.jpg"
import windsor from "../windsorlogo.png"

export const HERO_CONTENT = `Full Stack Developer | Driven by Curosity and a love for learning`;

export const ABOUT_CONTENT = `Full Stack Developer with 1.5 years of experience and a Master’s in Electrical and Computer Engineering. Skilled in React, JavaScript, CSS, HTML, Node.js, Express, and MongoDB, I specialize in Front-End development, building responsive, accessible, and high-performing web applications. Passionate about full-stack development, front-end development, web development and UI/UX design, I thrive in Agile, collaborative environments and enjoy creating meaningful, cutting-edge digital experiences..
`;

export const EXPERIENCES = [

    {
      year: "Aug 2025 - Sep 2025",
      role: "UI Developer Intern",
      company: "Quantum Edge Consulting",
      description: `• Enhanced user experience by reducing navigation latency by 30% through the development and optimization of app navigation and routing flows in FlutterFlow. 
      • Improved app usability and responsiveness by 25% by implementing dynamic UI logic & interactive screen transitions.
      • Achieved smooth data synchronization across the app by collaborating with backend engineers to integrate APIs.
      • Contributed to the design and front-end development of major app modules, including SoulMatch, Karma System, and Emotional Simulation, resulting in a 20% increase in user engagement.
`,
      technologies: ["FlutterFlow", "Firebase", "API", "GIT Version Control", "Tailwind CSS", "HTML", "JavaScript", "Microsoft Office"],
    },
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
    title: "News Aggregator Web Application",
    image: project3,
    description: `• Developed a dynamic news aggregator that fetches real-time articles from multiple APIs, utilizing JavaScript, HTML, and CSS to create an interactive and user-friendly experience with client-side filtering and asynchronous data handling.
    • Enhanced usability and engagement by implementing features such as category selection, search functionality, and efficient state management, ensuring smooth performance across both desktop and mobile devices.`,
    technologies : ["React.js", "JavaScript", "TailwindCSS", "HTML", "Restful API"],
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