import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import "./Hero.css";

const SLIDES = [
  {
    region: "Maasai Mara",
    caption: "The Great Migration",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Wildebeest_Jumping_Into_the_Mara_River.jpg/1920px-Wildebeest_Jumping_Into_the_Mara_River.jpg",
    alt: "Wildebeest jumping into the Mara River during the migration",
  },
  {
    region: "Amboseli",
    caption: "Giants Beneath Kilimanjaro",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Amboseli_Park_-_Kilimanjaro_elephant.jpg/1920px-Amboseli_Park_-_Kilimanjaro_elephant.jpg",
    alt: "Elephants grazing on the marshland beneath a snow-capped Mount Kilimanjaro",
  },
  {
    region: "Samburu",
    caption: "Where the Wild North Begins",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Elephants_crossing_the_Ewaso_Ng%27iro_river_at_Samburu_Park%2C_Kenya.jpg/1920px-Elephants_crossing_the_Ewaso_Ng%27iro_river_at_Samburu_Park%2C_Kenya.jpg",
    alt: "Elephants and a giraffe at the Ewaso Ng'iro river in Samburu",
  },
  {
    region: "Lake Nakuru",
    caption: "A Flamingo Horizon",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Lake_Nakuru_National_Park_02_-_Lesser_Flamingo_%28Phoeniconaias_minor%29.jpg/1920px-Lake_Nakuru_National_Park_02_-_Lesser_Flamingo_%28Phoeniconaias_minor%29.jpg",
    alt: "A flamingo taking flight over Lake Nakuru",
  },
  {
    region: "Tsavo",
    caption: "Kenya's Red-Dust Giants",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Majestic_red_elephant_of_Tsavo_East_%285232098119%29.jpg/1920px-Majestic_red_elephant_of_Tsavo_East_%285232098119%29.jpg",
    alt: "A red-dust elephant in Tsavo East",
  },
];

const SLIDE_MS = 5500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setIndex((v) => (v + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <section id="top" className="hero">
      <div className="hero__img">
        {SLIDES.map((s, i) => (
          <img
            key={s.region + s.caption}
            src={s.img}
            alt={s.alt}
            className={`hero__slide ${i === index ? "is-active" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="hero__scrim" />
      </div>

      <div className="hero__horizon" />

      <div className="hero__caption">
        {SLIDES.map((s, i) => (
          <div key={s.region + s.caption} className={`hero__caption-slide ${i === index ? "is-active" : ""}`}>
            <span className="hero__caption-index">{String(i + 1).padStart(2, "0")}/{String(SLIDES.length).padStart(2, "0")}</span>
            <span className="hero__caption-region">{s.region}</span>
            <span className="hero__caption-text">{s.caption}</span>
          </div>
        ))}
      </div>

      <div className="hero__dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.region + s.caption}
            className={`hero__dot ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Show ${s.region} — ${s.caption}`}
          />
        ))}
      </div>

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
