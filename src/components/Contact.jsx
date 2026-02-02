import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p className="contact-text">
          Feel free to reach out for opportunities, collaborations, or just a
          quick chat.
        </p>

        <div className="contact-info">
          <a href="mailto:yashshrimal64@gmail.com">
            📧 yashshrimal64@gmail.com
          </a>
          <p>📍 India</p>
        </div>

        <div className="contact-actions">
          <a
            href="mailto:yashshrimal64@gmail.com"
            className="primary-btn"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/yashshrimal/"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
