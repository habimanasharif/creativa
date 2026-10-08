"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import CTA from "@/components/CTA";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="page-hero contact-page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#c6e8df" }}>
            LET'S CONNECT
          </span>
          <h1>Contact Us</h1>
          <p>Tell us what you need and let's talk about the next step.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <span className="eyebrow">CREATIVA CARE</span>
            <h2 style={{ fontFamily: "Playfair Display", fontSize: 35 }}>
              We're here to help.
            </h2>
            <p className="muted">
              Contact us for a consultation, care questions or caregiver
              opportunities.
            </p>
            <div className="contact-item">
              <div className="service-icon">
                <MapPin size={18} />
              </div>
              <div>
                <strong>Office</strong>
                <br />
                <span className="muted">162 Briceland, Kingston, ON</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="service-icon">
                <Phone size={18} />
              </div>
              <div>
                <strong>Phone</strong>
                <br />
                <a href="tel:+16135837320">613-583-7320</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="service-icon">
                <Mail size={18} />
              </div>
              <div>
                <strong>Email</strong>
                <br />
                <a href="mailto:info@creativacare.ca">info@creativacare.ca</a>
              </div>
            </div>
            <div className="notice">
              Service area: Kingston and surrounding areas.
            </div>
          </div>
          <div className="form-card">
            {sent ? (
              <div className="center" style={{ padding: "60px 20px" }}>
                <div className="service-icon" style={{ margin: "0 auto 15px" }}>
                  ✓
                </div>
                <h2 style={{ fontFamily: "Playfair Display" }}>Thank you.</h2>
                <p className="muted">
                  Your request has been received in this demo. Connect the form
                  to your email/CRM before launch.
                </p>
                <button className="btn" onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="form-grid">
                  <div className="field">
                    <label>FULL NAME</label>
                    <input required placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label>PHONE</label>
                    <input required placeholder="613-..." />
                  </div>
                  <div className="field">
                    <label>EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="field">
                    <label>CARE NEEDED</label>
                    <select>
                      <option>Personal Care</option>
                      <option>Companionship</option>
                      <option>Light Housekeeping</option>
                      <option>Respite Care</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label>PREFERRED CONTACT METHOD</label>
                    <select>
                      <option>Phone</option>
                      <option>Email</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label>MESSAGE</label>
                    <textarea
                      required
                      placeholder="Tell us a little about your needs..."
                    />
                  </div>
                  <div className="field full">
                    <button className="btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
