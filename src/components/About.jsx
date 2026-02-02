import "../styles/About.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-card">
        <span className="about-label">INTRODUCTION</span>

        <h2>About Me</h2>

        <p className="about-intro">
          I am <span>Yashvardhan Shrimal</span>, an MCA student with a strong
          interest in building modern web applications and applying data-driven
          techniques to solve real-world problems.
        </p>

        <p>
          I have hands-on experience in <strong>web development</strong>,{" "}
          <strong>data analytics</strong>, and{" "}
          <strong>machine learning</strong>. I enjoy working on end-to-end
          projects — from designing user-friendly interfaces to building
          efficient back-end logic and analyzing data for meaningful insights.
        </p>

        <p>
          My academic background and project work have helped me develop strong
          problem-solving skills, a solid understanding of programming
          fundamentals, and the ability to quickly learn new technologies.
        </p>

        <div className="about-highlights">
          <div>🚀 Interested in full-stack development & data science</div>
          <div>📊 Experience with ML models, analytics & visualization</div>
          <div>💡 Passionate about clean UI and scalable systems</div>
        </div>

        <div className="education-section">
          <h3>Education</h3>
          <p>
            🎓 MCA – JECRC University <span>(2024 – Present)</span>
          </p>
          <p>
            🎓 BCA – JK Lakshmipat University <span>(2021 – 2024)</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
