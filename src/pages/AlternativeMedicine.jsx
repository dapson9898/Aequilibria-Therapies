import React, { useState } from 'react'
import './AlternativeMedicine.css'
import { Link } from 'react-router-dom'
import {
  Leaf, Target, Shield, Heart, Sparkles, Users, TrendingUp,
  Activity, Brain, Utensils, Wind, Zap, HeartPulse,
  Star, MapPin, Clock, ChevronDown, ChevronUp,
} from 'lucide-react'

const REASONS = [
  { icon: <Leaf size={22} />, title: 'Natural Healing', desc: 'Alternative medicine uses natural substances and therapies that work in harmony with your body, avoiding harsh chemicals and synthetic drugs.' },
  { icon: <Target size={22} />, title: 'Root Cause Treatment', desc: 'Rather than masking symptoms, alternative medicine identifies and addresses underlying causes for lasting relief.' },
  { icon: <Shield size={22} />, title: 'Fewer Side Effects', desc: 'Natural therapies typically have minimal side effects compared to pharmaceutical interventions, making them safer for long-term use.' },
  { icon: <Heart size={22} />, title: 'Holistic Approach', desc: 'Treats the whole person – mind, body, and spirit – recognising that all aspects of health are interconnected.' },
  { icon: <Sparkles size={22} />, title: 'Preventive Focus', desc: 'Emphasises prevention and maintaining wellness rather than just treating illness after it develops.' },
  { icon: <Users size={22} />, title: 'Personalised Care', desc: 'Each treatment plan is customised to your unique constitution, lifestyle, and health needs.' },
  { icon: <TrendingUp size={22} />, title: 'Complementary to Conventional Med', desc: 'Can be safely used alongside conventional treatments to enhance overall outcomes and quality of life.' },
]

const CONDITIONS = [
  { icon: <Activity size={22} />, title: 'Pain Management', desc: 'Chronic pain, arthritis, back pain, migraines, fibromyalgia' },
  { icon: <Brain size={22} />, title: 'Mental Health', desc: 'Stress, anxiety, depression, insomnia, PTSD' },
  { icon: <Utensils size={22} />, title: 'Digestive Issues', desc: 'IBS, constipation, acid reflux, bloating, food sensitivities' },
  { icon: <Wind size={22} />, title: 'Respiratory Conditions', desc: 'Asthma, allergies, sinusitis, bronchitis' },
  { icon: <Heart size={22} />, title: "Women's Health", desc: 'Menstrual issues, fertility, menopause, hormonal imbalances' },
  { icon: <Zap size={22} />, title: 'Energy & Fatigue', desc: 'Chronic fatigue, low energy, adrenal fatigue' },
  { icon: <HeartPulse size={22} />, title: 'Lifestyle Diseases', desc: 'Diabetes, hypertension, obesity, metabolic syndrome' },
  { icon: <Sparkles size={22} />, title: 'General Wellness', desc: 'Immune support, detoxification, preventive care, vitality' },
]

const WHY_BEST = [
  { icon: <Shield size={22} />, title: 'Licensed & Certified', desc: 'Fully licensed medical company with certified practitioners meeting the highest professional standards.' },
  { icon: <Target size={22} />, title: 'Multi-Disciplinary Expertise', desc: 'Six specialised healing modalities under one roof for comprehensive, integrated treatment.' },
  { icon: <Users size={22} />, title: 'Experienced Practitioners', desc: 'Our team brings years of training and clinical experience in alternative medicine.' },
  { icon: <TrendingUp size={22} />, title: 'Proven Track Record', desc: 'Hundreds of satisfied patients have experienced real, measurable health improvements.' },
  { icon: <Sparkles size={22} />, title: 'Modern Facilities', desc: 'Professional, serene treatment spaces equipped with the latest therapeutic technologies.' },
  { icon: <Heart size={22} />, title: 'Patient-Centered Care', desc: 'We listen, we care, and we partner with you on your healing journey.' },
  { icon: <Star size={22} />, title: 'Comprehensive Assessments', desc: 'Thorough evaluations to understand your complete health picture before treatment.' },
  { icon: <Activity size={22} />, title: 'Ongoing Support', desc: 'Continuous monitoring and adjustment of your treatment plan to ensure optimal results.' },
  { icon: <MapPin size={22} />, title: 'Accessible Location', desc: 'Conveniently located in Abuja with flexible scheduling to fit your lifestyle.' },
  { icon: <Clock size={22} />, title: 'Transparent Communication', desc: 'Clear explanations of treatments, realistic expectations, and honest guidance every step.' },
]

const FAQS = [
  { question: 'Is alternative medicine safe?', answer: "Yes, when practiced by qualified, licensed professionals like our team. Alternative medicine therapies have been used safely for centuries and continue to be validated by modern research. We conduct thorough health assessments, use sterile equipment, and follow strict safety protocols. However, we always recommend informing your primary care physician about any alternative treatments you're receiving." },
  { question: 'Does alternative medicine really work?', answer: 'Absolutely. Alternative medicine has a strong evidence base and has been proven effective for numerous conditions. Acupuncture, for instance, is recognized by the WHO for treating over 40 conditions. Millions of people worldwide rely on alternative medicine for relief and healing. While individual results vary, our patients consistently report significant improvements in pain, stress, energy, and overall wellbeing.' },
  { question: 'How long does treatment take to work?', answer: "This depends on your condition, its severity, and how long you've had it. Some patients notice improvements after the first session, while others need several treatments. Acute conditions typically respond faster (3-6 sessions), while chronic conditions may require 8-12 sessions or more. We'll provide realistic timelines during your initial consultation." },
  { question: 'Can I use alternative medicine with conventional treatment?', answer: "In most cases, yes! Alternative medicine often works beautifully alongside conventional treatments. Many of our patients use our therapies to complement their conventional care, manage side effects of medications, or enhance overall treatment outcomes. We encourage open communication between all your healthcare providers." },
]

const AlternativeMedicine = () => {
  const [openFaq, setOpenFaq] = useState(-1)

  return (
    <div>
      {/* Hero */}
      <section className="page-hero alt-hero">
        <div className="page-hero-content">
          <h1>The Power of Alternative Medicine</h1>
          <p>Safe, Effective, Natural Healing</p>
        </div>
      </section>

      {/* What Is */}
      <section className="section-pad">
        <div className="container what-grid">
          <div className="what-text">
            <h2>What is Alternative Medicine?</h2>
            <p>Alternative medicine encompasses a diverse range of healing practices and therapies that operate outside conventional Western medicine. These time-tested approaches draw from ancient wisdom traditions and holistic philosophies from around the world.</p>
            <p>Unlike conventional medicine which often focuses on treating specific symptoms, alternative medicine takes a whole-person approach — considering physical, mental, emotional, and spiritual aspects of health.</p>
            <p>Today, alternative medicine is increasingly recognised globally, with millions seeking these natural, gentle, and effective approaches to health and healing.</p>
          </div>
          <div className="what-img">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80" alt="Alternative Medicine yoga" />
          </div>
        </div>
      </section>

      {/* Why Choose Alt Med */}
      <section className="section-pad bg-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose Alternative Medicine?</h2>
            <p className="section-subtitle">Seven compelling reasons to embrace natural, holistic healing</p>
          </div>
          <div className="reasons-grid">
            {REASONS.map((reason, index) => (
              <div className="reason-card" key={index}>
                <div className="r-icon">{reason.icon}</div>
                <div><h3>{reason.title}</h3><p>{reason.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Conditions We Treat</h2>
            <p className="section-subtitle">Alternative medicine effectively addresses a wide range of health concerns</p>
          </div>
          <div className="conditions-grid">
            {CONDITIONS.map((condition, index) => (
              <div className="condition-card" key={index}>
                <div className="c-icon">{condition.icon}</div>
                <h3>{condition.title}</h3>
                <p>{condition.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Best */}
      <section className="why-best-section">
        <div className="container">
          <div className="section-header text-center" style={{ paddingTop: '4rem' }}>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Why Aequilibria is Your Best Choice</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Ten reasons we stand out as Nigeria's premier alternative medicine centre</p>
          </div>
          <div className="best-grid">
            {WHY_BEST.map((why, index) => (
              <div className="best-card" key={index}>
                <div className="b-icon">{why.icon}</div>
                <div><h3>{why.title}</h3><p>{why.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Real transformations through alternative medicine</p>
          </div>
          <div className="stories-grid">
            <div className="story-card story-green">
              <h3>From Chronic Pain to Active Living</h3>
              <p>A 45-year-old patient came to us with debilitating lower back pain that had persisted for 3 years despite conventional treatments. Through a combination of acupuncture and massage therapy over 10 sessions, she experienced an 80% reduction in pain and was able to return to her active lifestyle.</p>
              <blockquote>"I never thought I'd be pain-free again. Aequilibria gave me my life back."</blockquote>
            </div>
            <div className="story-card story-gold">
              <h3>Anxiety Relief Through Holistic Care</h3>
              <p>A young professional struggling with severe anxiety and panic attacks found relief through our integrated approach of breathwork, mind healing, and naturopathy. After 8 weeks, anxiety symptoms decreased by 70% and quality of life improved dramatically.</p>
              <blockquote>"Finally found peace without relying on medication."</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Common questions about alternative medicine</p>
          </div>
          <div className="faq-list">
            {FAQS.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  <span>{faq.question}</span>
                  {openFaq === index ? <ChevronUp size={20} color="var(--teal)" /> : <ChevronDown size={20} color="var(--teal)" />}
                </button>
                {openFaq === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ready">
        <h2>Ready to Experience Natural Healing?</h2>
        <p>Take the first step toward optimal health with alternative medicine</p>
        <Link to="/book-session" className="btn-outline">Book Your Consultation</Link>
      </div>
    </div>
  )
}

export default AlternativeMedicine
