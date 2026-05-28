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

<span className="contact-tag">LET'S CONNECT</span>

<h2>Get In Touch</h2>

<p className="contact-desc">
  Feel free to reach out for collaborations,
  freelance projects or just a friendly chat.
</p>

<div className="info-grid">

  {/* <a href="tel:+919876543210" className="info-item">
    <FaPhone className="info-icon" />
    <div>
      <h4>Phone</h4>
      <p>+91 9876543210</p>
    </div>
  </a> */}

  <a href="mailto:yourmail@gmail.com" className="info-item">
    <FaEnvelope className="info-icon" />
    <div>
      <h4>Gmail</h4>
      <p>amit.saini23434@gmail.com</p>
    </div>
  </a>

  <a href="#" target="_blank" className="info-item">
    <FaLinkedin className="info-icon" />
    <div>
      <h4>LinkedIn</h4>
      <p>https://www.linkedin.com/in/amit-kumar-887283129/</p>
    </div>
  </a>

  <a href="#" target="_blank" className="info-item">
    <FaGithub className="info-icon" />
    <div>
      <h4>GitHub</h4>
      <p>https://github.com/Amit-4321</p>
    </div>
  </a>

  <a href="#" target="_blank" className="info-item">
    <FaInstagram className="info-icon" />
    <div>
      <h4>Instagram</h4>
      <p>amit.6572kumar</p>
    </div>
  </a>

</div>
</div>     </div>
    </section>
  );
}