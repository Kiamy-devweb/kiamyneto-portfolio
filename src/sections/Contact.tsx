
import {
  Mail,
  Camera,
  Code2,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span className="section-label">
            04 / GET IN TOUCH
          </span>

          <h2>
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            I'm always open to discussing new projects,
            creative ideas and opportunities to collaborate.
            Let's create something meaningful together.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-message">
            <span className="contact-small-label">
              LET'S WORK TOGETHER
            </span>

            <h3>
              Let's turn your
              <br />
              ideas into reality.
            </h3>

            <a
              href="mailto:kiamy.webdev@gmail.com"
              className="contact-email-button"
            >
              <Mail size={19} />
              Send me an email
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-links">

            <a
              href="mailto:kiamy.webdev@gmail.com"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <Mail size={20} />
              </div>

              <div>
                <span>Email</span>
                <p>kiamy.webdev@gmail.com</p>
              </div>

              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://instagram.com/eukiamyneto"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <Camera size={20} />
              </div>

              <div>
                <span>Instagram</span>
                <p>@eukiamyneto</p>
              </div>

              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://github.com/Kiamy-devweb"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <Code2 size={20} />
              </div>

              <div>
                <span>GitHub</span>
                <p>Kiamy-devweb</p>
              </div>

              <ArrowUpRight size={18} />
            </a>

          </div>
        </div>

        <div className="contact-footer">
          <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
          <div className="contact-status">
            <span></span>
            Open to opportunities
          </div>
        </div>

      </div>
    </section>
  );
}
