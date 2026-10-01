import { ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getSafariCategory } from "../safaris-data";
import "./ServicePages.css";
import "./Safaris.css";

export default function SafariCategory() {
  const { category: slug } = useParams();
  const category = getSafariCategory(slug);
  if (!category) return <Navigate to="/safaris/kenya-safaris" replace />;

  return (
    <article className="safari-page">
      <header className="safari-hero">
        <img src={category.hero} alt={category.title} />
        <div className="safari-hero__scrim" />
        <h1>{category.title}</h1>
      </header>

      <section className="section safari-list">
        <div className="wrap safari-list__grid">
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
      </section>
    </article>
  );
}
