import React from 'react'
import { Shield, Target, Heart, Users, Award, TrendingUp, MapPin, Clock } from 'lucide-react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  const DIFFERENCE = [
    { icon: <Shield size={22} />, title: 'Licensed Medical Company', desc: 'We are a fully licensed and certified alternative medicine facility, ensuring the highest standards of safety and professionalism in all our treatments.' },
    { icon: <Target size={22} />, title: 'Comprehensive Approach', desc: 'Six integrated healing modalities under one roof – acupuncture, naturopathy, bioresonance, massage, breathwork, and mind healing – for complete wellness.' },
    { icon: <Heart size={22} />, title: 'Personalized Care', desc: 'Every treatment plan is customized to your unique health profile, concerns, and goals. We see you as an individual, not a condition.' },
    { icon: <Users size={22} />, title: 'Experienced Practitioners', desc: 'Our team consists of highly trained and certified professionals with years of experience in holistic and alternative medicine practices.' },
    { icon: <Award size={22} />, title: 'Alternative Medicine Focus', desc: "We specialise exclusively in natural, non-invasive healing methods that work with your body's innate ability to heal itself." },
    { icon: <TrendingUp size={22} />, title: 'Results-Driven', desc: 'Our evidence-based approach consistently delivers measurable improvements in pain relief, stress management, and overall wellbeing.' },
    { icon: <MapPin size={22} />, title: 'Convenient Location', desc: 'Easily accessible in Galadimawa, Abuja, providing a serene environment perfect for healing and relaxation.' },
    { icon: <Clock size={22} />, title: 'By Appointment Only', desc: 'We schedule appointments to ensure each patient receives our full attention and personalised care without rushed consultations.' },
  ]
  return (
    <div>
      {/* Hero */}
      <section className="page-hero about-hero">
        <div className="page-hero-content">
          <h1>Why Aequilibria Therapies?</h1>
          <p>Your trusted partner in holistic healing and natural wellness</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad">
        <div className="container story-grid">
          <div className="story-img">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" alt="Our story" />
          </div>
          <div className="story-text">
            <h2>Our Story</h2>
            <p>Aequilibria Therapies was founded on a simple but powerful belief: that true healing addresses the whole person – mind, body, and spirit. The name "Aequilibria" comes from the Latin word for balance, reflecting our core mission to restore harmony to your life.</p>
            <p>As a licensed alternative medicine company in Abuja, Nigeria, we bring together ancient healing wisdom and modern therapeutic techniques. Our multidisciplinary approach allows us to treat a wide range of health conditions naturally and effectively.</p>
            <p>We believe in empowering our patients with knowledge, providing compassionate care, and partnering with you on your unique journey to optimal health and wellness.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container mission-grid">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>To provide accessible, professional, and effective alternative medicine treatments that restore balance, relieve suffering, and enhance the quality of life for every individual we serve.</p>
          </div>
          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>To be recognised as Nigeria's leading holistic wellness centre, setting the standard for excellence in alternative medicine and inspiring a healthier, more balanced society.</p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-pad bg-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-subtitle">Eight key factors that set Aequilibria Therapies apart</p>
          </div>
          <div className="diff-grid">
            {DIFFERENCE.map((diff, index) => (
              <div className="diff-card" key={index}>
                <div className="diff-icon">{diff.icon}</div>
                <div>
                  <h3>{diff.title}</h3>
                  <p>{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Credentials</h2>
            <p className="section-subtitle">Professional qualifications you can trust</p>
          </div>
          <div className="cred-grid">
            <div className="cred-card cred-teal"><span className="cred-num">10+</span><span>Years Combined Experience</span></div>
            <div className="cred-card cred-gold"><span className="cred-num">6</span><span>Specialized Healing Modalities</span></div>
            <div className="cred-card cred-teal"><span className="cred-num">100%</span><span>Licensed &amp; Certified</span></div>
          </div>
        </div>
      </section>

      {/* Ready Experience */}
      <div className="ready">
        <h2>Experience the Aequilibria Difference</h2>
        <p>Join hundreds of satisfied patients who have transformed their health</p>
        <Link to="/book-session" className="btn-outline">Book Your Consultation</Link>
      </div>
    </div>
  )
}

export default About
