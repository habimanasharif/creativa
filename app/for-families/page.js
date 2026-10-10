export const metadata = {
  title: "Support for Family Caregivers in Kingston",
  description:
    "Discover how Creativa Care helps families in Kingston, Ontario with respite support, companionship and everyday non-medical care for loved ones.",
  alternates: { canonical: "/for-families/" },
};

import Link from "next/link";
import CTA from "@/components/CTA";
const cards = [
  [
    "♡",
    "Respite for Family Caregivers",
    "Time to rest and recharge while your loved one receives support.",
  ],
  [
    "◉",
    "Regular Companionship",
    "Prevent isolation with scheduled visits and meaningful activities.",
  ],
  [
    "♧",
    "Assistance with Daily Activities",
    "Practical support with everyday routines.",
  ],
  [
    "⌂",
    "Keep Loved Ones at Home",
    "Support independence in familiar surroundings.",
  ],
];
export default function Families() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#c6e8df" }}>
            FOR FAMILIES
          </span>
          <h1>You’re not alone in this.</h1>
          <p>
            Helping families share the responsibility of care without losing the
            joy of being family.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">PEACE OF MIND</span>
            <h2>You don't have to provide all the care alone.</h2>
            <p>
              Supporting a loved one can be rewarding, but it can also be
              challenging. Creativa Care provides dependable non-medical support
              so families can reduce stress and focus on their relationship.
            </p>
          </div>
          <div className="service-grid">
            {cards.map((c) => (
              <div className="service-card" key={c[1]}>
                <div className="service-icon">{c[0]}</div>
                <h3>{c[1]}</h3>
                <p>{c[2]}</p>
              </div>
            ))}
          </div>
          <div className="notice">
            <strong>Every family is different.</strong>
            <br />
            We can discuss your schedule, your loved one's preferences and the
            type of support that would be most helpful.
          </div>
          <div className="center">
            <Link className="btn" href="/contact">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
