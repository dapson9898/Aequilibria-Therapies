import React from 'react'
import { Shield, Target, Heart, Users, Award, TrendingUp, MapPin, Clock } from 'lucide-react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  const DIFFERENCE = [
    { icon: <Shield size={22} />, title: 'Licensed Medical Company', desc: 'I am a fully licensed and certified alternative medicine facility, ensuring the highest standards of safety and professionalism in all our treatments.' },
    { icon: <Target size={22} />, title: 'Comprehensive Approach', desc: 'Seven integrated healing modalities under one roof – acupuncture, cupping, naturopathy, bioresonance, massage, breathwork, and mind healing – for complete wellness.' },
    { icon: <Heart size={22} />, title: 'Personalized Care', desc: 'Every treatment plan is customized to your unique health profile, concerns, and goals. I see you as an individual, not a condition.' },
    { icon: <Users size={22} />, title: 'Experienced Practitioners', desc: 'My team consists of highly trained and certified professionals with years of experience in holistic and alternative medicine practices.' },
    { icon: <Award size={22} />, title: 'Alternative Medicine Focus', desc: "I specialise exclusively in natural, healing methods that work with your body's innate ability to heal itself." },
    { icon: <TrendingUp size={22} />, title: 'Results-Driven', desc: 'My evidence-based approach consistently delivers measurable improvements in pain relief, stress management, and overall wellbeing.' },
    { icon: <MapPin size={22} />, title: 'Convenient Location', desc: 'Easily accessible in Galadimawa, Abuja, providing a serene environment perfect for healing and relaxation.' },
    { icon: <Clock size={22} />, title: 'By Appointment Only', desc: 'I schedule appointments to ensure each patient receives our full attention and personalised care without rushed consultations.' },
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
            <h2>My Story</h2>
            <pre>"For every disease, Allah has created a cure."</pre>
            <pre>— Prophet Muhammad ﷺ</pre>
            <pre>That saying has never left me.</pre>
            <p>I came to alternative medicine from two directions at once, a growing frustration with a system that treated symptoms like endpoints, and a quiet, persistent pull toward something more complete. Conventional medicine has its place. But I kept seeing people who were technically treated and still not well. People managing conditions they were told they'd just have to live with. That didn't sit right with me.</p>
            <p>The Prophet's words gave me a framework I could build on. Not a guarantee of miracles but a commitment to keep looking. To not accept "there's nothing more we can do" as the final word. To believe that the body, given the right conditions, has pathways to healing that we haven't always been taught to look for.</p>
            <p>That's what Aequilibria is built on and the name comes from the Latin word for balance because that's what I'm really after in every session. Not just relief. Not just symptom management. Actual restoration of the conditions your body needs to do what it was designed to do. </p>
            
            </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container mission-grid">
          <div className="mission-card">
            <h3>My Mission</h3>
            <p>To provide accessible, professional, and deeply effective alternative medicine treatments that restore balance, relieve real suffering, and meaningfully improve the quality of life for every person I work with. Not managing illness but pursuing the cure. Bi'idniLlah</p>
          </div>
          <div className="mission-card">
            <h3>My Vision</h3>
            <p>To set the standard for holistic wellness. To show what alternative medicine looks like when it's practised with rigour, conviction, and genuine care and to be the practitioner people turn to when they've stopped believing nothing more can be done. In shaa Allah </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-pad bg-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What Makes Me Different</h2>
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
            <h2 className="section-title">My Credentials</h2>
            <p className="section-subtitle">Professional qualifications you can trust</p>
          </div>
          <div className="cred-grid">
            <div className="cred-card cred-teal"><span className="cred-num">10+</span><span>Years Combined Experience</span></div>
            <div className="cred-card cred-gold"><span className="cred-num">7</span><span>Specialized Healing Modalities</span></div>
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
