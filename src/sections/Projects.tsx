
import { useState } from "react";
import {
  Code2,
  ArrowUpRight,
  FolderCode,
} from "lucide-react";

// =====================================
// ADICIONA NOVOS PROJETOS NESTA LISTA
// =====================================


const projects = [
  {
    id: 1,
    title: "NÓS ❤️",
    category: "Full Stack Development",
    description:
      "A private digital space for couples, featuring real-time messaging, memories, shared goals and personal experiences.",
    technologies: ["React", "Node.js", "MySQL", "Socket.IO"],
    image: "",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 2,
    title: "KigoVex",
    category: "Web Development",
    description:
      "An international technology brand focused on digital products, software and innovative solutions.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    image: "",
    github: "",
    demo: "",
    featured: false,
  },
  {
  id: 3,
  title: "NetoStore",
  category: "Full Stack Development",
  description:
    "A full-stack e-commerce platform developed with PHP and MySQL, featuring customer accounts, shopping cart, simulated checkout, order history, and a complete administration dashboard.",
  technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  image: "",
  github: "",
  demo: "",
  featured: false,
},
];


export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(projects.map((project) => project.category))
    ),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <span className="section-label">
            03 / SELECTED WORK
          </span>

          <h2>
            Projects I've
            <br />
            <span>worked on.</span>
          </h2>

          <p>
            A collection of projects where ideas become functional
            digital experiences. Always building something new.
          </p>
        </div>

        <div className="projects-toolbar">
          <div className="projects-count">
            <FolderCode size={17} />
            <span>{filteredProjects.length} Projects</span>
          </div>

          <div className="projects-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={filter === category ? "active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <div className="project-placeholder">
                    <FolderCode size={42} />
                    <span>{project.title}</span>
                  </div>
                )}

                {project.featured && (
                  <span className="project-featured">
                    FEATURED
                  </span>
                )}
              </div>

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub ${project.title}`}
                    >
                      <Code2 size={18} />
                    </a>
                  )}

                  {project.id === 3 ? (
                  <a
                    className="project-details"
                    href="/projects/netostore"
                    aria-label="Explore NetoStore project"
                  >
                    Explore project
                    <ArrowUpRight size={16} />
                  </a>
                  
                  ) : (

                    <span className="project-details">
                    Explore project
                    <ArrowUpRight size={16} />
                  </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <span>MORE PROJECTS COMING SOON</span>
          <div></div>
        </div>

      </div>
    </section>
  );
}
