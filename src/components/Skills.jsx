import { skillGroups } from "../data/portfolio";
import SectionReveal from "./SectionReveal";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionReveal>
        <p className="section-label">Skills</p>
        <h2 className="section-title">
          Tech <span>stack</span>
        </h2>
      </SectionReveal>

      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <SectionReveal key={group.title} className="skills__card card">
            <span className="skills__index">0{i + 1}</span>
            <h3>{group.title}</h3>
            <div className="skills__tags">
              {group.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
