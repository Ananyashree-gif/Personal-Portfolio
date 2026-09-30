const skills = [
  { name: "Python", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Machine Learning", category: "AI / Data" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
];

function Skills() {
  return (
    <section className="page container">
      <p className="eyebrow">Skills</p>
      <h1 className="page-title">Technologies I work with</h1>
      <p className="page-subtitle">
        A snapshot of the languages, frameworks, and tools I use to build my
        projects.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <span className="skill-category">{skill.category}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;