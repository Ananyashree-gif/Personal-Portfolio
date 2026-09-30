// Replace each "link" with your real GitHub repo or live demo URL later.
const projects = [
  {
    name: "SafeShift AI",
    description:
      "An AI-based healthcare handoff support concept designed to reduce communication gaps and highlight important patient information.",
    tech: ["React", "AI/ML", "Python"],
    link: "https://github.com/Ananyashree-gif/",
  },
  {
    name: "Student Performance & GPA Predictor",
    description:
      "A machine learning project focused on predicting student academic performance using relevant academic features.",
    tech: ["Python", "Machine Learning", "Pandas"],
    link: "https://github.com/Ananyashree-gif/",
  },
  {
    name: "Personal Portfolio",
    description:
      "A responsive multi-page React portfolio website showcasing my skills, projects, and contact information.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Ananyashree-gif/First-React-App",
  },
  {
    name: "Counter Application",
    description:
      "A React application demonstrating state management using useState.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Ananyashree-gif/",
  },
  {
    name: "Stone Paper Scissors",
    description:
      "A React-based interactive game where the player competes against a computer-generated choice.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Ananyashree-gif/",
  },
];

function Projects() {
  return (
    <section className="page container">
      <p className="eyebrow">Projects</p>
      <h1 className="page-title">What I've Built</h1>
      <p className="page-subtitle">
        A few projects that reflect what I’ve been learning and building.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <ul className="tech-list">
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-small"
            >
              View Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;