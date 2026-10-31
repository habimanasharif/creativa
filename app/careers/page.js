import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Mail, MapPin } from "lucide-react";
import { jobs } from "@/data/careers";

export const metadata = {
  title: "Careers",
  description: "Explore career opportunities with Creativa Care and help make a meaningful difference through compassionate home care in Kingston, Ontario.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <section className="page-hero careers-hero">
        <div className="container">
          <span className="eyebrow">GROW WITH CREATIVA CARE</span>
          <h1>Make a Difference.<br />Build a Meaningful Career.</h1>
          <p>Join a team that believes compassionate care can make every day better. Help individuals and families feel supported, respected and at home.</p>
          <a className="btn" href="#open-positions">Explore Opportunities <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="section careers-positions" id="open-positions">
        <div className="container">
          <div className="careers-section-heading">
            <span className="eyebrow">JOIN OUR TEAM</span>
            <h2>Current opportunities</h2>
            <p>Explore the positions currently available at Creativa Care.</p>
          </div>

          {jobs.length > 0 ? (
            <div className="careers-job-list careers-job-grid">
              {jobs.map((job) => (
                <article className="careers-job-card careers-job-summary-card" key={job.slug}>
                  <div className="careers-job-summary-top">
                    <span className="careers-job-type">{job.type}{job.workArrangement ? ` · ${job.workArrangement}` : ""}</span>
                    <span className="careers-job-icon"><BriefcaseBusiness size={20} /></span>
                  </div>
                  <h3>{job.title}</h3>
                  <p className="careers-job-employer">{job.employer}</p>
                  <p className="careers-job-summary">{job.summary}</p>
                  <div className="careers-job-location"><MapPin size={15} /> {job.location || "Kingston, Ontario"}</div>
                  <Link className="btn careers-view-details" href={`/careers/${job.slug}`}>
                    View Details <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="careers-empty">
              <span className="careers-empty-icon"><BriefcaseBusiness size={25} /></span>
              <h3>There are no open positions right now.</h3>
              <p>We’re always glad to hear from people who are passionate about compassionate care. Please check back soon for new opportunities.</p>
              <a className="careers-email-link" href="mailto:info@creativacare.ca?subject=Career%20Interest"><Mail size={17} /> Send us your interest</a>
            </div>
          )}
        </div>
      </section>

      <section className="careers-bottom-cta">
        <div className="container careers-bottom-cta-inner">
          <div>
            <span className="eyebrow">LET’S CONNECT</span>
            <h2>Interested in being part of our team?</h2>
            <p>Reach out to introduce yourself. We’d be happy to hear from you.</p>
          </div>
          <Link className="btn" href="/contact">Contact Creativa Care <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
