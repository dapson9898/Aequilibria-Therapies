import React from 'react'
import './styles/Footer.css'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">

        <div className="footer-section">
          <h3 className="brand">Aequilibria Therapies</h3>
          <p className="desc">
            Licensed alternative medicine specialists dedicated to restoring balance
            and promoting natural wellness through holistic healing.
          </p>
          <div className="socials">
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="heading">Quick Links</h4>
          <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/book-session">Book Appointment</Link></li>
            <li><Link to="/alternative-medicine">Alternative Medicine</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="heading">Contact Information</h4>
          <ul className="contact">
            <li>
              <MapPin size={16} />
              <span>Maccido Royal Estate, Galadimawa, Abuja, Nigeria</span>
            </li>
            <li>
              <Phone size={16} />
              <span>+234 703 303 0833</span>
            </li>
            <li>
              <Mail size={16} />
              <span>oladuntoyeabdulafeez@gmail.com</span>
            </li>
            <li>
              <Clock size={16} />
              <div>
                <strong>Business Hours:</strong><br />
                Monday – Saturday: 9:00 AM – 5:00 PM<br />
                Sunday: Closed<br />
                <span className="appointment">By Appointment Only</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2026 Aequilibria Therapies. All rights reserved.</p>
      </div>
    </footer>
  )
}
