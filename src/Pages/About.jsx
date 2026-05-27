import "./About.css"
import { useNavigate } from "react-router-dom"

export default function About() {

  const navigate = useNavigate()

  return (
    <section className="about">
      <div className="about-container">

        <h1>About Me</h1>

        <p className="about-intro">
          Hi, I'm <span>Amit Kumar Saini</span>, a Frontend Developer focused on building modern and responsive web applications using React.js.
        </p>

        <p>
          I specialize in creating clean UI, smooth user experiences, and scalable frontend architecture using JavaScript, React, and CSS.
        </p>

        <p>
          I enjoy solving real-world problems through code and continuously improving my skills to build better and faster web applications.
        </p>

        <p className="about-highlight">
          Currently looking for opportunities to contribute and grow as a frontend developer.
        </p>
           </div>
        {/* Arrow to Projects */}
        <div
          className="side-arrow"
          onClick={() => navigate("/projects")}
        >
          →
        

      </div>
    </section>
  )
}