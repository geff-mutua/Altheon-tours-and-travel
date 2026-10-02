import { ArrowLeft, ArrowRight, Check, Users } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getService, services } from "../company-profile";
import { getSafariCategory } from "../safaris-data";
import "./ServicePages.css";
import "./Safaris.css";

const RELATED_BY_SLUG = {
  "hotel-accommodation": ["holiday-leisure", "tours-safaris", "group-travel"],
  "tours-safaris": ["hotel-accommodation", "holiday-leisure", "group-travel"],
  "travel-desk": ["hotel-accommodation", "corporate", "group-travel"],
  corporate: ["travel-desk", "hotel-accommodation", "group-travel"],
  "holiday-leisure": ["hotel-accommodation", "tours-safaris", "travel-desk"],
  "group-travel": ["travel-desk", "hotel-accommodation", "tours-safaris"],
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/services" replace />;
  const safariCategories = (service.safariCategories || []).map(getSafariCategory).filter(Boolean);
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

      {service.holidays ? (
        <section className="section holiday-cards">
          <div className="wrap holidaySec">
            <h2>Escape, explore, and unwind.</h2>
            <p>Discover thoughtfully curated holidays, getaways, and unforgettable experiences designed around how you love to travel.</p>
          </div>
          <div className="wrap holiday-cards__grid">
            {service.holidays.map((card) => (
              <article className="holiday-card" key={card.title}>
                <div className="holiday-card__image">
                  <img src={card.image} alt={card.label} loading="lazy" />
                  <span>{card.label}</span>
                </div>
                <div className="holiday-card__body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
      <section className="section detail-intro">
        {service.detailDescription && (
          <div className="wrap detail-intro__description">
            <p>{service.detailDescriptionLead || "At "}<em>Altheon Tours</em>{service.detailDescriptionLead ? " " : ", "}{service.detailDescription}</p>
          </div>
        )}
        {service.showcase ? (
          <div className="wrap detail-showcase">
            <div className="detail-showcase__head">
              <span className="eyebrow detail-showcase__eyebrow">{service.showcase.eyebrow}</span>
              <h2>{service.showcase.heading}</h2>
            </div>
            <div className="detail-showcase__copy">
              <p className="detail-showcase__lead">{service.showcase.lead}</p>
              {service.showcase.notes.map((note) => <p key={note}>{note}</p>)}
            </div>
          </div>
        ) : (
          <div className="wrap detail-intro__grid">
            {service.detailImages ? (
              <div className="detail-intro__images">
                {service.detailImages.map((image) => (
                  <img src={image.src} alt={image.alt} loading="lazy" key={image.src} />
                ))}
              </div>
            ) : service.detailImage ? (
              <img className="detail-intro__image" src={service.detailImage} alt={`${service.name} travel arrangements`} loading="lazy" />
            ) : (
            <div className="detail-intro__copy">
              <span className="eyebrow">The Solution</span>
              <h2>{service.outcome}</h2>
              {service.sections.map((section) => <div className="detail-copy-block" key={section.title}><h3>{section.title}</h3><p>{section.text}</p></div>)}
            </div>
            )}
            <aside className="detail-includes">
              <span>What this service includes</span>
              <ul>{service.services.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
            </aside>
          </div>
        )}
      </section>
      )}

      {service.gallery && (
        <section className="section detail-gallery">
          <div className="wrap">
            <div className="detail-gallery__head">
              <div>
                <span className="eyebrow detail-gallery__eyebrow">{service.gallery.eyebrow}</span>
                <h2>{service.gallery.heading}<em>{service.gallery.accent}</em></h2>
              </div>
              <p>{service.gallery.blurb}</p>
            </div>
            <div className="detail-gallery__grid">
              {service.gallery.images.map((img) => (
                <figure className={`detail-gallery__item${img.size === "large" ? " detail-gallery__item--large" : ""}`} key={img.src}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  {img.caption && <figcaption>{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {safariCategories.map((category) => (
        <section className="section service-safaris" id={category.slug} key={category.slug}>
          <div className="wrap">
            <div className="section-head"><div><span className="eyebrow">{category.name}</span><h2>{category.title}</h2></div></div>
            <div className="safari-list__grid">
              {category.tours.map((tour) => (
                <Link to={`/safaris/${category.slug}/${tour.slug}`} key={tour.slug} className="safari-card">
                  <img src={tour.image} alt={tour.title} loading="lazy" />
                  <div className="safari-card__scrim" />
                  <div className="safari-card__body">
                    <h3>{tour.title}</h3>
                    <span className="safari-card__btn">More Information <ArrowRight size={15} strokeWidth={1.5} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

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

      {/* <section className="section detail-audience">
        <div className="wrap detail-audience__grid">
          <div><Users size={28} /><span className="eyebrow">Who This Serves</span><h2>Designed around the people behind the request.</h2></div>
          <ul>{service.audience.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        {service.note && <div className="wrap detail-note"><strong>Important note</strong><p>{service.note}</p></div>}
      </section> */}
{/* 
      <section className="section related-services">
        <div className="wrap">
          <div className="section-head"><div><span className="eyebrow">Similar Services</span><h2>You may also be interested in.</h2></div><Link to="/services" className="btn btn-ghost">View all services</Link></div>
          <div className="related-services__grid">
            {related.map((item) => <Link to={`/services/${item.slug}`} key={item.slug}><img src={item.cardImage} alt={item.shortName} loading="lazy" /><div><span>{item.eyebrow}</span><h3>{item.name}</h3><strong>Explore <ArrowRight size={13} /></strong></div></Link>)}
          </div>
        </div>
      </section> */}

      <section className="service-cta"><div className="wrap"><span className="eyebrow">Your Plans. Our Move.</span><h2>Ready to hand over the details?</h2><p>Tell us your objective, timing and budget. We will help shape the right solution.</p><Link to="/plan-your-journey" className="btn btn-solid">Send us your brief <ArrowRight size={15} /></Link></div></section>
    </article>
  );
}
