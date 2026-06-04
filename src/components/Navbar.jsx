import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personal, navLinks } from "../data/portfolio";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner">
        <a
          href="#"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {personal.name}
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button type="button" onClick={() => scrollTo(link.id)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary navbar__cta"
        >
          Let&apos;s Connect
        </a>

        <button
          type="button"
          className="navbar__menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Let&apos;s Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
