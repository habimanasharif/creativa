import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  UserRound,
  ArrowRight,
  Phone,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

const services = [
  {
    slug: "personal-care",
    icon: <UserRound />,
    title: "Personal Care",
    description:
      "Support with everyday living while protecting privacy and dignity.",
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
    description: "Meaningful conversation, activities and social engagement.",
    items: [
      "Conversation",
      "Reading & music",
      "Games & puzzles",
      "Outdoor walks",
    ],
  },
  {
    slug: "light-housekeeping",
    icon: <ShieldCheck />,
    title: "Light Housekeeping",
    description:
      "A clean, safe and comfortable home with help around the house.",
    items: [
      "Laundry",
      "Sweeping & mopping",
      "Kitchen care",
      "Bed & linen changes",
    ],
  },
  {
    slug: "respite-care",
    icon: <HeartHandshake />,
    title: "Respite Care",
    description:
      "Giving family caregivers time to rest while loved ones receive support.",
    items: [
      "Family caregiver relief",
      "Scheduled companionship",
      "Short-term assistance",
      "Flexible visits",
    ],
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              COMPASSIONATE • RELIABLE • PROFESSIONAL
            </span>
            <h1>
              Compassionate Care.
              <br />
              Comfort at Home.
            </h1>
            <p>
              Personalized, non-medical home care and companionship for seniors
              and individuals who value their independence, dignity and comfort.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/contact">
                Get Started <ArrowRight size={16} />
              </Link>
              <a className="btn btn-outline" href="tel:+16135837320">
                <Phone size={16} /> Call 613-583-7320
              </a>
            </div>
            <div className="hero-trust">
              <span>♡ Non-medical care</span>
              <span>✣ Personalized support</span>
              <span>♧ Kingston team</span>
            </div>
          </div>
          <div className="hero-photo" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="CARE DESIGNED AROUND YOU"
            title="Care that fits your life"
            text="Every person has different needs. Our caregivers provide personalized support that respects your routines, preferences and independence."
          />
          <div className="service-grid">
            {services.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>
      <section className="split-section">
        <div className="split-grid">
          <div className="split-photo" />
          <div className="split-copy">
            <span className="eyebrow" style={{ color: "#bde4db" }}>
              WHY CREATIVA CARE?
            </span>
            <h2>Support that feels personal.</h2>
            <p>
              We believe good home care is about more than completing tasks. It
              is about listening, respecting choices and helping people stay
              connected to the life they love.
            </p>
            <div className="benefits">
              <div className="benefit">
                <h4>♡ Compassion</h4>
                <p>We treat every client with kindness and respect.</p>
              </div>
              <div className="benefit">
                <h4>◉ Reliability</h4>
                <p>Families can count on dependable support.</p>
              </div>
              <div className="benefit">
                <h4>◈ Safety</h4>
                <p>We prioritize a safe environment and mobility.</p>
              </div>
              <div className="benefit">
                <h4>♧ Dignity</h4>
                <p>We respect independence, privacy and choice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="HOW OUR CARE WORKS"
            title="Simple, supportive and stress-free"
            text="Getting started is simple. We make the process easy so you can focus on what matters."
          />
          <div className="process-grid">
            {[
              ["01", "Contact Us", "Tell us about your needs and preferences."],
              [
                "02",
                "Care Assessment",
                "We learn about your routine, needs and support goals.",
              ],
              [
                "03",
                "Personalized Care Plan",
                "We create a plan tailored to your unique needs.",
              ],
              [
                "04",
                "Care Begins",
                "A suitable caregiver provides compassionate support at home.",
              ],
            ].map((x) => (
              <div className="process-card" key={x[0]}>
                <span className="step">{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="family-strip">
            <div className="family-img" />
            <div>
              <span className="eyebrow">CARE FOR THE WHOLE FAMILY</span>
              <h3>You don't have to provide all the care alone.</h3>
              <p>
                Creativa Care offers respite, companionship and daily support so
                your loved one can remain safe, comfortable and independent.
              </p>
              <Link className="btn" href="/for-families">
                Talk to Our Team <ArrowRight size={15} />
              </Link>
            </div>
            <div className="stat-box">
              <strong>Kingston</strong>
              <span>and surrounding areas</span>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
