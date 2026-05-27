import "./Projects.css"
import { useNavigate } from "react-router-dom"

export default function Projects() {

  const navigate = useNavigate()

  const projects = [
    {
      title: "GYM Website",
      desc: "Responsive GYM Web pages",
      link: "https://amit-4321.github.io/Ironfit-gym/"
    },
    {
      title: "Blog Website",
      desc: "Dynamic blog with categories and search functionality",
      link: "https://amit-4321.github.io/My-Blog-/"
    },
    {
      title: "AI Tools Hub",
      desc: "Collection of AI tools with modern UI design",
      link: "https://amit-4321.github.io/Animation-web/"
    },
  ]

  return (
    <section className="projects">

      <div className="projects-container">
        <h1>My Projects</h1>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">

              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              {/* ✅ External link fix */}
              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>

            </div>
          ))}
        </div>
      </div>

      {/* Arrow to Contact (internal route ok) */}
      <div
        className="side-arrow"
        onClick={() => navigate("/contact")}
      >
        →
      </div>

    </section>
  )
}