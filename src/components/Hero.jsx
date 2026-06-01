import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { IconGitHub, IconLinkedIn } from "./BrandIcons";
import { personal } from "../data/portfolio";
import "./Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const [firstName = personal.name, lastName = "Iqbal"] = personal.fullName.split(" ");

  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <motion.div
          className="hero__badge"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <svg
            className="hero__badge-outline"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="heroBadgeStroke"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <rect
              className="hero__badge-outline-track"
              x="1"
              y="1"
              width="100%"
              height="100%"
              rx="17"
              ry="17"
            />
            <rect
              className="hero__badge-outline-path"
              x="1"
              y="1"
              width="100%"
              height="100%"
              rx="17"
              ry="17"
              pathLength="100"
            />
          </svg>
          <span className="hero__badge-label">Available for opportunities</span>
        </motion.div>

        <motion.h1
          className="hero__title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hi, I&apos;m <span className="hero__name">{firstName}</span>
          <br />
          <span className="hero__name hero__name--block">{lastName}</span>
        </motion.h1>

        <motion.p
          className="hero__role"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {personal.roles.map((role, i) => (
            <span key={role}>
              {i > 0 && <span className="hero__dot">·</span>}
              {role}
            </span>
          ))}
        </motion.p>

        <motion.p
          className="hero__tagline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          className="hero__meta"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <span>
            <MapPin size={16} />
            {personal.location}
          </span>
          <span>CS @ Punjab University · CGPA {personal.cgpa}</span>
        </motion.div>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a
            href={personal.cvUrl}
            download={personal.cvFileName}
            className="btn btn-outline"
          >
            <Download size={18} />
            Download CV
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          className="hero__social"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IconGitHub size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IconLinkedIn size={20} />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero__visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero__avatar-ring">
          <div className="hero__avatar-glow" />
          <img
            src={personal.avatar}
            alt={personal.fullName}
            className="hero__avatar"
          />
        </div>
        <div className="hero__orbit hero__orbit--1" />
        <div className="hero__orbit hero__orbit--2" />
      </motion.div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
