import { EXPERIENCES } from "../assets/constants";

const Experience = () => {
  return (
    <section className="section content-section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="eyebrow">The path so far</p>
        <h2 id="experience-title">Experience</h2>
        <p className="section-intro">A few roles and teams that have shaped the way I build.</p>
      </div>
      <div className="experience-list">
        {EXPERIENCES.map((experience, index) => (
          <article className="experience-item" key={`${experience.company}-${experience.year}`}>
            <p className="experience-date">{experience.year}</p>
            <div className="experience-details">
              <p className="item-index">0{index + 1}</p>
              <h3>{experience.role}</h3>
              <p className="item-company">{experience.company}</p>
              <ul className="detail-list">
                {experience.description.split("•").map((item, itemIndex) => item.trim() ? <li key={itemIndex}>{item.trim()}</li> : null)}
              </ul>
              <div className="tag-list">
                {experience.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
