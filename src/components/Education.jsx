import { EDUCATIONS } from "../assets/constants";

const Education = () => {
  return (
    <section className="section content-section" id="education" aria-labelledby="education-title">
      <div className="section-heading">
        <p className="eyebrow">The foundations</p>
        <h2 id="education-title">Education</h2>
      </div>
      <div className="education-list">
        {EDUCATIONS.map((education, index) => (
          <article className="education-item" key={education.uniName}>
            <span className="item-index">0{index + 1}</span>
            <img src={education.image} alt={`${education.uniName} logo`} />
            <div>
              <h3>{education.uniName}</h3>
              <p>{education.degree}</p>
              <span className="education-duration">{education.duration}{education.recognition ? ` · ${education.recognition.trim()}` : ""}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;

