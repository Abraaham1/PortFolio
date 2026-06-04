import { experience } from "../data/portfolio";
import SectionReveal from "./SectionReveal";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionReveal>
        <p className="section-label">Experience</p>
        <h2 className="section-title">
          Where I&apos;ve <span>worked</span>
        </h2>
      </SectionReveal>

      <div className="experience__timeline">
        {experience.map((job, i) => (
          <SectionReveal key={job.company + job.role} className="experience__item">
            <article className="experience__card card">
              <div className="experience__header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="experience__company">{job.company}</p>
                </div>
                <div className="experience__badges">
                  <span className="tag">{job.type}</span>
                  <span className="experience__period">{job.period}</span>
                </div>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
