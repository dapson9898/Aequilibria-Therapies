import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Leaf, Home, ArrowLeft, Search } from 'lucide-react'
import './NotFound.css'

const QUICK_LINKS = [
  { to: '/services',             label: 'Our Services' },
  { to: '/products',             label: 'Wellness Products' },
  { to: '/alternative-medicine', label: 'Alternative Medicine' },
  { to: '/book-session',         label: 'Book a Session' },
  { to: '/about',                label: 'About Us' },
  { to: '/contact',              label: 'Contact Us' },
]

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='not-found'>
      {/* Background decoration */}
      <div className="circle circle1" />
      <div className="circle circle2" />

      <div className="not-found-container">
        {/* Icon */}
        <div className="icon">
          <Leaf size={40} />
        </div>

        {/* 404 number */}
        <div className="err-code">404</div>

        {/* Message */}
        <h1 className="heading">Page Not Found</h1>
        <p className="subtext">
          It seems the page you're looking for has wandered off the healing path.
          Don't worry — let us guide you back to wellness.
        </p>

        {/* Primary Actions */}
        <div className="actions">
          <button className="btn-primary nf-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={17} /> Go Back
          </button>
          <Link to="/" className="btn-outline-teal nf-btn">
            <Home size={17} /> Back to Home
          </Link>
        </div>

        {/* Help  */}
        <p className="help">
          Still lost? <Link to="/contact">Contact our team</Link> and we'll point you in the right direction.
        </p>
      </div>
    </div>
  )
}

export default NotFound
