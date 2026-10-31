import { ExternalLink } from "lucide-react";
import { research } from "../data/portfolio";
import SectionReveal from "./SectionReveal";
import "./Research.css";

export default function Research() {
  return (
    <section className="section" id="research">
      <SectionReveal>
        <p className="section-label">Research</p>
        <h2 className="section-title">
          Papers &amp; <span>studies</span>
        </h2>
      </SectionReveal>

      <div className="research__list">
        {research.map((item) => (
          <SectionReveal key={item.title}>
            <article className="research__card card">
              <div className="research__header">
                <div>
                  <h3>{item.title}</h3>
                  <p className="research__venue">{item.venue}</p>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="research__link"
                    aria-label={`Open ${item.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <p className="research__desc">{item.description}</p>
              {item.doi && (
                <p className="research__doi">
                  DOI:{" "}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.doi}
                  </a>
                </p>
              )}
              <div className="research__tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
