export const metadata = {
  title: "About Creativa Care",
  description:
    "Learn about Creativa Care's mission to support dignity, independence and comfort through personalized non-medical home care in Kingston, Ontario.",
  alternates: { canonical: "/about/" },
};

import {
  HeartHandshake,
  ShieldCheck,
  HandHeart,
  Compass,
  Heart,
  CircleUserRound,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import CTA from "@/components/CTA";

const coreValues = [
  { icon: Heart, label: "Compassion", tone: "coral" },
  { icon: HandHeart, label: "Dignity", tone: "cyan" },
  { icon: HeartHandshake, label: "Reliability", tone: "green" },
  { icon: ShieldCheck, label: "Safety", tone: "blue" },
];

export default function About() {
  return (
    <main className="about-reference-page">
      <section className="about-reference-hero">
        <div className="about-reference-hero-image" />
        <div className="about-reference-hero-overlay" />
        <div className="about-reference-hero-copy">
          <h1>About Us</h1>
          <p>Compassion. Dignity. Independence.</p>
          <div className="about-reference-hero-meta"><span><MapPin size={14} /> Kingston, Ontario</span><span><Phone size={14} /> 613-583-7320</span></div>
        </div>
      </section>

      <section className="about-reference-content">
        <div className="about-reference-story">
          <h2>Our Story</h2>
          <p>
            Creativa Care was founded with a simple belief — that everyone
            deserves to age with dignity, comfort and independence. We saw a
            growing need in our community for reliable, non-medical home care
            services that truly put people first.
          </p>
          <p>
            Today, we are proud to support seniors and individuals in Kingston
            and the surrounding areas, helping them live safely and comfortably
            in the place they love most — their home.
          </p>
          <div className="about-reference-map">
            <iframe
              title="Map showing Creativa Care's service area in Kingston, Ontario"
              src="https://maps.google.com/maps?q=162%20Briceland%2C%20Kingston%2C%20ON&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="about-reference-map-link"
              href="https://www.google.com/maps/search/?api=1&query=162%20Briceland%2C%20Kingston%2C%20ON"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={15} /> Explore Kingston on Maps <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="about-reference-contact-note">
            <span className="about-reference-contact-icon"><MapPin size={17} /></span>
            <span><strong>Rooted in the Kingston community</strong><small>Serving Kingston and surrounding areas</small></span>
            <a href="/contact" aria-label="Contact Creativa Care"><ArrowUpRight size={17} /></a>
          </div>
        </div>

        <aside className="about-reference-principles" aria-label="Our mission, vision and core values">
          <section className="about-reference-principle">
            <span className="about-reference-principle-icon"><CircleUserRound size={23} /></span>
            <div>
              <h3>Our Mission</h3>
              <p>
                To deliver compassionate, high-quality, non-medical home care
                services that empower clients to maintain their independence,
                dignity and comfort within their own homes.
              </p>
            </div>
          </section>

          <section className="about-reference-principle">
            <span className="about-reference-principle-icon"><Compass size={23} /></span>
            <div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and reliable provider of home support
                and companionship in Kingston and surrounding regions,
                recognised for our person-centred approach and dedication to
                community wellbeing.
              </p>
            </div>
          </section>

          <section className="about-reference-values">
            <div className="about-reference-values-heading">
              <span className="about-reference-principle-icon"><HandHeart size={23} /></span>
              <h3>Our Core Values</h3>
            </div>
            <ul>
              {coreValues.map(({ icon: Icon, label, tone }) => (
                <li key={label}>
                  <span className={`about-reference-value-icon ${tone}`}><Icon size={14} fill="currentColor" /></span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </section>

      <CTA />
    </main>
  );
}
