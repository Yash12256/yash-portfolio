import "../styles/Projects.css";

const Projects = () => {
  return (
    <section className="projects-page">
      <div className="projects-wrapper">
        <span className="projects-label">WORK</span>
        <h2>Projects</h2>

        <p className="projects-intro">
          A selection of projects that demonstrate my skills in web development,
          data analytics, and machine learning. These projects focus on
          real-world problem solving and clean implementation.
        </p>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <h3>Stack Overflow Clone</h3>
            <p className="project-desc">
  Developed a scalable Q&A platform with authentication, voting,
  and REST APIs. Focused on clean architecture, reusable components,
  and real-world system design similar to production applications.
</p>


            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/Yash12256/stackclone"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Cricket Score Prediction</h3>
            <p className="project-desc">
  Built a machine learning model to predict T20 cricket scores using
  XGBoost. Performed data preprocessing, feature engineering, and
  model evaluation to improve prediction accuracy.
</p>


            <div className="project-tags">
              <span>Python</span>
              <span>XGBoost</span>
              <span>Machine Learning</span>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/Yash12256/yash"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
