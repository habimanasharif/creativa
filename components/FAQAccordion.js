"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function FAQAccordion({ items }) {
  const [active, setActive] = useState(null);
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div
          className={`faq-item ${active === i ? "active" : ""}`}
          key={item.q}
        >
          <button onClick={() => setActive(active === i ? null : i)}>
            <span>{item.q}</span>
            <ChevronDown size={18} />
          </button>
          {active === i && (
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
