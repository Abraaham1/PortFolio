import { personal } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {year} {personal.fullName}. Built with React & Vite.
        </p>
        <p className="footer__tagline">
          Python · Automation · Backend · AI/ML
        </p>
      </div>
    </footer>
  );
}
