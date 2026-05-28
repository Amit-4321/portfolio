import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import profile from "../assets/Profile.jpg"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const sidebarRef = useRef(null)

  // Handle navbar hide/show on scroll
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  // Handle click on pseudo-element close button
  useEffect(() => {
    if (menuOpen && sidebarRef.current) {
      // Get the computed styles to find the pseudo-element
      const sidebar = sidebarRef.current
      
      // Create a div overlay at the position of the close button
      const handlePseudoClick = (e) => {
        const rect = sidebar.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        // Close button is at top-right corner (approx position)
        const closeButtonArea = {
          right: 50,  // 50px from right edge
          top: 30,    // 30px from top
          width: 40,  // 40px wide
          height: 40  // 40px tall
        }
        
        if (x > rect.width - closeButtonArea.right && 
            y < closeButtonArea.top + closeButtonArea.height) {
          setMenuOpen(false)
        }
      }
      
      sidebar.addEventListener('click', handlePseudoClick)
      return () => sidebar.removeEventListener('click', handlePseudoClick)
    }
  }, [menuOpen])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('sidebar-open')
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('sidebar-open')
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('sidebar-open')
    }
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${!showNavbar ? 'hide' : 'show'} ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-left">
            <img 
              src={profile} 
              alt="profile" 
              className="profile-img"
              onClick={() => setShowImage(true)}
            />
            <NavLink to="/" className="logo">
              Amit Kumar Saini
            </NavLink>
          </div>

          <ul className="nav-links">
            <li><NavLink to="/" className="nav-item">Home</NavLink></li>
            <li><NavLink to="/about" className="nav-item">About</NavLink></li>
            <li><NavLink to="/projects" className="nav-item">Projects</NavLink></li>
            <li><NavLink to="/contact" className="nav-item">Contact</NavLink></li>
          </ul>

          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="overlay active" onClick={closeMenu}></div>
      )}

      <div className={`sidebar ${menuOpen ? "open" : ""}`} ref={sidebarRef}>
        <ul>
          <li onClick={closeMenu}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      {showImage && (
        <div className="image-modal" onClick={() => setShowImage(false)}>
          <img src={profile} alt="full" className="full-image" />
        </div>
      )}
    </>
  )
}