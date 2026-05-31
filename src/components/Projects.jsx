import { ExternalLink } from "lucide-react";
import { IconGitHub } from "./BrandIcons";
import { projects } from "../data/portfolio";
import SectionReveal from "./SectionReveal";
import "./Projects.css";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section className="section" id="projects">
      <SectionReveal>
        <p className="section-label">Projects</p>
        <h2 className="section-title">
          Selected <span>work</span>
        </h2>
      </SectionReveal>

      <div className="projects__featured">
        {featured.map((project) => (
          <SectionReveal key={project.title}>
            <article
              className={`projects__card card ${project.featured ? "projects__card--featured" : ""}`}
            >
              <div className="projects__card-top">
                <div>
                  <h3>{project.title}</h3>
                  <p className="projects__subtitle">{project.subtitle}</p>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <IconGitHub size={20} />
                  </a>
                )}
              </div>
              <p className="projects__desc">{project.description}</p>
              <div className="projects__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>

      {other.length > 0 && (
        <>
          <SectionReveal>
            <h3 className="projects__more-title">More Projects</h3>
          </SectionReveal>
          <div className="projects__grid">
            {other.map((project) => (
              <SectionReveal key={project.title}>
                <article className="projects__card card projects__card--compact">
                  <div className="projects__card-top">
                    <h3>{project.title}</h3>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__link"
                      >
                        <ExternalLink size={18} />
                      </a>
                    ) : null}
                  </div>
                  <p className="projects__desc">{project.description}</p>
                  <div className="projects__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
