
import { Code2, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <span className="section-label">01 / ABOUT ME</span>
        <h2>
          More than code.
          <br />
          <span>Driven by purpose.</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm Kiamy Neto, a junior full-stack developer passionate
            about technology and creating digital experiences.
          </p>

          <p>
            I enjoy turning ideas into functional, modern and meaningful
            solutions. I work across frontend and backend development,
            always looking to learn, improve and build better experiences.
          </p>

          <p>
            For me, development is more than writing code — it's about
            solving problems, thinking creatively and creating something
            that makes a difference.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <Code2 size={24} />
            <h3>Development</h3>
            <p>Building modern web applications.</p>
          </div>

          <div className="about-card">
            <Lightbulb size={24} />
            <h3>Creativity</h3>
            <p>Turning ideas into digital experiences.</p>
          </div>

          <div className="about-card">
            <Rocket size={24} />
            <h3>Growth</h3>
            <p>Always learning and moving forward.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
