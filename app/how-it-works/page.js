import Link from "next/link";
import CTA from "@/components/CTA";
const steps = [
  [
    "01",
    "Contact Us",
    "Call or send an online consultation request and tell us what kind of support you are looking for.",
  ],
  [
    "02",
    "Care Assessment",
    "We learn about routines, preferences, goals, schedule and support requirements.",
  ],
  [
    "03",
    "Personalized Care Plan",
    "We build a practical plan around the individual and their household.",
  ],
  [
    "04",
    "Care Begins",
    "A suitable caregiver provides dependable, compassionate support in the home.",
  ],
];
export default function HowItWorks() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#c6e8df" }}>
            THE PROCESS
          </span>
          <h1>How It Works</h1>
          <p>
            A simple, supportive journey from your first conversation to ongoing
            care.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="process-grid">
            {steps.map((s) => (
              <div className="process-card" key={s[0]}>
                <span className="step">{s[0]}</span>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
              </div>
            ))}
          </div>
          <div className="notice" style={{ marginTop: 45 }}>
            <strong>Need help now?</strong>
            <br />
            Call 613-583-7320 or send us a contact form and we will discuss the
            next step with you.
          </div>
          <div className="center">
            <Link className="btn" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
