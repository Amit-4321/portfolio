import { useNavigate } from "react-router-dom";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
export default function Contact() {

  const navigate = useNavigate();

  return (
    <section className="contact-section">

      {/* 🔙 Back Arrow */}
      <div className="side-arrow left" onClick={() => navigate(-1)}>
        ←
      </div>

      <div className="contact-container">

        {/* ===== TOP: FORM ===== */}
        <div className="contact-form-box">
          <h2>Contact Me</h2>
          <p>Let’s work together or just say hello 👋</p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>

            <button type="submit">Send Message →</button>
          </form>
        </div>

        {/* ===== BOTTOM: CONTACT INFO ===== */}
        <div className="contact-info-box">

          <h2>Get in Touch</h2>

          <div className="info-grid">

            <div className="info-item">
              <FaPhone/>
              <p>+91 9876543210</p>
            </div>

            <div className="info-item">
             <FaEnvelope />
              <p>yourmail@gmail.com</p>
            </div>

            <div className="info-item">
              <FaLinkedin/>
              <a href="#">LinkedIn</a>
            </div>

            <div className="info-item">
              <FaGithub />
              <a href="#">GitHub</a>
            </div>

            <div className="info-item">
              <FaInstagram/>
              <a href="#">Instagram</a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}