import { Mail, Phone, MapPin } from "lucide-react";
import { IconGitHub, IconLinkedIn } from "./BrandIcons";
import { personal } from "../data/portfolio";
import SectionReveal from "./SectionReveal";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <SectionReveal>
        <p className="section-label">Contact</p>
        <h2 className="section-title">
          Let&apos;s <span>connect</span>
        </h2>
      </SectionReveal>

      <SectionReveal>
        <div className="contact__wrapper card">
          <div className="contact__intro">
            <h3>Have a project in mind?</h3>
            <p>
              I&apos;m open to internships, freelance work, and collaboration on
              automation, backend, and AI projects. Reach out - I typically respond
              within 24 hours.
            </p>
          </div>

          <div className="contact__links">
            <a href={`mailto:${personal.email}`} className="contact__item">
              <Mail size={20} />
              <div>
                <span>Email</span>
                <strong>{personal.email}</strong>
              </div>
            </a>
            <a href={`tel:${personal.phone}`} className="contact__item">
              <Phone size={20} />
              <div>
                <span>Phone</span>
                <strong>{personal.phone}</strong>
              </div>
            </a>
            <div className="contact__item contact__item--static">
              <MapPin size={20} />
              <div>
                <span>Location</span>
                <strong>{personal.location}</strong>
              </div>
            </div>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__item"
            >
              <IconLinkedIn size={20} />
              <div>
                <span>LinkedIn</span>
                <strong>abdulrahman-iqbal01</strong>
              </div>
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__item"
            >
              <IconGitHub size={20} />
              <div>
                <span>GitHub</span>
                <strong>@{personal.githubUsername}</strong>
              </div>
            </a>
          </div>

          <a href={`mailto:${personal.email}`} className="btn btn-primary contact__cta">
            <Mail size={18} />
            Send an Email
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
