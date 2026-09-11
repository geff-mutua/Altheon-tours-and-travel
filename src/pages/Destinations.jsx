import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { destinations } from "../data";
import "./ServicePages.css";
import "./Destinations.css";

export default function Destinations() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return destinations;
    return destinations.filter(
      (d) => d.name.toLowerCase().includes(q) || d.region.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <article className="dest-page">
      <header className="service-hero service-hero--index dest-hero">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=85"
          alt="Aerial view of a Kenyan savanna landscape at golden hour"
        />
        <div className="service-hero__scrim" />
        <div className="wrap service-hero__content">
          <span className="eyebrow">Where To Go</span>
          <h1>Discover your next destination</h1>
          <p>Wild plains, white-sand shores and landscapes that reset your sense of scale — search by name or region to find yours.</p>

          <form className="dest-hero__search" onSubmit={(e) => e.preventDefault()} role="search">
            <input
              type="text"
              placeholder="Search for a place…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search destinations"
            />
            <button type="submit" aria-label="Search">
              <Search size={17} strokeWidth={1.75} />
            </button>
          </form>
        </div>
      </header>

      <section className="section dest-index">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Curated Destinations</span>
              <h2>Places that stay with you</h2>
            </div>
            <p>
              Each destination below is known first-hand by our travel designers —
              tap one to start planning your route there.
            </p>
          </div>

          {results.length === 0 ? (
            <p className="dest-index__empty">
              No destinations match “{query}” — try a different name or region.
            </p>
          ) : (
            <div className="dest-index__grid">
              {results.map((d) => (
                <Link to="/plan-your-journey" key={d.code} className="dest-tile">
                  <img src={d.img} alt={`${d.name} — ${d.region}`} loading="lazy" />
                  <div className="dest-tile__scrim" />
                  <div className="dest-tile__body">
                    <span className="dest-tile__region">{d.region}</span>
                    <h3>{d.name}</h3>
                    <span className="dest-tile__arrow" aria-hidden="true">
                      <ArrowUpRight size={18} strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section dest-cta">
        <div className="wrap dest-cta__inner">
          <div>
            <span className="eyebrow">Don't See It Here?</span>
            <h2>Tell us where — we'll design the route.</h2>
          </div>
          <Link to="/plan-your-journey" className="btn btn-solid">
            Plan your journey <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </article>
  );
}
