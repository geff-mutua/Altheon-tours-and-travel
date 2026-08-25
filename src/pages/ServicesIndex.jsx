import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { companyProfile, services } from "../company-profile";
import "./ServicePages.css";

export default function ServicesIndex() {
  return (
    <article className="service-page">
      <header className="service-hero service-hero--index">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=85" alt="Traveller overlooking a new destination" />
        <div className="service-hero__scrim" />
        <div className="wrap service-hero__content">
          <span className="eyebrow">Travel · Meetings · Events · Experiences</span>
          <h1>One partner.<br />Every moving part.</h1>
          <p>From a single flight to a complete company gathering, Altheon plans, books and coordinates the details through five connected service desks.</p>
          <Link to="/plan-your-journey" className="btn btn-solid">Send us your brief <ArrowRight size={15} /></Link>
        </div>
      </header>

      <section className="section service-overview">
        <div className="wrap">
          <div className="section-head">
            <div><span className="eyebrow">Our Service Architecture</span><h2>Choose a starting point.<br />We connect the rest.</h2></div>
            <p>Each desk works independently or together, depending on what your request requires.</p>
          </div>
          <div className="service-overview__grid">
            {services.map((service, index) => (
              <Link to={`/services/${service.slug}`} className="service-tile" key={service.slug}>
                <div className="service-tile__image"><img src={service.cardImage} alt={service.name} loading="lazy" /><span>0{index + 1}</span></div>
                <div className="service-tile__body">
                  <span>{service.eyebrow}</span>
                  <h2>{service.name}</h2>
                  <p>{service.intro}</p>
                  <strong>Explore service <ArrowRight size={14} /></strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-promise">
        <div className="wrap service-promise__grid">
          <div><span className="eyebrow">Why One Partner Works</span><h2>Less coordination for you. More accountability from us.</h2></div>
          <div className="service-promise__list">
            {companyProfile.differentiators.map((item) => <p key={item}><Check size={17} />{item}</p>)}
          </div>
        </div>
      </section>
    </article>
  );
}
