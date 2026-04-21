import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero contact-hero">
        <div className="page-hero-content">
          <h1>Get in Touch</h1>
          <p>We're Here to Help You</p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">Reach out to us for appointments, questions, or general inquiries</p>
          </div>
          <div className="ci-grid">
            <div className="ci-card">
              <div className="ci-icon"><MapPin size={22} /></div>
              <div>
                <h3>Our Location</h3>
                <p>Maccido Royal Estate, Galadimawa, Abuja, Nigeria</p>
                <a href="https://maps.google.com/?q=Galadimawa+Abuja+Nigeria" target="_blank" rel="noreferrer" className="ci-link">Get Directions →</a>
              </div>
            </div>
            <div className="ci-card">
              <div className="ci-icon"><Phone size={22} /></div>
              <div>
                <h3>Phone</h3>
                <p>+234 703 303 0833</p>
                <a href="tel:+2347033030833" className="ci-link">Call Now →</a>
              </div>
            </div>
            <div className="ci-card">
              <div className="ci-icon"><Mail size={22} /></div>
              <div>
                <h3>Email</h3>
                <p>aequilibriatherapies@gmail.com</p>
                <a href="mailto:Aequilibriatherapies@gmail.com" target='_blank' className="ci-link">Send Email →</a>
              </div>
            </div>
            <div className="ci-card">
              <div className="ci-icon"><Clock size={22} /></div>
              <div>
                <h3>Business Hours</h3>
                <p>Monday – Saturday</p>
                <p><strong>9:00 AM – 5:00 PM</strong></p>
                <p>Sunday: Closed</p>
                <span className="by-appt">By Appointment Only</span>
                <Link to="/book-session" className="ci-link">Book Appointment →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '2rem' }}>Find Us on the Map</h2>
          <div className="map-wrapper">
            <iframe
              title="Aequilibria Therapies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.198!2d7.4654!3d9.0138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba5f98fcced%3A0x3fcd4fdf2f4c1d85!2sGaladimawa%2C+Abuja!5e0!3m2!1sen!2sng!4v1"
              width="100%" height="420"
              style={{ border: 0, borderRadius: 'var(--radius)' }}
              allowFullScreen="" loading="lazy"
            />
            <p className="map-address"><strong>Address:</strong> Maccido Royal Estate, Galadimawa, Abuja, Nigeria</p>
            <a
              href="https://www.google.com/maps/search/Maccido+Royal+Estate+Galadimawa+Abuja"
              target="_blank" rel="noreferrer"
              className="btn-primary map-btn"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Have Questions */}
      <section className="section-pad">
        <div className="container">
          <div className="questions-box">
            <h2>Have Questions?</h2>
            <p>We're here to answer any questions you may have about our services, treatments, or scheduling. Don't hesitate to reach out via phone, email, or visit us in person.</p>
            <div className="q-btns">
              <a href="tel:+2347033030833" className="btn-primary q-btn"><Phone size={16} /> Call Us Now</a>
              <a href="mailto:oladuntoyeabdulafeez@gmail.com" className="btn-outline-teal q-btn"><Mail size={16} /> Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <div className="ready">
        <h2>Ready to Book?</h2>
        <p>Schedule your consultation and begin your journey to optimal wellness</p>
        <Link to="/book-session" className="btn-outline">Book Your Appointment</Link>
      </div>
    </div>
  )
}

export default Contact
