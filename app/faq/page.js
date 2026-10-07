import FAQAccordion from "@/components/FAQAccordion";
import CTA from "@/components/CTA";
import { faqs } from "@/data";
export default function FAQ() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#c6e8df" }}>
            QUESTIONS & ANSWERS
          </span>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about Creativa Care.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <CTA />
    </>
  );
}
