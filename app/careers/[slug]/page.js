import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, MapPin } from "lucide-react";
import { jobs, getJobBySlug } from "@/data/careers";
import CareerApplicationForm from "@/components/CareerApplicationForm";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) {
    return { title: "Job Not Found", robots: { index: false, follow: true } };
  }
  return {
    title: `${job.title} | Careers`,
    description: job.summary,
    alternates: { canonical: `/careers/${job.slug}/` },
  };
}

export default async function CareerJobPage({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <>
      <section className="careers-detail-hero">
        <div className="container">
          <Link href="/careers" className="careers-back-link"><ArrowLeft size={16} /> All careers</Link>
          <span className="eyebrow">CAREER OPPORTUNITY</span>
          <h1>{job.title}</h1>
          <p>{job.summary}</p>
          <div className="careers-detail-meta">
            <span><BriefcaseBusiness size={16} /> {job.type}{job.workArrangement ? ` · ${job.workArrangement}` : ""}</span>
            <span><MapPin size={16} /> {job.location}</span>
          </div>
        </div>
      </section>

      <section className="section careers-detail-section">
        <div className="container careers-detail-layout">
          <article className="careers-detail-content">
            <div className="careers-detail-block">
              <span className="eyebrow">THE OPPORTUNITY</span>
              <h2>About the role</h2>
              <p>{job.roleDescription}</p>
            </div>

            {job.companyDescription && (
              <div className="careers-detail-block">
                <h2>About Creativa Care</h2>
                <p>{job.companyDescription}</p>
              </div>
            )}

            {job.responsibilities?.length > 0 && (
              <div className="careers-detail-block">
                <h2>Key responsibilities</h2>
                <ul className="careers-detail-list">
                  {job.responsibilities.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            )}

            {job.qualifications?.length > 0 && (
              <div className="careers-detail-block">
                <h2>Qualifications</h2>
                <ul className="careers-detail-list">
                  {job.qualifications.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            )}
          </article>

          <aside className="careers-detail-sidebar">
            <div className="careers-detail-facts">
              <span className="careers-detail-facts-icon"><BriefcaseBusiness size={22} /></span>
              <h3>{job.title}</h3>
              <p className="careers-detail-employer">{job.employer}</p>
              <div><strong>Employment</strong><span>{job.type}</span></div>
              <div><strong>Work arrangement</strong><span>{job.workArrangement || "Not specified"}</span></div>
              <div><strong>Location</strong><span>{job.location}</span></div>
              <a className="btn careers-sidebar-apply" href="#apply">Apply for this position <ArrowRight size={16} /></a>
              <Link href="/careers" className="careers-back-secondary"><ArrowLeft size={15} /> Browse other openings</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section careers-apply-section" id="apply">
        <div className="container">
          <div className="careers-apply-panel">
            <CareerApplicationForm jobTitle={job.title} />
          </div>
        </div>
      </section>
    </>
  );
}
