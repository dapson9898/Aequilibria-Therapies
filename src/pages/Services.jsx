import React, { useState } from 'react'
import './Services.css'
import { Droplets, Leaf, Activity, Hand, Wind, Brain, ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    icon: <Droplets size={26} />, title: 'Acupuncture', subtitle: "Balance Your Body's Energy",
    img: 'https://res.cloudinary.com/dwa4bjuio/image/upload/f_auto,q_auto/SJ_Sports_Acupuncture-8515_sfdhjv', flip: false,
    desc: "Acupuncture is an ancient Chinese healing practice refined over thousands of years. By inserting fine, sterile needles into specific points along the body's meridians, we stimulate your body's natural healing mechanisms and restore the flow of vital energy (Qi). Effective for pain management, stress reduction, immune support, and overall balance.",
    expect: "Your first session includes a comprehensive consultation. Treatment lasts 30–60 minutes. Most patients feel minimal discomfort and many experience deep relaxation.",
    btn: 'Book Acupuncture Session',
  },
  {
    icon: <Leaf size={26} />, title: 'Cupping', subtitle: 'Ancient Suction Therapy for Deep Healing',
    img: 'https://res.cloudinary.com/dwa4bjuio/image/upload/f_auto,q_auto/Hijama-wet-cupping-for-organ-detoxification-and_g4nigq', flip: true,
    desc: "Cupping therapy is an ancient healing practice originating from Chinese medicine. Special cups are placed on your skin and create a gentle suction that draws out stagnant blood, toxins, and tension from deep within the muscles and tissues. This stimulates blood flow, releases blockages in energy meridians, and accelerates your body's natural healing processes. Highly effective for pain relief, muscle recovery, detoxification, and rejuvenation.",
    expect: "Sessions last 30–45 minutes. We'll apply oils to your skin, then place specialized cups. You may feel a pleasant pulling sensation as the cups work. Some temporary circular marks may appear, which fade within days.",
    btn: 'Book Cupping Session',
  },
  {
    icon: <Leaf size={26} />, title: 'Naturopathy', subtitle: "Nature's Path to Wellness",
    img: 'https://res.cloudinary.com/dwa4bjuio/image/upload/f_auto,q_auto/Fotolia_35154311_M_owsst3', flip: false,
    desc: "Naturopathy embraces the healing power of nature. Our approach combines herbal medicine, nutritional counselling, lifestyle modifications, and natural supplements to address the root causes of illness. We believe your body has an innate ability to heal when given the right support.",
    expect: "Initial consultations last 60–90 minutes. We review your history, lifestyle, diet, and goals to create a customised natural healing protocol.",
    btn: 'Book Naturopathy Session',
  },
  {
    icon: <Activity size={26} />, title: 'Bioresonance Therapy', subtitle: "Harmonize Your Body's Frequencies",
    img: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80', flip: true,
    desc: "Bioresonance therapy is the cutting edge of energy medicine. This non-invasive technology works at the cellular level by detecting and correcting electromagnetic frequency imbalances that arise from toxins, stress, or illness. It supports detoxification, immune strength, and cellular regeneration.",
    expect: "Sessions last 60–90 minutes. You'll be connected to the device via electrodes while it analyses and harmonises your body's frequencies. Many feel immediate improvements.",
    btn: 'Book Bioresonance Session',
  },
  {
    icon: <Hand size={26} />, title: 'Massage Therapy', subtitle: 'Release Tension, Restore Balance',
    img: 'https://res.cloudinary.com/dwa4bjuio/image/upload/f_auto,q_auto/deep-tissue-massage-feat_vb8tal', flip: false,
    desc: "Our therapeutic massage goes beyond relaxation. We employ Swedish massage, deep tissue work, trigger point therapy, and reflexology to address your specific needs. Scientifically proven to reduce stress hormones, relieve muscle tension, improve circulation, and promote better sleep.",
    expect: "Sessions last 60 or 90 minutes in our tranquil treatment rooms. We discuss areas of concern beforehand. You'll leave feeling renewed and restored.",
    btn: 'Book Massage Therapy Session',
  },
  {
    icon: <Wind size={26} />, title: 'Breathwork', subtitle: 'Transform Through Conscious Breathing',
    img: 'https://res.cloudinary.com/dwa4bjuio/image/upload/f_auto,q_auto/blog-images_hero_rngjdu', flip: true,
    desc: "Breathwork is one of the most powerful yet underutilised healing tools available. Through guided breathing techniques drawn from ancient traditions and modern science, you can profoundly affect your nervous system, mental state, and overall health — reducing anxiety, boosting energy, and releasing emotional blockages.",
    expect: "Sessions can be individual or group-based, lasting 45–60 minutes. You'll be guided through specific breathing patterns while lying comfortably.",
    btn: 'Book Breathwork Session',
  },
  {
    icon: <Brain size={26} />, title: 'Mind Healing', subtitle: 'Mental Clarity, Emotional Freedom',
    img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80', flip: false,
    desc: "True wellness requires mental and emotional balance. Our mind healing programmes integrate meditation, guided visualisation, mindfulness, and cognitive techniques to address anxiety, depression, trauma, and negative thought patterns. We create a safe space for you to cultivate lasting mental wellness.",
    expect: "Initial sessions map your mental and emotional landscape. Ongoing 45–60 minute sessions teach practical daily tools. Progress is gentle and tailored to your comfort.",
    btn: 'Book Mind Healing Session',
  },
]

const FAQS = [
  { question: 'How long does each treatment session take?', answer: 'Treatment duration varies by service. Acupuncture typically takes 45-60 minutes, naturopathy consultations 60-90 minutes, bioresonance 60-90 minutes, massage 60-90 minutes, breathwork 45-60 minutes, and mind healing sessions 45-60 minutes. Initial consultations may take longer to ensure comprehensive assessment.' },
  { question: 'How many sessions will I need?', answer: "The number of sessions depends on your specific condition, its severity, and how long you've had it. Acute conditions may respond in 3-6 sessions, while chronic conditions might require 8-12 sessions or more. We'll discuss a personalized treatment plan during your initial consultation and adjust as you progress." },
  { question: 'Are these treatments safe?', answer: 'Yes, all our treatments are safe when administered by our licensed, trained professionals. We use sterile equipment, follow strict hygiene protocols, and conduct thorough health assessments before treatment. Side effects are minimal and typically limited to temporary soreness or mild fatigue as your body heals.' },
  // { question: 'Do you accept insurance?', answer: 'Please contact us directly to discuss payment options and whether your insurance provider covers alternative medicine treatments. We provide detailed receipts that you can submit to your insurance company for potential reimbursement.' },
  { question: 'Can I combine multiple therapies?', answer: 'Absolutely! In fact, combining therapies often produces the best results. Our integrated approach allows us to create comprehensive treatment plans using multiple modalities. For example, acupuncture and naturopathy work beautifully together, as do massage and breathwork.' },
  { question: 'What should I wear to my appointment?', answer: "Wear comfortable, loose-fitting clothing. For acupuncture and massage, you may need to remove some clothing (we provide draping for modesty). For other treatments, comfortable clothing that allows easy movement is ideal." },
  { question: 'Will the treatments hurt?', answer: "Most treatments are painless or involve minimal discomfort. Acupuncture needles are very fine and most people feel little to nothing. Massage pressure is adjusted to your comfort level. Some therapies like bioresonance and breathwork involve no physical contact at all." },
  { question: 'How soon will I see results?', answer: 'Some patients notice improvements immediately, while others experience gradual changes over several sessions. Acute conditions typically respond faster than chronic ones. Your practitioner will set realistic expectations during your consultation and monitor your progress closely.' },
]

const Services = () => {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div>
      {/* Hero */}
      <section className="page-hero services-hero">
        <div className="page-hero-content">
          <h1>Comprehensive Holistic Therapies</h1>
          <p>Ancient Wisdom, Modern Application</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad">
        <div className="container text-center">
          <h2 className="section-title">Our Healing Services</h2>
          <p className="section-subtitle">Six powerful modalities integrated for your complete wellness</p>
        </div>
      </section>

      {/* Service Blocks */}
      {SERVICES.map((service, index) => (
        <section key={index} className={`svc-block ${index % 2 !== 0 ? 'bg-section' : ''}`}>
          <div className={`container svc-inner ${service.flip ? 'flip' : ''}`}>
            <div className="svc-text">
              <div className="svc-title-row">
                <div className="svc-icon-box">{service.icon}</div>
                <div>
                  <h2>{service.title}</h2>
                  <span className="svc-subtitle">{service.subtitle}</span>
                </div>
              </div>
              <p className="svc-desc">{service.desc}</p>
              <div className="what-to-expect">
                <h4>What to Expect</h4>
                <p>{service.expect}</p>
              </div>
              <Link to="/book-session" className="btn-primary">{service.btn}</Link>
            </div>
            <div className="svc-img">
              <img src={service.img} alt={service.title} />
            </div>
          </div>
        </section>
      ))}

      {/* Integrated Care */}
      <section className="section-pad bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Integrated Care for Complete Wellness</h2>
            <p className="section-subtitle">Our holistic approach treats the whole person, not just symptoms</p>
          </div>
          <div className="integrated-card">
            <p>At Aequilibria Therapies we understand that true healing requires addressing all aspects of your being. That's why we offer seven complementary healing modalities that work synergistically to restore balance and vitality.</p>
            <p>During your initial consultation we'll assess your complete health picture and recommend a personalised treatment plan that may combine multiple therapies for optimal results.</p>
            <p>This integrated approach allows us to address root causes while supporting your body's natural healing mechanisms from multiple angles, leading to faster, more lasting results.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about our services</p>
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
        <h2>Ready to Start Your Healing Journey?</h2>
        <p>Book your consultation today and discover which therapies are right for you</p>
        <Link to="/book-session" className="btn-outline">Book Your Appointment</Link>
      </div>
    </div>
  )
}

export default Services
