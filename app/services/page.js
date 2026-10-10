export const metadata = {
  title: "Non-Medical Home Care Services in Kingston",
  description:
    "Explore Creativa Care services in Kingston, Ontario: personal care, companionship, light housekeeping and respite support tailored to everyday needs.",
  alternates: { canonical: "/services/" },
};

import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import { UserRound, HeartHandshake, Home, Heart } from "lucide-react";
const list = [
  {
    slug: "personal-care",
    icon: <UserRound />,
    title: "Personal Care",
    description: "Respectful assistance with activities of daily living.",
    items: [
      "Bathing & hygiene",
      "Dressing & grooming",
      "Toileting & incontinence",
      "Mobility & transfers",
    ],
  },
  {
    slug: "companionship",
    icon: <HeartHandshake />,
    title: "Companionship",
    description:
      "Meaningful human connection, activities and gentle social engagement.",
    items: [
      "Conversation & visits",
      "Reading & music",
      "Games & puzzles",
      "Outdoor walks",
    ],
  },
  {
    slug: "light-housekeeping",
    icon: <Home />,
    title: "Light Housekeeping",
    description: "Routine household support that keeps the home comfortable.",
    items: [
      "Laundry",
      "Sweeping & mopping",
      "Kitchen maintenance",
      "Bed & linen changes",
    ],
  },
  {
    slug: "respite-care",
    icon: <Heart />,
    title: "Respite Care",
    description:
      "Flexible relief for family caregivers who need time to recharge.",
    items: [
      "Family caregiver relief",
      "Scheduled companionship",
      "Short-term assistance",
      "Flexible care visits",
    ],
  },
];
export default function Services() {
  return (
    <>
      <section className="page-hero services-page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#c6e8df" }}>
            WHAT WE DO
          </span>
          <h1>Our Services</h1>
          <p>Personalized support for a better everyday life.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Comprehensive Non-Medical Care"
            text="We specialize in non-medical assistance designed to support daily living, encourage meaningful connection and maintain a safe, comfortable home."
          />
          <div className="service-grid">
            {list.map((x) => (
              <ServiceCard key={x.slug} {...x} />
            ))}
          </div>
        </div>
      </section>
      <section className="section personalized-care-section">
        <div className="container">
          <div className="personalized-care-card">
            <div className="personalized-care-photo" role="img" aria-label="A caregiver spending time with an older adult" />
            <div className="personalized-care-copy">
              <span className="eyebrow">CARE THAT FITS YOUR LIFE</span>
              <h2>Personalized Care Plans</h2>
              <p>Every client is unique. We create care plans tailored to your specific needs, preferences and lifestyle.</p>
              <a className="btn btn-small" href="/contact">Get Started</a>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
