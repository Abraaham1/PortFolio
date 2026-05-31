import { goals, profile } from "../data/portfolio";
import SectionReveal from "./SectionReveal";
import "./About.css";

export default function About() {
  return (
    <section className="section" id="about">
      <SectionReveal>
        <p className="section-label">About</p>
        <h2 className="section-title">
          Who I <span>am</span>
        </h2>
      </SectionReveal>

      <div className="about__grid">
        <SectionReveal className="about__text card">
          <p>{profile}</p>
        </SectionReveal>

        <SectionReveal className="about__goals card">
          <h3>Current Goals</h3>
          <ul>
            {goals.map((goal) => (
              <li key={goal}>
                <span className="about__goal-marker" />
                {goal}
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
