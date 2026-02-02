import "../styles/Home.css";

const Home = ({ setPage }) => {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="home-title">
          Yashvardhan <span>Shrimal</span>
        </h1>

        <p className="home-subtitle">
          MCA Student | Web Developer | Data Analytics & ML Enthusiast
        </p>

        <p className="home-impact">
          I build clean, scalable web applications and transform data into
          meaningful insights that solve real-world problems.
        </p>

        <div className="home-buttons">
          <a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  download
  className="btn primary"
>
  Download Resume
</a>

          <button
            className="btn secondary"
            onClick={() => setPage("projects")}
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
