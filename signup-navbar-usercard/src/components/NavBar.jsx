import { useState } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(o => !o)
  const close = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-inner">
          <div className="brand" aria-label="Brand">
            <a href="#home" onClick={close} style={{ textDecoration: 'none', color: 'inherit' }}>
              <span>SimplerTechnologies</span>Tasks
            </a>
          </div>

          <div className="menu" role="menubar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#signup" className="btn">Sign Up</a>
          </div>

          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={toggle}
          >
            ☰ Menu
          </button>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className={`menu ${open ? 'open' : ''}`}>
          <a href="#home" onClick={close}>Home</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a href="#signup" className="btn" onClick={close}>Sign Up</a>
        </div>
      </div>
    </nav>
  )
}
