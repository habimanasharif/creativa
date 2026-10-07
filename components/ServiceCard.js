import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function ServiceCard({ icon, title, description, slug, items }) {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {items.slice(0, 4).map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <Link href={`/services/${slug}`}>
        Learn More <ArrowRight size={15} />
      </Link>
    </article>
  );
}
