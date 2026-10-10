import CTA from "@/components/CTA";
import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  HandHeart,
  ArrowRight,
  Check,
  UsersRound,
  House,
  Heart,
} from "lucide-react";

const values = [
  {
    icon: <HeartHandshake size={22} />,
    title: "Compassion first",
    text: "We lead with kindness, patience and genuine human connection.",
    tone: "mint",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Trust and reliability",
    text: "Families deserve dependable support and clear communication.",
    tone: "sand",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Dignity and choice",
    text: "Every person’s preferences, privacy and independence matter.",
    tone: "rose",
  },
  {
    icon: <HandHeart size={22} />,
    title: "Care made personal",
    text: "Support is shaped around each client’s routines and goals.",
    tone: "blue",
  },
];

export default function About() {
  return (
    <>
      <section className="about-redesign-hero">
        <div className="about-hero-image" role="img" aria-label="A caregiver warmly supporting an older adult at home" />
        <div className="about-hero-shade" />
        <div className="container about-hero-content">
          <span className="eyebrow">GET TO KNOW CREATIVA CARE</span>
          <h1>Care that feels like <em>family.</em></h1>
          <p>
            Helping people feel safe, supported and at home—with care built
            around who they are, not just what they need.
          </p>
          <Link className="btn about-hero-button" href="/contact">
            Meet Your Care Team <ArrowRight size={16} />
          </Link>
        </div>
        <div className="about-hero-note">
          <span className="about-note-icon"><Heart size={18} fill="currentColor" /></span>
          <span><strong>People first, always</strong><small>Compassionate non-medical home care</small></span>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-visual">
            <img
              src="https://images.unsplash.com/photo-1559234938-b60fff04894d?auto=format&fit=crop&w=1100&q=85"
              alt="Caregiver spending time with an older adult"
            />
            <div className="about-story-stamp">
              <HeartHandshake size={25} />
              <span>Care with<br />heart and purpose</span>
            </div>
          </div>
          <div className="about-story-copy">
            <span className="eyebrow">OUR STORY</span>
            <h2>Helping you live well, right where you belong.</h2>
            <p>
              Home is more than a place. It’s familiar routines, favourite
              comforts and the freedom to live life your own way. Creativa Care
              exists to help people hold on to those things for as long as
              possible.
            </p>
            <p>
              We provide non-medical home care and companionship for seniors
              and individuals who benefit from an extra helping hand. Our
              approach brings practical support together with patience,
              respect and meaningful connection.
            </p>
            <div className="about-story-points">
              <span><Check size={17} /> Support tailored to each person</span>
              <span><Check size={17} /> Respect for routines and independence</span>
              <span><Check size={17} /> A trusted local focus in Kingston, Ontario</span>
            </div>
            <Link className="about-text-link" href="/services">
              Explore our services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section about-purpose-section">
        <div className="container">
          <div className="about-purpose-heading">
            <span className="eyebrow">OUR PURPOSE</span>
            <h2>Good care starts with seeing the person.</h2>
            <p>
              Our mission and vision guide every visit, every conversation and
              every care plan.
            </p>
          </div>
          <div className="about-purpose-grid">
            <article className="about-purpose-card about-mission-card">
              <span className="about-purpose-icon"><HeartHandshake size={24} /></span>
              <span className="eyebrow">OUR MISSION</span>
              <h3>Make everyday life feel more supported.</h3>
              <p>
                To deliver compassionate, dependable non-medical home care
                that protects dignity, nurtures independence and brings peace
                of mind to clients and families.
              </p>
            </article>
            <article className="about-purpose-card about-vision-card">
              <span className="about-purpose-icon"><House size={24} /></span>
              <span className="eyebrow">OUR VISION</span>
              <h3>A community where people can thrive at home.</h3>
              <p>
                To be a trusted home-support partner in Kingston and
                surrounding communities, known for thoughtful care and
                meaningful relationships.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-values-section">
        <div className="container">
          <div className="about-values-heading">
            <div>
              <span className="eyebrow">WHAT MATTERS TO US</span>
              <h2>The values behind every visit.</h2>
            </div>
            <p>
              The little things—listening closely, arriving reliably and
              respecting each person’s choices—make a real difference.
            </p>
          </div>
          <div className="about-values-grid">
            {values.map((value) => (
              <article className={`about-value-card about-value-${value.tone}`} key={value.title}>
                <span className="about-value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-community-section">
        <div className="container about-community-grid">
          <div className="about-community-copy">
            <span className="eyebrow">CARE IS A TEAM EFFORT</span>
            <h2>Supporting the whole family, not just the to-do list.</h2>
            <p>
              When a loved one needs extra support, families need support too.
              We work to make day-to-day life feel more manageable with
              thoughtful assistance, companionship and respite for family
              caregivers.
            </p>
            <Link className="btn" href="/for-families">
              How We Support Families <ArrowRight size={16} />
            </Link>
          </div>
          <div className="about-community-photo" role="img" aria-label="Caregiver and older adult sharing a warm moment" />
          <div className="about-community-badge">
            <UsersRound size={20} />
            <span><strong>Care, together</strong><small>For clients and families</small></span>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
