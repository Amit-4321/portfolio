import Navbar from "./Pages/Navbar"
import { Routes, Route } from "react-router-dom"

import Hero from "./Pages/Hero"
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import ProjectDetail from "./Pages/ProjectDetail"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route  path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App