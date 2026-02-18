import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  const closeMenu = () => setIsOpen(false)

  return (
    <header>
      <div className='logo'>
        <Link to="/"><h1>Aequilibria Therapies</h1></Link>
      </div>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="hamburger">☰</span>
      </button>

      <div className={`links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/book-session" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              Book Session
            </NavLink>
          </li>
          <li>
            <NavLink to="/alternative-medicine" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              Alternative Medicine
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="primary-cta">Book Now</button>
      </div>
    </header>
  )
}

export default Navbar
