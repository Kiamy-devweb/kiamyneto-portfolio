
import { ArrowDown, Code, Camera } from "lucide-react";
import profile from "../assets/kiamy-profile.jpeg";

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <span className="hero-tag">
          <span className="status-dot"></span>
          JUNIOR FULL-STACK DEVELOPER
        </span>

        <h1>
          KIAMY <span>NETO.</span>
        </h1>

        <h2>
          Building digital experiences.
          <br />
          Creating with purpose.
        </h2>

        <p className="hero-description">
          Passionate about technology, creative development
          and building meaningful digital solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Explore my work <ArrowDown size={18} />
          </a>

          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/Kiamy-devweb"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code size={20} />
          </a>

          <a
            href="https://instagram.com/eukiamyneto"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Camera size={20} />
          </a>
        </div>

      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-frame">
          <img src={profile} alt="Kiamy Neto" />
        </div>

        <span className="hero-image-caption">
          PORTFOLIO / 2026
        </span>
      </div>
    </section>
  );
}
