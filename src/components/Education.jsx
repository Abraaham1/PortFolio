import { education } from "../data/portfolio";
import SectionReveal from "./SectionReveal";
import "./Education.css";

export default function Education() {
  return (
    <section className="section" id="education">
      <SectionReveal>
        <p className="section-label">Education</p>
        <h2 className="section-title">
          Academic <span>background</span>
        </h2>
      </SectionReveal>

      <div className="education__list">
        {education.map((item) => (
          <SectionReveal key={item.degree}>
            <article
              className={`education__item card ${item.highlight ? "education__item--highlight" : ""}`}
            >
              <div className="education__content">
                <h3>{item.degree}</h3>
                <p className="education__school">{item.school}</p>
              </div>
              <div className="education__meta">
                {item.period && (
                  <span className="education__period">{item.period}</span>
                )}
                {item.detail && (
                  <span className="tag">{item.detail}</span>
                )}
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
