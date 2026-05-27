import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Hero.css"

export default function Hero() {

  const navigate = useNavigate()

  const roles = ["Frontend Developer", "React Developer", "UI Designer"]
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]
    const speed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      setText(current.substring(0, charIndex))

      if (!isDeleting) {
        setCharIndex(charIndex + 1)
      } else {
        setCharIndex(charIndex - 1)
      }

      if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true)
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setIndex((index + 1) % roles.length)
      }

    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index])

  return (
    <section className="hero">

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">

          <h1 className="hero-title">
            Hi, I'm <span>Amit Kumar Saini</span>
          </h1>

          <h2 className="hero-subtitle">
            {text}<span className="cursor">|</span>
          </h2>

          <p className="hero-text">
            I build modern, responsive and user-friendly web applications
            using React and latest frontend technologies.
          </p>

          <div className="hero-buttons">
            <button 
              className="primary-btn"
              onClick={() => navigate("/projects")}
            >
              View Projects
            </button>

            <a href="/resume.pdf" download className="secondary-btn">
              Download Resume
            </a>
          </div>
          <div className="side-arrow" onClick={() => navigate("/about")}>
  →
</div>
        </div>

      {/* RIGHT SIDE */}
<div className="hero-right">
  <div className="hero-blob"></div>
 
    </div>  
</div>
    </section>
  )
}