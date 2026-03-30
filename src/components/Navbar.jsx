import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import './styles/Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/book-session', label: 'Book Session' },
  { to: '/alternative-medicine', label: 'Alternative Medicine' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const { getCartItemCount } = useCart()
  const cartCount = getCartItemCount()

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">Aequilibria Therapies</Link>

        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={location.pathname === l.to ? 'active' : ''}
                onClick={() => setOpen(false)}
              >{l.label}</Link>
            </li>
          ))}
        </ul>

        <Link to="/cart" className="nav-cart" onClick={() => setOpen(false)} title="Shopping Cart">
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>

        <Link to="/book-session" className="nav-book btn-primary" onClick={() => setOpen(false)}>
          Book Now
        </Link>
      </div>
    </nav>
  )
}
