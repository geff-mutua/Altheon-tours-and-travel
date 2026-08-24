import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { journal } from "../data";
import "./Journal.css";

export default function Journal() {
  const featured = journal.slice(0, 3);

  return (
    <section id="journal" className="section journal">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">From The Journal</span>
            <h2>Notes from the road, written by our own guides</h2>
          </div>
          <p>Field notes, planning guides, and dispatches from wherever we are.</p>
        </div>

        <div className="journal__grid">
          {featured.map((j) => (
            <Link to={`/journal/${j.slug}`} className="journal__card" key={j.slug}>
              <div className="journal__cover">
                <img src={j.cover} alt={j.title} loading="lazy" />
                <span className="journal__tag">{j.tag}</span>
              </div>
              <div className="journal__body">
                <h3>{j.title}</h3>
                <p>{j.excerpt}</p>
                <div className="journal__foot">
                  <span>{j.date} · {j.readTime}</span>
                  <span className="journal__readmore">
                    Read <ArrowUpRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="journal__more">
          <Link to="/journal" className="btn btn-ghost">
            View All Articles <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
