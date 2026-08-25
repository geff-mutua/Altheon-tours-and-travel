import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../data";
import "./FAQ.css";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="wrap faq__wrap">
        <div className="faq__head">
          <span className="eyebrow">Before We Begin</span>
          <h2>Frequently asked</h2>
          <p>What to know before handing Altheon your travel, gathering or experience brief.</p>
        </div>

        <div className="faq__list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item ${isOpen ? "faq__item--open" : ""}`} key={f.q}>
                <button className="faq__q" onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{f.q}</span>
                  <Plus size={18} strokeWidth={1.5} className="faq__icon" />
                </button>
                <div className="faq__a">
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
