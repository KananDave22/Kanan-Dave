import { PROJECTS } from "../assets/constants";

const Projects = () => {
  return (
    <section className="section content-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-title">Projects</h2>
        <p className="section-intro">A selection of ideas brought to life through design and development.</p>
      </div>
      <div className="project-list">
        {PROJECTS.map((project, index) => (
          <article className={`project-item${index === 0 ? " project-featured" : ""}`} key={project.title}>
            <div className="project-image-wrap">
              <img src={project.image} alt={`${project.title} project preview`} />
              <span className="project-number">0{index + 1}</span>
            </div>
            <div className="project-copy">
              <p className="eyebrow">Featured project</p>
              <h3>{project.title}</h3>
              <ul className="detail-list">
                {project.description.split("•").map((item, itemIndex) => item.trim() ? <li key={itemIndex}>{item.trim()}</li> : null)}
              </ul>
              <div className="tag-list">
                {project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
