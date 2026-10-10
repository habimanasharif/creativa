import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  HandHeart,
  Compass,
  Heart,
  Shield,
  CircleUserRound,
} from "lucide-react";

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
          <img
            className="about-reference-kingston"
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=85"
            alt="Waterfront cityscape with historic buildings"
          />
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
    </main>
  );
}
