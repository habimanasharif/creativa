import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, HeartHandshake, Mail, MapPin, Sparkles, UsersRound } from "lucide-react";

export const metadata = {
  title: "Careers",
  description: "Explore career opportunities with Creativa Care and help make a meaningful difference through compassionate home care in Kingston, Ontario.",
  alternates: { canonical: "/careers" },
};

// Add or edit opportunities in this list. Each job appears automatically on the Careers page.
const jobs = [
  {
    title: "Personal Support Worker",
    employer: "Creativa Care",
    type: "Full-time",
    workArrangement: "On-site",
    location: "Kingston, Ontario",
    companyDescription: "Creativa Care (PCCH) is an Ontario-based home care provider focused on helping individuals live with dignity, independence, and comfort in their own homes. PCCH delivers compassionate, person-centered non-medical support, including personal care, companionship, homemaking, respite care, post-hospital assistance, and appointment accompaniment. The organization emphasizes understanding each person's unique needs, respecting their choices, and building trusting relationships grounded in compassion and reliability. PCCH is committed to making everyday life better for the people it serves while giving families confidence and peace of mind. Guided by the values of “Compassionate Care, Dignified Living, Peace of Mind,” PCCH continues to grow as a trusted partner in home care.",
    roleDescription: "The Personal Support Worker at Creativa Care provides direct non-medical support to clients in their homes, ensuring comfort, safety, and dignity in daily living. This full-time, on-site role is based in Kingston, ON, and includes assisting clients with personal care, mobility, light housekeeping, meal preparation, and support with daily routines. The Personal Support Worker offers companionship, engages clients in meaningful activities, and accompanies them to appointments as needed. Responsibilities also include monitoring changes in clients’ well-being, documenting care provided, and communicating observations to supervisors or family members in a clear, respectful manner. The role requires working collaboratively with the Creativa Care team to maintain high standards of person-centered care and uphold organizational values.",
    responsibilities: [
      "Assist clients with personal care, mobility, and daily routines while maintaining their comfort, safety, and dignity.",
      "Provide light housekeeping and meal preparation.",
      "Offer companionship and engage clients in meaningful activities.",
      "Accompany clients to appointments as needed.",
      "Monitor changes in clients’ well-being and report observations to supervisors or family members.",
      "Document care provided clearly and accurately.",
      "Work collaboratively with the Creativa Care team and uphold person-centered care standards."
    ],
    qualifications: [
      "Experience as a Support Worker or Personal Support Worker, with knowledge of home care practices and person-centered support.",
      "Strong interpersonal skills and communication abilities to build trust, provide companionship, and interact effectively with clients, families, and team members.",
      "Understanding of safeguarding principles, including client safety, confidentiality, and adherence to professional and ethical care standards.",
      "Ability to use basic technical support tools and digital platforms (e.g., electronic schedules, care documentation systems, mobile apps) to record and access client information.",
      "Relevant certification or training in Personal Support Work, Health Care Aide, or equivalent; current CPR/First Aid is an asset.",
      "Knowledge of safe mobility assistance, infection prevention, and proper body mechanics in a home care setting.",
      "Reliability, patience, cultural sensitivity, and the ability to work independently in clients’ homes.",
      "A valid driver’s license and access to reliable transportation for client visits within Kingston and surrounding areas is an asset."
    ],
    email: "info@creativacare.ca"
  }
];

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
                    <span className="careers-job-type">{job.type}{job.workArrangement ? ` · ${job.workArrangement}` : ""}</span>
                    <h3>{job.title}</h3>
                    {job.employer && <p className="careers-job-employer">{job.employer}</p>}
                    <p>{job.roleDescription || job.summary}</p>
                    <div className="careers-job-location"><MapPin size={15} /> {job.location || "Kingston, Ontario"}</div>

                    {job.companyDescription && (
                      <div className="careers-job-detail">
                        <h4>About the organization</h4>
                        <p>{job.companyDescription}</p>
                      </div>
                    )}
                    {job.responsibilities?.length > 0 && (
                      <div className="careers-job-detail">
                        <h4>Key responsibilities</h4>
                        <ul>{job.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
                      </div>
                    )}
                    {job.qualifications?.length > 0 && (
                      <div className="careers-job-detail">
                        <h4>Qualifications</h4>
                        <ul>{job.qualifications.map((item) => <li key={item}>{item}</li>)}</ul>
                      </div>
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
