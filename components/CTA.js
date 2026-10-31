import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
export default function CTA() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">READY TO GET STARTED?</span>
          <h2>Care that feels like home.</h2>
          <p>Let’s create a care plan that works for you and your loved one.</p>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-light" href="/contact">
            Request a Consultation <ArrowRight size={17} />
          </Link>
          <a className="btn btn-outline-light" href="tel:+13439892596">
            <Phone size={17} /> +1 (343) 989-2596
          </a>
        </div>
      </div>
    </section>
  );
}
