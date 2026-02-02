import "../styles/Skills.css";

const Skills = () => {
  return (
    <section className="skills-page">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-group">
        <h3>Programming Languages</h3>
        <div className="skills-grid">
          <div className="skill-card">💻 C++</div>
          <div className="skill-card">🐍 Python</div>
          <div className="skill-card">🌐 JavaScript</div>
        </div>
      </div>

      <div className="skills-group">
        <h3>Machine Learning & Data</h3>
        <div className="skills-grid">
          <div className="skill-card">🤖 Machine Learning</div>
          <div className="skill-card">📊 XGBoost</div>
          <div className="skill-card">📈 NumPy</div>
          <div className="skill-card">🧮 Pandas</div>
          <div className="skill-card">🧠 Scikit-learn</div>
        </div>
      </div>

      <div className="skills-group">
        <h3>Tools & Technologies</h3>
        <div className="skills-grid">
          <div className="skill-card">👁️ OpenCV</div>
          <div className="skill-card">📊 Power BI</div>
          <div className="skill-card">🗄️ SQL</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
