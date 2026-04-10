import React, { useState } from 'react'
import { CheckCircle, Phone, Mail, Clock, MapPin } from 'lucide-react'
import './BookSession.css'

const TIMES = ['9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM']

const initForm = {
  fullName:'', email:'', phone:'', age:'', gender:'',
  service:'', preferredDate:'', preferredTime:'',
  altDate:'', altTime:'', complaint:'', medications:'',
  allergies:'', previousTreatments:'', hearAboutUs:'',
  specialRequests:'', agreeTerms: false, agreeContact: false,
}

function Field({ label, req, children }) {
  return (
    <div className="f-group">
      <label>{label}{req && <span className="req"> *</span>}</label>
      {children}
    </div>
  )
}

const BookSession = () => {
  const [form, setForm]       = useState(initForm)
  const [submitted, setSubmit] = useState(false)

  const handleChange = ({ target: { name, value, type, checked } }) =>
    setForm(p => ({ ...p, [name]: type === 'checkbox' ? checked : value }))

  const handleSubmit = e => { e.preventDefault(); setSubmit(true) }

  return (
    <div>
      <section className="page-hero book-hero">
        <div className="page-hero-content">
          <h1>Begin Your Healing Journey</h1>
          <p>Schedule your consultation with our holistic wellness experts</p>
        </div>
      </section>

      <section className="book-section">
        <div className="container book-layout">

          {/* ── Form ── */}
          <div className="form-card">
            {submitted ? (
              <div className="success-msg">
                <CheckCircle size={60} color="var(--teal)" />
                <h2>Consultation Request Submitted!</h2>
                <p>Thank you! We'll contact you within 24 hours to confirm your appointment.</p>
                <button className="btn-primary" onClick={() => setSubmit(false)}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2>Book Your Consultation</h2>

                <h3 className="f-section">Personal Information</h3>
                <div className="f-row">
                  <Field label="Full Name" req><input type="text" name="fullName" placeholder="John Doe" value={form.fullName} onChange={handleChange} required /></Field>
                  <Field label="Email Address" req><input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required /></Field>
                </div>
                <div className="f-row">
                  <Field label="Phone Number" req><input type="tel" name="phone" placeholder="+234 703 303 0833" value={form.phone} onChange={handleChange} required /></Field>
                  <Field label="Age"><input type="number" name="age" placeholder="30" value={form.age} onChange={handleChange} /></Field>
                </div>
                <Field label="Gender">
                  <select name="gender" value={form.gender} onChange={handleChange}>
                    <option value="">Select gender</option>
                    {['Male','Female','Other','Prefer not to say'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </Field>

                <h3 className="f-section">Appointment Details</h3>
                {/* <Field label="Preferred Service" req>
                  <select name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    {['Acupuncture','Naturopathy','Bioresonance Therapy','Massage Therapy','Breathwork','Mind Healing'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </Field> */}
                <div className="f-row">
                  <Field label="Preferred Date" req><input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} required /></Field>
                  <Field label="Preferred Time" req>
                    <select name="preferredTime" value={form.preferredTime} onChange={handleChange} required>
                      <option value="">Select time</option>
                      {TIMES.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </Field>
                </div>
                {/* <div className="f-row">
                  <Field label="Alternative Date (Optional)"><input type="date" name="altDate" value={form.altDate} onChange={handleChange} /></Field>
                  <Field label="Alternative Time (Optional)">
                    <select name="altTime" value={form.altTime} onChange={handleChange}>
                      <option value="">Select time</option>
                      {TIMES.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </Field>
                </div> */}

                <h3 className="f-section">Health Information</h3>
                <Field label="Chief Complaint / Reason for Visit" req>
                  <textarea name="complaint" rows={4} placeholder="Please describe your main health concern…" value={form.complaint} onChange={handleChange} required />
                </Field>
                <Field label="Current Medications (Optional)">
                  <textarea name="medications" rows={3} placeholder="List any medications you're currently taking" value={form.medications} onChange={handleChange} />
                </Field>
                <Field label="Known Allergies (Optional)">
                  <textarea name="allergies" rows={3} placeholder="List any allergies" value={form.allergies} onChange={handleChange} />
                </Field>
                <Field label="Previous Treatments Tried (Optional)">
                  <textarea name="previousTreatments" rows={3} placeholder="Have you tried any treatments for this condition?" value={form.previousTreatments} onChange={handleChange} />
                </Field>
                <Field label="How did you hear about us?">
                  <select name="hearAboutUs" value={form.hearAboutUs} onChange={handleChange}>
                    <option value="">Select one</option>
                    {['Google','Social Media','Friend/Family','Doctor Referral','Other'].map(option => <option key={option}>{option}</option>)}
                  </select>
                </Field>
                <Field label="Special Requests or Questions (Optional)">
                  <textarea name="specialRequests" rows={3} placeholder="Any special requests or questions for us?" value={form.specialRequests} onChange={handleChange} />
                </Field>

                <div className="checkboxes">
                  <label className="chk"><input type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handleChange} required /> I agree to the terms and conditions <span className="req">*</span></label>
                  <label className="chk"><input type="checkbox" name="agreeContact" checked={form.agreeContact} onChange={handleChange} required /> I consent to being contacted via email and phone <span className="req">*</span></label>
                </div>

                <button type="submit" className="btn-primary submit-btn">Submit Consultation Request</button>
              </form>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="sidebar">
            <div className="sidebar-card">
              <h3>What to Expect</h3>
              {[
                { title:'Quick Response',  desc:"We'll contact you within 24 hours to confirm your appointment" },
                { title:'Consultation',    desc:'Comprehensive assessment of your health and wellness needs' },
                { title:'Treatment Plan',  desc:'Personalised therapy recommendations tailored to you' },
              ].map((item, i) => (
                <div className="expect-row" key={i}>
                  <CheckCircle size={22} color="var(--teal)" />
                  <div><strong>{item.title}</strong><p>{item.desc}</p></div>
                </div>
              ))}
            </div>

            <div className="sidebar-card">
              <h3>Contact Us</h3>
              <div className="contact-rows">
                <div className="c-row"><Phone size={17} color="var(--teal)" /><div><span>Call us</span><strong>+234 703 303 0833</strong><strong>+234 703 303 0833</strong></div></div>
                <div className="c-row"><Mail  size={17} color="var(--teal)" /><div><span>Email us</span><strong>Aequilibritherapies@gmail.com</strong></div></div>
                <div className="c-row">
                  <Clock size={17} color="var(--teal)" />
                  <div>
                    <span>Business Hours</span>
                    <strong>Mon–Sat: 9:00 AM – 5:00 PM</strong>
                    <span>Sunday: Closed</span>
                    <em className="appt-only">By Appointment Only</em>
                  </div>
                </div>
                <div className="c-row"><MapPin size={17} color="var(--teal)" /><div><span>Location</span><strong>Maccido Royal Estate, Galadimawa, Abuja, Nigeria</strong></div></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default BookSession
