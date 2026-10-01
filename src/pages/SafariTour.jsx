import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getSafariCategory, getSafariTour } from "../safaris-data";
import "./ServicePages.css";
import "./Safaris.css";

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "plan", label: "Tour Plan" },
  { key: "inclusions", label: "Inclusions" },
];

function Blocks({ blocks }) {
  return blocks.map((block, i) => {
    if (block.type === "heading") return <h3 key={i}>{block.text}</h3>;
    if (block.type === "list") return <ul key={i}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
    if (block.type === "table") {
      const [head, ...rows] = block.rows;
      return (
        <div className="safari-table" key={i}>
          <table>
            <thead><tr>{head.map((cell, j) => <th key={j}>{cell}</th>)}</tr></thead>
            <tbody>{rows.map((row, r) => <tr key={r}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    }
    return <p key={i}>{block.text}</p>;
  });
}

function TourPlan({ tour }) {
  const [open, setOpen] = useState(() => new Set([0]));
  if (!tour.plan.length) return <p>{tour.planNote}</p>;

  const allOpen = open.size === tour.plan.length;
  const toggle = (i) => setOpen((prev) => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  return (
    <div className="safari-plan">
      <button className="safari-plan__all" onClick={() => setOpen(allOpen ? new Set() : new Set(tour.plan.map((_, i) => i)))}>
        {allOpen ? "Collapse All" : "Expand All"}
      </button>
      {tour.plan.map((day, i) => (
        <div className={`safari-plan__step ${open.has(i) ? "is-open" : ""}`} key={day.title}>
          <button className="safari-plan__title" onClick={() => toggle(i)} aria-expanded={open.has(i)}>
            {day.title}
            <ChevronDown size={16} strokeWidth={1.5} />
          </button>
          {open.has(i) && <div className="safari-plan__body">{day.body.map((p) => <p key={p}>{p}</p>)}</div>}
        </div>
      ))}
    </div>
  );
}

function TourPage({ categorySlug, slug }) {
  const category = getSafariCategory(categorySlug);
  const tour = getSafariTour(categorySlug, slug);
  const [tab, setTab] = useState("overview");
  const [active, setActive] = useState(0);
  if (!tour) return <Navigate to={category ? `/safaris/${category.slug}` : "/safaris/kenya-safaris"} replace />;

  const images = tour.gallery.length ? tour.gallery : [tour.image];

  return (
    <article className="safari-page">
      <header className="safari-hero safari-hero--tour">
        <img src={category.hero} alt="" />
        <div className="safari-hero__scrim" />
        <div className="wrap safari-hero__tour">
          <Link to={`/safaris/${category.slug}`} className="service-hero__back"><ArrowLeft size={14} /> {category.title}</Link>
          <h1>{tour.title}</h1>
        </div>
      </header>

      <section className="section safari-detail">
        <div className="wrap safari-detail__grid">
          <div className="safari-detail__main">
            <div className="safari-gallery">
              <img src={images[active]} alt={tour.title} className="safari-gallery__main" />
              {images.length > 1 && (
                <div className="safari-gallery__thumbs">
                  {images.map((src, i) => (
                    <button key={src} className={i === active ? "is-active" : ""} onClick={() => setActive(i)} aria-label={`Show photo ${i + 1}`}>
                      <img src={src} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="safari-tabs" role="tablist">
              {TABS.map((t) => (
                <button key={t.key} role="tab" aria-selected={tab === t.key} className={tab === t.key ? "is-active" : ""} onClick={() => setTab(t.key)}>
                  {t.label}
                </button>
              ))}
            </div>
            <div className="safari-tab-panel" role="tabpanel">
              {tab === "plan" ? <TourPlan tour={tour} /> : <Blocks blocks={tour[tab]} />}
            </div>
          </div>

          <aside className="safari-summary">
            {tour.destination && (
              <div className="safari-summary__row"><span>Tour Destination</span><p>{tour.destination}</p></div>
            )}
            <div className="safari-summary__row"><span>Tour Type</span><p>{category.title}</p></div>
            <Link to="/plan-your-journey" className="btn btn-solid">Book This Tour <ArrowRight size={15} /></Link>
          </aside>
        </div>
      </section>
    </article>
  );
}

export default function SafariTour() {
  const { category, slug } = useParams();
  // keyed so gallery/tab state resets when moving between tours
  return <TourPage key={`${category}/${slug}`} categorySlug={category} slug={slug} />;
}
