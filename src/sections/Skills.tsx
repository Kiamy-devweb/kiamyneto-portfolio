
import {
  Code2,
  Server,
  Database,
  Wrench,
  GitBranch,
  Globe,
  Layers,
  Terminal,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building modern and responsive user interfaces.",
    icon: Code2,
    skills: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "TypeScript", level: "Learning" },
      { name: "Vite", level: "Intermediate" },
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Creating application logic and server-side solutions.",
    icon: Server,
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "C", level: "Learning" },
    ],
  },
  {
    number: "03",
    title: "Database",
    description: "Managing and structuring application data.",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "MariaDB", level: "Intermediate" },
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "Tools I use to build, manage and improve projects.",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "npm", level: "Intermediate" },
    ],
  },
];

const additionalSkills = [
  { name: "Responsive Design", icon: Globe },
  { name: "REST APIs", icon: Terminal },
  { name: "Component Architecture", icon: Layers },
  { name: "Version Control", icon: GitBranch },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span className="section-label">02 / MY EXPERTISE</span>

          <h2>
            Technologies I use.
            <br />
            <span>Things I build.</span>
          </h2>

          <p>
            A growing set of technologies and tools I use to
            transform ideas into functional digital experiences.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="skill-card" key={group.number}>
                <div className="skill-card-top">
                  <span className="skill-number">{group.number}</span>
                  <Icon size={23} />
                </div>

                <h3>{group.title}</h3>
                <p>{group.description}</p>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <span>{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="additional-skills">
          <span className="section-label">BEYOND THE CODE</span>

          <div className="additional-skills-list">
            {additionalSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div className="additional-skill" key={skill.name}>
                  <Icon size={17} />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
