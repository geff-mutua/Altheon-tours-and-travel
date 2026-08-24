import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import "./Hero.css";

// Web-optimized from Pexels clip 33660355 (free to use under the Pexels license).
const POSTER = "/videos/altheon-safari-hero.jpg";
const VIDEO = "/videos/altheon-safari-hero.mp4";

export default function Hero() {
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAllowVideo(!reduced);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero__img">
        {allowVideo ? (
          <video autoPlay muted loop playsInline poster={POSTER} aria-hidden="true">
            <source src={VIDEO} type="video/mp4" />
          </video>
        ) : (
          <img src={POSTER} alt="An elephant crossing a vast African savannah" />
        )}
        <div className="hero__scrim" />
      </div>

      <div className="hero__horizon" />

      <div className="wrap hero__content">
        <span className="eyebrow">Altheon Tours &amp; Travel</span>
        <h1 className="hero__title">
          Journeys,
          <br />
          Deliberately Made
        </h1>
        <p className="hero__sub">
          Private, tailor-made expeditions across the world's most extraordinary
          landscapes — planned by people who've walked every mile first.
        </p>
        <div className="hero__actions">
          <Link to="/plan-your-journey" className="btn btn-solid">
            Start Planning
          </Link>
          <a href="#destinations" className="btn btn-ghost">
            View Destinations
          </a>
        </div>
      </div>

      <a href="#intro" className="hero__scroll" aria-label="Scroll to next section">
        <ArrowDown size={16} strokeWidth={1.5} />
        <span>Scroll</span>
      </a>
    </section>
  );
}
