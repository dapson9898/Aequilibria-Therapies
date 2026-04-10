import React from 'react'
import './styles/Footer.css'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Music2 } from 'lucide-react'

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
            <a
              href="https://www.facebook.com/share/18Ge1Ea6m1/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook @pharmfeez"
              className="social-link"
            >
              <Facebook size={18} />
              <span>@pharmfeez</span>
            </a>
            <a
              href="https://www.instagram.com/pharmfeez?igsh=MWk4bHBhMnQ4Z2JtNQ=="
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram @pharmfeez"
              className="social-link"
            >
              <Instagram size={18} />
              <span>@pharmfeez</span>
            </a>
            <a
              href="https://youtube.com/@pharmfeez?si=6WfLLoyjewxEf2yJ"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="YouTube @pharmfeez"
              className="social-link"
            >
              <Youtube size={18} />
              <span>@pharmfeez</span>
            </a>
            <a
              href="https://www.tiktok.com/@pharmfeez?_r=1&_t=ZS-95L7sOdZWTf"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="TikTok @pharmfeez"
              className="social-link"
            >
              <Music2 size={18} />
              <span>@pharmfeez</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="brand">Quick Links</h4>
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
          <h4 className="brand">Contact Information</h4>
          <ul className="contact">
            <li>
              <MapPin size={16} />
              <span>Maccido Royal Estate, Galadimawa, Abuja, Nigeria</span>
            </li>
            <li>
              <Phone size={16} />
              <span>+234 703 303 0833</span>
              <span>+234 703 303 0833</span>
            </li>
            <li>
              <Mail size={16} />
              <span>Aequilibriatherapies@gmail.com</span>
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
