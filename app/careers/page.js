import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, HeartHandshake, Mail, MapPin, Sparkles, UsersRound } from "lucide-react";

export const metadata = {
  title: "Careers",
  description: "Explore career opportunities with Creativa Care and help make a meaningful difference through compassionate home care in Kingston, Ontario.",
  alternates: { canonical: "/careers" },
};

// Add new opportunities to this list. Each job appears automatically on the Careers page.
// Example:
// {
//   title: "Personal Support Worker",
//   type: "Part-time",
//   location: "Kingston, Ontario",
//   summary: "Provide respectful, compassionate support to clients in their homes.",
//   requirements: ["Experience in home care is an asset", "Reliable and compassionate"],
//   email: "info@creativacare.ca",
// }
const jobs = [];

const reasons = [
  { icon: <HeartHandshake size={21} />, title: "Make a difference", text: "Build meaningful relationships and help people feel supported at home." },
  { icon: <UsersRound size={21} />, title: "People first", text: "Join a team that values compassion, dignity and respect." },
  { icon: <Sparkles size={21} />, title: "Grow with us", text: "Bring your strengths, learn along the way and grow your experience." },
];

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

      <section className="section careers-intro">
        <div className="container">
          <div className="careers-section-heading">
            <span className="eyebrow">WHY WORK WITH US</span>
            <h2>Bring your compassion. Make an impact.</h2>
            <p>At Creativa Care, the little things matter: a kind conversation, a helping hand and the comfort of knowing someone cares. We’re looking for people who share that belief.</p>
          </div>
          <div className="careers-reasons">
            {reasons.map((reason) => (
              <article className="careers-reason" key={reason.title}>
                <span className="careers-reason-icon">{reason.icon}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
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
            <div className="careers-job-list">
              {jobs.map((job, index) => (
                <article className="careers-job-card" key={job.title + index}>
                  <div className="careers-job-main">
                    <span className="careers-job-type">{job.type}</span>
                    <h3>{job.title}</h3>
                    <p>{job.summary}</p>
                    <div className="careers-job-location"><MapPin size={15} /> {job.location || "Kingston, Ontario"}</div>
                    {job.requirements?.length > 0 && (
                      <ul>{job.requirements.map((item) => <li key={item}>{item}</li>)}</ul>
                    )}
                  </div>
                  <a className="btn careers-apply-btn" href={`mailto:${job.email || "info@creativacare.ca"}?subject=${encodeURIComponent("Application: " + job.title)}`}>
                    Apply Now <ArrowRight size={16} />
                  </a>
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
