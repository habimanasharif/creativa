import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/data";
import CTA from "@/components/CTA";
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Service Not Found", robots: { index: false, follow: true } };
  return {
    title: `${service.title} in Kingston, Ontario`,
    description: `${service.description} Explore personalized non-medical ${service.title.toLowerCase()} from Creativa Care in Kingston, Ontario.`,
    alternates: { canonical: `/services/${slug}/` },
  };
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return notFound();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#c6e8df" }}>
            OUR SERVICES
          </span>
          <h1>{service.title}</h1>
          <p>{service.subtitle}</p>
        </div>
      </section>
      <section className="section">
        <div className="container service-detail">
          <div className="content">
            <span className="eyebrow">PERSON-CENTERED SUPPORT</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p>
              Our goal is to provide practical assistance in a way that respects
              the client's preferences, privacy, routines and independence.
            </p>
            <h3>What we can help with</h3>
            <ul className="check-list">
              {service.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <Link className="btn" href="/contact">
              Request Care <ArrowRight size={16} />
            </Link>
          </div>
          <aside className="service-detail-card">
            <div className="service-icon">{service.icon}</div>
            <h3>Ready to talk?</h3>
            <p className="muted">
              Tell us what support you or your loved one needs and our team can
              discuss the next step.
            </p>
            <Link className="btn" href="/contact">
              Get Started
            </Link>
            <Link
              className="btn btn-outline"
              href="/services"
              style={{ marginTop: 10 }}
            >
              <ArrowLeft size={15} /> All Services
            </Link>
          </aside>
        </div>
      </section>
      <CTA />
    </>
  );
}
