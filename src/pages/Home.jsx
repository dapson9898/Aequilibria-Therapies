import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Droplets, Leaf, Activity, Hand, Wind, Brain,
  Award, Heart, Users, TrendingUp,
} from 'lucide-react'
import './Home.css'

const SERVICES = [
  { icon: <Droplets size={24} />, title: 'Acupuncture', desc: 'Traditional Chinese medicine using fine needles to promote natural healing and pain relief.' },
  { icon: <Leaf size={24} />, title: 'Naturopathy', desc: 'Natural healing through herbs, nutrition, and lifestyle modifications for optimal wellness.' },
  { icon: <Activity size={24} />, title: 'Bioresonance Therapy', desc: 'Advanced technology to detect and correct energetic imbalances in the body.' },
  { icon: <Hand size={24} />, title: 'Massage Therapy', desc: 'Therapeutic massage for stress relief, pain management, and improved circulation.' },
  { icon: <Wind size={24} />, title: 'Breathwork', desc: 'Powerful breathing techniques for stress reduction and mental clarity.' },
  { icon: <Brain size={24} />, title: 'Mind Healing', desc: 'Holistic mental wellness through meditation and mindfulness practices.' },
]

const WHY_US = [
  { icon: <Award size={24} />, title: 'Licensed Professionals', desc: 'Certified practitioners with extensive training and experience' },
  { icon: <Heart size={24} />, title: 'Holistic Approach', desc: 'Treating mind, body, and spirit for complete wellness' },
  { icon: <Users size={24} />, title: 'Personalized Treatment', desc: 'Customized care plans tailored to your unique needs' },
  { icon: <TrendingUp size={24} />, title: 'Proven Results', desc: 'Evidence-based therapies with consistent positive outcomes' },
]

const TESTIMONIALS = [
  { text: '"Bioresonance therapy was life-changing for me. The practitioners are experts who genuinely care about your wellbeing and healing journey."', author: 'Ms. Ibrahim' },
  { text: '"The acupuncture sessions completely resolved my chronic back pain. I feel better than I have in years. Highly recommend!"', author: 'Mr. Adeyemi' },
  { text: '"Exceptional care, professional staff, and a serene environment. Aequilibria Therapies truly changed my life for the better."', author: 'Mrs. Okafor' },
]

export default function Home() {
  const [active, setActive] = useState(0)

  return (
    <div>
      {/* ── Main / Hero ── */}
      <section className="hero">
        <div className="hero-blur"></div>
        <div className="hero-content">
          <h1>Holistic Healing for Mind,<br />Body &amp; Spirit</h1>
          <p>Licensed Alternative Medicine Specialists in Abuja</p>
          <div className="hero-button">
            <Link to="/book-session" className="hero-button-white">Book Your Session</Link>
            <Link to="/about" className="btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── Welcome ── */}
      <section className="section-pad">
        <div className="container welcome-grid">
          <div className="welcome-text">
            <h2>Welcome to Aequilibria Therapies</h2>
            <p>Where ancient wisdom meets modern healing. We are a licensed medical company specialising in comprehensive holistic treatments designed to restore balance and promote natural wellness.</p>
            <p>Our integrated approach combines six powerful healing modalities to address the root causes of health concerns, not just symptoms. Whether you're seeking pain relief, stress management, or overall wellness enhancement, our experienced practitioners are here to guide your healing journey.</p>
            <p>Experience the difference of personalised, compassionate care in a serene, professional environment.</p>
          </div>
          <div className="welcome-img">
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=700&q=80"
              alt="Group yoga on the beach"
            />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-pad bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Healing Services</h2>
            <p className="section-subtitle">Comprehensive holistic therapies tailored to your unique wellness needs</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <div className="svc-card" key={index}>
                <div className="icon-circle">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/services" className="btn-primary">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose Aequilibria</h2>
            <p className="section-subtitle">Your trusted partner in holistic health and wellness</p>
          </div>
          <div className="why-grid">
            {WHY_US.map((why, index) => (
              <div className="why-item" key={index}>
                <div className="icon-circle">{why.icon}</div>
                <h3>{why.title}</h3>
                <p>{why.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-pad bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">Real stories of healing and transformation</p>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">{TESTIMONIALS[active].text}</p>
            <p className="testimonial-author">— {TESTIMONIALS[active].author}</p>
          </div>
          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, index) => (
              <button key={index} className={`dot ${index === active ? 'active' : ''}`} onClick={() => setActive(index)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready ── */}
      <div className="ready">
        <h2>Ready to Begin Your Healing Journey?</h2>
        <p>Take the first step towards optimal health and wellness today</p>
        <Link to="/book-session" className="btn-outline">Book Your Appointment</Link>
      </div>
    </div>
  )
}
