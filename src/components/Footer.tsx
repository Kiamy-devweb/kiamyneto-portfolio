
import { Camera, Code2, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <a href="#home" className="footer-logo">
            KIAMY<span>.</span>
          </a>

          <p>
            Building digital experiences.
            <br />
            Creating with purpose.
          </p>

          <div className="footer-socials">
            <a
              href="https://instagram.com/eukiamyneto"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Camera size={19} />
            </a>

            <a
              href="https://github.com/Kiamy-devweb"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={19} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} Kiamy Neto. All rights reserved.
          </span>

          <a href="#home" className="back-to-top">
            Back to top
            <ArrowUp size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}
