import Link from "next/link";
import CTA from "@/components/CTA";
const jobs = [
  [
    "Personal Support Worker (PSW)",
    "Support clients with daily living, personal routines and companionship.",
  ],
  [
    "Companion / Caregiver",
    "Provide meaningful companionship, activities and household support.",
  ],
  [
    "Housekeeping Support",
    "Help maintain clean, comfortable and organized homes.",
  ],
];
export default function Careers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#c6e8df" }}>
            JOIN OUR TEAM
          </span>
          <h1>Careers</h1>
          <p>
            Make a difference by providing compassionate support in the
            community.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHY WORK WITH US?</span>
            <h2>Care is about people.</h2>
            <p>
              Creativa Care values caregivers who are compassionate, reliable,
              respectful and committed to person-centered support.
            </p>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <h3>Competitive Pay</h3>
              <p>
                We aim to build a supportive environment for dependable
                caregivers.
              </p>
            </div>
            <div className="service-card">
              <h3>Ongoing Training</h3>
              <p>Continuous learning supports safe and professional care.</p>
            </div>
            <div className="service-card">
              <h3>Supportive Team</h3>
              <p>Work with people who value communication and respect.</p>
            </div>
            <div className="service-card">
              <h3>Make an Impact</h3>
              <p>
                Your work can help someone remain comfortable and independent at
                home.
              </p>
            </div>
          </div>
          <h2 style={{ fontFamily: "Playfair Display", marginTop: 55 }}>
            Current Positions
          </h2>
          <div className="career-grid">
            {jobs.map((j) => (
              <div className="job-card" key={j[0]}>
                <h3>{j[0]}</h3>
                <p>{j[1]}</p>
                <Link className="btn btn-outline" href="/contact">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
          <div className="notice">
            <strong>Don't see the right role?</strong>
            <br />
            Send us your details through the contact page and tell us how you
            would like to contribute.
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
