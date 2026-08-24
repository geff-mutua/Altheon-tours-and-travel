import { ArrowUpRight } from "lucide-react";
import { destinations } from "../data";
import "./Destinations.css";

export default function Destinations() {
  return (
    <section id="destinations" className="section destinations">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Where We Go</span>
            <h2>Six regions, chosen for what they do to people</h2>
          </div>
          <p>
            Every destination on our map is one our own trip designers have
            travelled — repeatedly, off the standard route.
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
