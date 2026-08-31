import { ArrowLeft, ArrowRight, Check, Users } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getService, services } from "../company-profile";
import "./ServicePages.css";

const RELATED_BY_SLUG = {
  "hotel-accommodation": ["holiday-leisure", "safari-wildlife", "group-travel"],
  "safari-wildlife": ["hotel-accommodation", "holiday-leisure", "group-travel"],
  "travel-desk": ["hotel-accommodation", "corporate", "group-travel"],
  corporate: ["travel-desk", "hotel-accommodation", "group-travel"],
  "holiday-leisure": ["hotel-accommodation", "safari-wildlife", "travel-desk"],
  "group-travel": ["travel-desk", "hotel-accommodation", "safari-wildlife"],
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/services" replace />;
  const related = (RELATED_BY_SLUG[slug] || [])
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter(Boolean);

  return (
    <article className="service-page">
      <header className="service-hero">
        <img src={service.image} alt={service.name} />
        <div className="service-hero__scrim" />
        <div className="wrap service-hero__content">
          <Link to="/services" className="service-hero__back"><ArrowLeft size={14} /> All services</Link>
          <span className="eyebrow">{service.eyebrow}</span>
          <h1>{service.name}</h1>
          <p>{service.intro}</p>
          <Link to="/plan-your-journey" className="btn btn-solid">Discuss your request <ArrowRight size={15} /></Link>
        </div>
      </header>

      <section className="section detail-intro">
        <div className="wrap detail-intro__grid">
          <div className="detail-intro__copy">
            <span className="eyebrow">The Solution</span>
            <h2>{service.outcome}</h2>
            {service.sections.map((section) => <div className="detail-copy-block" key={section.title}><h3>{section.title}</h3><p>{section.text}</p></div>)}
          </div>
          <aside className="detail-includes">
            <span>What this service includes</span>
            <ul>{service.services.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      {service.example && (
        <section className="section gathering-example">
          <div className="wrap">
            <div className="section-head"><div><span className="eyebrow">Example Programme</span><h2>{service.exampleTitle || "A sample coordinated journey"}</h2></div><p>{service.exampleDescription || "You deal with Altheon while we coordinate the required suppliers and arrangements."}</p></div>
            <div className="gathering-example__grid">
              {service.example.map((item) => <article key={item.day}><span>{item.day}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>
      )}

      <section className="section detail-audience">
        <div className="wrap detail-audience__grid">
          <div><Users size={28} /><span className="eyebrow">Who This Serves</span><h2>Designed around the people behind the request.</h2></div>
          <ul>{service.audience.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        {service.note && <div className="wrap detail-note"><strong>Important note</strong><p>{service.note}</p></div>}
      </section>

      <section className="section related-services">
        <div className="wrap">
          <div className="section-head"><div><span className="eyebrow">Similar Services</span><h2>You may also be interested in.</h2></div><Link to="/services" className="btn btn-ghost">View all services</Link></div>
          <div className="related-services__grid">
            {related.map((item) => <Link to={`/services/${item.slug}`} key={item.slug}><img src={item.cardImage} alt={item.shortName} loading="lazy" /><div><span>{item.eyebrow}</span><h3>{item.name}</h3><strong>Explore <ArrowRight size={13} /></strong></div></Link>)}
          </div>
        </div>
      </section>

      <section className="service-cta"><div className="wrap"><span className="eyebrow">Your Plans. Our Move.</span><h2>Ready to hand over the details?</h2><p>Tell us your objective, timing and budget. We will help shape the right solution.</p><Link to="/plan-your-journey" className="btn btn-solid">Send us your brief <ArrowRight size={15} /></Link></div></section>
    </article>
  );
}
