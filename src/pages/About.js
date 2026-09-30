const highlights = [
  {
    title: "B.E. AI & Machine Learning",
    text: "Currently pursuing my Bachelor of Engineering in Artificial Intelligence and Machine Learning.",
  },
  {
    title: "Artificial Intelligence",
    text: "Curious about how intelligent systems are designed and how they solve real problems.",
  },
  {
    title: "Machine Learning",
    text: "Interested in building models that learn from data and make useful predictions.",
  },
  {
    title: "Web Development",
    text: "Enjoy creating clean, responsive interfaces with React, HTML, and CSS.",
  },
  {
    title: "Programming",
    text: "Comfortable writing code in Python and JavaScript to bring ideas to life.",
  },
  {
    title: "Problem Solving",
    text: "Like breaking down complex problems into simple, logical steps.",
  },
];

function About() {
  return (
    <section className="page container">
      <p className="eyebrow">About</p>
      <h1 className="page-title">A little about me</h1>

      <div className="about-intro">
        <p>
            I’m a B.E. student specializing in Artificial Intelligence and Machine Learning, passionate about exploring how technology can be used to solve real-world problems. I enjoy working with AI, machine learning, and web development, and I love turning new ideas into practical projects. I’m always excited to learn, experiment with new technologies, and improve my skills.
        </p>
        <p>
          I’m currently focused on building a strong foundation in AI and software development while gaining hands-on experience through projects. My goal is to grow into a versatile engineer who can combine creativity, problem-solving, and technology to build useful solutions.
        </p>
      </div>

      <div className="cards-grid">
        {highlights.map((item) => (
          <article key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;