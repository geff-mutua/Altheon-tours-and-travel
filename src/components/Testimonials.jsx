import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data";
import "./Testimonials.css";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  const go = (dir) => {
    setI((v) => (v + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section testi">
      <div className="wrap testi__wrap">
        <span className="eyebrow">Trusted By Travellers</span>
        <Quote size={34} strokeWidth={1} color="var(--brass)" style={{ marginTop: 24 }} />
        <p className="testi__quote">{t.quote}</p>
        <div className="testi__foot">
          <div className="testi__person">
            <img src={t.avatar} alt={t.name} className="testi__avatar" />
            <div>
              <strong>{t.name}</strong>
              <span>{t.trip}</span>
            </div>
          </div>
          <div className="testi__controls">
            <button onClick={() => go(-1)} aria-label="Previous testimonial">
              <ChevronLeft size={18} />
            </button>
            <span className="testi__count">
              {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <button onClick={() => go(1)} aria-label="Next testimonial">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
