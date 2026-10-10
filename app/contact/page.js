"use client";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import CTA from "@/components/CTA";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="page-hero contact-page-hero contact-redesign-hero">
        <div className="container">
          <span className="eyebrow">LET'S CONNECT</span>
          <h1>Contact Us</h1>
          <p>We’re here to help you find the right care.</p>
        </div>
      </section>

      <section className="section contact-redesign-section">
        <div className="container contact-redesign-grid">
          <div className="contact-form-panel">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Let’s Talk About Care</h2>
            <p className="contact-intro">
              We’d love to hear from you. Whether you have questions, need
              support, or want to learn more about our services, we’re here to
              help. Fill out the form below and we’ll get back to you soon.
            </p>

            {sent ? (
              <div className="contact-success" role="status">
                <CheckCircle2 size={42} />
                <h3>Thank you for reaching out.</h3>
                <p>
                  Your message has been recorded in this demo. Please connect
                  the form to your email or CRM before launch.
                </p>
                <button className="btn" onClick={() => setSent(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="contact-redesign-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <div className="contact-form-fields">
                  <div className="field contact-field-full">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input id="contact-name" name="name" required placeholder="Your full name" autoComplete="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input id="contact-email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-phone">Phone Number *</label>
                    <input id="contact-phone" name="phone" type="tel" required placeholder="(XXX) XXX-XXXX" autoComplete="tel" />
                  </div>
                  <div className="field contact-field-full">
                    <label htmlFor="contact-care">How can we help? *</label>
                    <select id="contact-care" name="care" required defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option>Personal Care</option>
                      <option>Companionship</option>
                      <option>Light Housekeeping</option>
                      <option>Respite Care</option>
                      <option>Care Assessment</option>
                      <option>Caregiver Opportunities</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="field contact-field-full">
                    <label htmlFor="contact-message">Message *</label>
                    <textarea id="contact-message" name="message" required placeholder="Tell us a little more about what you’re looking for..." />
                  </div>
                  <div className="contact-field-full">
                    <button className="btn contact-submit" type="submit">
                      <Mail size={18} /> Send Message
                    </button>
                    <p className="contact-privacy-note">Your information will only be used to respond to your inquiry.</p>
                  </div>
                </div>
              </form>
            )}
          </div>

          <aside className="contact-info-panel" aria-label="Contact information">
            <a className="contact-info-card" href="tel:+16135837320">
              <span className="contact-info-icon"><Phone size={23} /></span>
              <span className="contact-info-copy">
                <strong>Call Us</strong>
                <span>613-583-7320</span>
              </span>
              <ArrowUpRight className="contact-info-arrow" size={18} />
            </a>
            <a className="contact-info-card" href="mailto:info@creativacare.ca">
              <span className="contact-info-icon"><Mail size={23} /></span>
              <span className="contact-info-copy">
                <strong>Email Us</strong>
                <span>info@creativacare.ca</span>
              </span>
              <ArrowUpRight className="contact-info-arrow" size={18} />
            </a>
            <div className="contact-info-card contact-office-card">
              <span className="contact-info-icon"><MapPin size={23} /></span>
              <span className="contact-info-copy">
                <strong>Office</strong>
                <span>Kingston, Ontario</span>
                <small>By appointment</small>
              </span>
            </div>

            <div className="contact-social-block">
              <h3>Connect With Us</h3>
              <div className="contact-social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              </div>
            </div>

            <div className="contact-map-card">
              <iframe
                title="Map showing Kingston, Ontario"
                src="https://www.google.com/maps?q=Kingston%2C%20Ontario&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href="https://www.google.com/maps/search/?api=1&query=Kingston%2C%20Ontario" target="_blank" rel="noreferrer" className="contact-map-link">
                <MapPin size={17} /> View on Google Maps <ArrowUpRight size={15} />
              </a>
            </div>
          </aside>
        </div>
      </section>
      <CTA />
    </>
  );
}
