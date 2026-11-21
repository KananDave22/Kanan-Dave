import project1 from "../Project-1.png"
import project2 from "../Project-2.png"
import project3 from "../Project-3.jpg"
import nirma from "../NirmaLogo.jpg"
import windsor from "../windsorlogo.png"

export const HERO_CONTENT = `Full Stack Developer | Driven by curiosity and a love for learning`;

export const ABOUT_CONTENT = `Full-Stack Developer | React · Angular · Node.js

I'm a Full-Stack Developer with a Master of Engineering in Electrical & Computer Engineering from the University of Windsor. I started in embedded systems, then moved into web development because I wanted to see people use what I built, right away, in a browser.

Today I work across the whole stack: React, Angular and Tailwind CSS on the front end, and Node.js, Express and databases like MongoDB and PostgreSQL on the back end. At Reknowledge, I build features end to end, from bulk file uploads with Azure Blob Storage to React interfaces that help modernize a legacy C#/.NET codebase. I also work with REST APIs, CI/CD pipelines in Azure DevOps, and code reviews. Earlier, at Vosyn, I focused on performance, accessibility and reusable UI components.

I care about clean code, but I care more about whether it works for the person using it. I work best in collaborative Agile teams, and I'm always learning something new.

I'm open to new opportunities. If you're building something worth building, let's talk.
`;

export const EXPERIENCES = [
    {
      year: "April 2026 - Present",
      role: "Junior Software Developer",
      company: "Reknowledge Inc",
      description: `• Built and shipped end-to-end features on a MERN stack application, including a bulk file-upload system integrated with Azure Blob Storage, handling data flow from the React front end through Node/Express APIs to MongoDB.
      • Developed React.js and Tailwind CSS interfaces for a legacy C#/.NET codebase undergoing active modernization, working across both legacy and new frontend layers to maintain feature parity during migration.
      • Utilized Azure DevOps to manage CI/CD workflows, monitor and trigger build pipelines, validate deployments, and ensure reliable delivery of application updates across development environments.
      • Conducted code reviews across both React and legacy codebases, maintaining code quality and consistency during the migration period.
      • Collaborated cross-functionally in daily Agile ceremonies (standups, sprint planning, retrospectives), coordinating feature work across MERN and legacy systems.
    `,
      technologies: ["React.js", "Node.js", "Express.js", "JavaScript", "TypeScript", "C#", ".NET", "Azure Blob Storage", "Azure DevOps Services", "CI/CD Pipelines", "REST APIs", "Tailwind CSS", "HTML", "Git", "Agile", "Microsoft Office"],
    },
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