import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../company-profile";
import "./CompanyServices.css";

export default function CompanyServices() {
  return (
    <section id="services" className="section services">
      <div className="wrap">
        <div className="section-head services__head">
          <div>
            <span className="eyebrow">What We Coordinate</span>
            <h2>Follow your curiosity.</h2>
          <p style={{color:'black'}}>Choose a service to see everything Altheon can coordinate for your journey, team or event.</p>
          </div>
        </div>

        <div className="services__grid">
          {services.map(({ slug, shortName, cardImage, cardDescription }) => (
            <Link to={`/services/${slug}`} className="service-card" key={slug}>
              <div className="service-card__image">
                <img src={cardImage} alt={shortName} loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3>{shortName}</h3>
                <p>{cardDescription}</p>
                <span>View service <ArrowUpRight size={14} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
