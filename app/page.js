import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  UserRound,
  ArrowRight,
  Phone,
  Sparkles,
  House,
  UsersRound,
  Accessibility,
  ClipboardCheck,
  UserRoundCheck,
  CalendarCheck,
  HandHeart,
  Gem,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

const services = [
  {
    slug: "personal-care",
    icon: <UserRound size={21} />,
    title: "Personal Care",
    description: "Support with daily living activities while maintaining your privacy and dignity.",
    items: ["Bathing & hygiene", "Dressing & grooming", "Toileting & incontinence care", "Mobility & transfers"],
  },
  {
    slug: "companionship",
    icon: <HeartHandshake size={21} />,
    title: "Companionship",
    description: "Meaningful conversation, activities and social engagement.",
    items: ["Conversation & visits", "Reading & music", "Games & puzzles", "Outdoor walks"],
  },
  {
    slug: "light-housekeeping",
    icon: <House size={21} />,
    title: "Light Housekeeping",
    description: "A clean, safe and comfortable home with thoughtful help around the house.",
    items: ["Laundry", "Sweeping & mopping", "Kitchen care", "Bed & linen changes"],
  },
  {
    slug: "respite-care",
    icon: <HandHeart size={21} />,
    title: "Respite Care",
    description: "Giving family caregivers time to rest while loved ones receive dependable support.",
    items: ["Family caregiver relief", "Scheduled companionship", "Short-term assistance", "Flexible visits"],
  },
];

const benefits = [
  {
    icon: <HeartHandshake size={19} />,
    title: "Compassion",
    text: "We treat every client with kindness and respect.",
  },
  {
    icon: <ShieldCheck size={19} />,
    title: "Reliability",
    text: "Families can count on dependable, professional care.",
  },
  {
    icon: <Accessibility size={19} />,
    title: "Safety",
    text: "We prioritize a safe environment and mobility.",
  },
  {
    icon: <Gem size={19} />,
    title: "Dignity",
    text: "We respect independence, privacy and choice.",
  },
];

const steps = [
  {
    number: "01",
    icon: <Phone size={18} />,
    title: "Contact Us",
    text: "Tell us about your needs and preferences.",
  },
  {
    number: "02",
    icon: <ClipboardCheck size={18} />,
    title: "Care Assessment",
    text: "We learn about your routine, needs and support goals.",
  },
  {
    number: "03",
    icon: <UserRoundCheck size={18} />,
    title: "Personalized Care Plan",
    text: "We create a plan tailored to your unique needs.",
  },
  {
    number: "04",
    icon: <CalendarCheck size={18} />,
    title: "Care Begins",
    text: "A suitable caregiver provides compassionate support at home.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">COMPASSIONATE • RELIABLE • PROFESSIONAL</span>
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
              <span><HeartHandshake size={16} /> Non-medical care</span>
              <span><Sparkles size={16} /> Personalized support</span>
              <span><UsersRound size={16} /> Kingston team</span>
            </div>
          </div>
          <div className="hero-photo" aria-label="Caregiver supporting an elderly client" />
        </div>
      </section>

      <section className="section care-section">
        <div className="container">
          <SectionHeading
            eyebrow="CARE DESIGNED AROUND YOU"
            title="Care that fits your life"
            text="Every person has different needs. Our caregivers provide personalized support that respects your routines, preferences and independence."
          />
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-grid">
          <div className="why-photo" aria-label="Caregiver sharing a moment with an elderly client" />
          <div className="why-copy">
            <span className="eyebrow">WHY CHOOSE CREATIVA CARE?</span>
            <h2>Care built around people, not routines.</h2>
            <p>
              We believe good home care is about more than completing tasks. It
              is about listening, respecting choices and helping people stay
              connected to the life they love.
            </p>
            <div className="benefits">
              {benefits.map((benefit) => (
                <div className="benefit" key={benefit.title}>
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading
            eyebrow="HOW OUR CARE WORKS"
            title="Simple, supportive and stress-free"
            text="Getting started is simple. We make the process easy so you can focus on what matters."
          />
          <div className="process-grid">
            {steps.map((step, index) => (
              <div className="process-card" key={step.number}>
                <div className="process-top">
                  <span className="step">{step.number}</span>
                  <span className="process-icon">{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {index < steps.length - 1 && <span className="process-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section family-section">
        <div className="container">
          <div className="family-strip">
            <div className="family-img" aria-label="Caregiver helping an elderly family member" />
            <div className="family-copy">
              <span className="eyebrow">CARE FOR THE WHOLE FAMILY</span>
              <h3>You don't have to provide all the care alone.</h3>
              <p>
                Creativa Care offers respite, companionship and daily support so
                your loved one can remain safe, comfortable and independent.
              </p>
              <div className="family-points">
                <span><HeartHandshake size={15} /> Compassionate support</span>
                <span><ShieldCheck size={15} /> Reliable care</span>
                <span><UsersRound size={15} /> Family peace of mind</span>
              </div>
              <Link className="btn" href="/for-families">
                Talk to Our Team <ArrowRight size={15} />
              </Link>
            </div>
            <div className="stat-box">
              <div className="stat-item">
                <strong>100+</strong>
                <span>Happy clients</span>
              </div>
              <div className="stat-item">
                <strong>5+</strong>
                <span>Years of service</span>
              </div>
              <div className="stat-item">
                <strong>Kingston</strong>
                <span>& surrounding areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
