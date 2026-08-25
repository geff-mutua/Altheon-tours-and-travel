import { ArrowUpRight } from "lucide-react";
import { destinations } from "../data";
import "./Destinations.css";

export default function Destinations() {
  return (
    <section id="destinations" className="section destinations">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Curated Destinations</span>
            <h2>Places that stay with you</h2>
          </div>
          <p>
            Wild plains, white-sand shores and landscapes that reset your sense
            of scale — each one known first-hand by our travel designers.
          </p>
        </div>

        <div className="dest-grid">
          {destinations.map((d) => (
            <a href="#contact" key={d.code} className={`dest-card dest-card--${d.size}`}>
              <img src={d.img} alt={`${d.name} — ${d.region}`} loading="lazy" />
              <div className="dest-card__scrim" />
              <span className="dest-card__code">{d.code}</span>
              <div className="dest-card__body">
                <span className="dest-card__region">{d.region}</span>
                <h3>{d.name}</h3>
                <p>{d.blurb}</p>
                <span className="dest-card__link">
                  Explore <ArrowUpRight size={14} strokeWidth={1.5} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
