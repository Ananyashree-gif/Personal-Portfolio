import { Link } from "react-router-dom";
import profileImage from "../Assets/profile.jpg";

function Home() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Welcome to my portfolio</p>
          <h1>
            Hi, I'm <span className="accent-text">Ananyashree</span>
          </h1>
          <h2>AI &amp; Machine Learning Engineering Student</h2>
          <p className="hero-intro">
            I’m an Artificial Intelligence and Machine Learning engineering
            student interested in AI, machine learning, and web development. I
            enjoy turning ideas into practical projects and continuously
            learning new technologies.
          </p>

          <div className="button-group">
            <Link to="/projects" className="btn btn-primary">
              View My Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <img
              src={profileImage}
              alt="Ananya - profile portrait"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;