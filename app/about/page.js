import CTA from "@/components/CTA";
import Link from "next/link";
export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#c6e8df" }}>
            CREATIVA CARE
          </span>
          <h1>About Us</h1>
          <p>Compassion. Dignity. Independence.</p>
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <img
            src="https://images.unsplash.com/photo-1559234938-b60fff04894d?auto=format&fit=crop&w=1000&q=85"
            alt="Caregiver supporting senior"
          />
          <div className="content">
            <span className="eyebrow">OUR STORY</span>
            <h2>Helping people live well at home.</h2>
            <p>
              Creativa Care is a non-medical home care agency focused on helping
              seniors and individuals receive dependable support in familiar
              surroundings.
            </p>
            <p>
              Our approach combines practical assistance with meaningful human
              connection, while respecting each client's routines, choices and
              dignity.
            </p>
            <Link className="btn" href="/contact">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "#fff" }}>
        <div className="container content-grid">
          <div className="content">
            <span className="eyebrow">MISSION & VISION</span>
            <h2>A person-centered approach.</h2>
            <p>
              <strong>Mission:</strong> To deliver compassionate, high-quality
              non-medical home care that empowers clients to maintain
              independence, dignity and comfort.
            </p>
            <p>
              <strong>Vision:</strong> To be a trusted provider of home support
              and companionship in Kingston and surrounding communities.
            </p>
            <div className="values">
              <div className="value">
                <strong>Compassion</strong>
                <span>Treating every client with empathy and kindness.</span>
              </div>
              <div className="value">
                <strong>Dignity</strong>
                <span>Respecting autonomy, privacy and self-esteem.</span>
              </div>
              <div className="value">
                <strong>Reliability</strong>
                <span>Providing dependable and professional support.</span>
              </div>
              <div className="value">
                <strong>Safety</strong>
                <span>Supporting a secure home environment.</span>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=85"
            alt="Community and care"
          />
        </div>
      </section>
      <CTA />
    </>
  );
}
