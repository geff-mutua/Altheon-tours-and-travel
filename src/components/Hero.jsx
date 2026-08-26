import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import "./Hero.css";

const SLIDES = [
  {
    region: "Maasai Mara",
    caption: "The wild, in motion",
    type: "video",
    video: "https://assets.mixkit.co/videos/11054/11054-720.mp4",
    img: "/Zebra_herd,_Maasai_Mara_National_Reserve,_Kenya.jpg",
    alt: "A zebra herd grazing across the open Maasai Mara plains",
  },
  {
    region: "Diani Beach",
    caption: "Kenya's Turquoise Coast",
    img: "/Diani_Beach_Sunrise_Kenya.jpg",
    alt: "Sunrise over the white sand and turquoise water of Diani Beach on the Kenyan coast",
  },
  {
    region: "Nairobi",
    caption: "Wheels Up, Worry-Free",
    img: "/Kenya_Airways_Flight.jpg",
    alt: "A Kenya Airways aircraft on the tarmac at Jomo Kenyatta International Airport",
  },
  {
    region: "Amboseli",
    caption: "Giants Beneath Kilimanjaro",
    img: "/kilimanjaro-elephants.jpg",
    alt: "Elephants grazing on the marshland beneath a snow-capped Mount Kilimanjaro",
  },
];

const SLIDE_MS = 5500;
const EFFECTS = ["fade", "slide", "falling", "slice", "zoom"];

function randomEffect() {
  return EFFECTS[Math.floor(Math.random() * EFFECTS.length)];
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [effect, setEffect] = useState(EFFECTS[0]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const isVideoSlide = SLIDES[index]?.type === "video";
    if (isVideoSlide && !reducedMotion) {
      videoRef.current?.play?.().catch(() => {});
    } else {
      videoRef.current?.pause?.();
    }
  }, [index, reducedMotion]);

  const goTo = (next) => {
    setEffect(randomEffect());
    setIndex(next);
  };

  useEffect(() => {
    if (reducedMotion) return;
    timerRef.current = setInterval(() => {
      setEffect(randomEffect());
      setIndex((v) => (v + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => clearInterval(timerRef.current);
    // restarting the interval on every manual `goTo` keeps the auto-advance
    // from firing right on top of a click
  }, [reducedMotion, index]);

  return (
    <section id="top" className="hero">
      <div className={`hero__img hero__img--${effect}`}>
        {SLIDES.map((s, i) =>
          s.type === "video" && !reducedMotion ? (
            <video
              key={s.region + s.caption}
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              poster={s.img}
              aria-label={s.alt}
              className={`hero__slide ${i === index ? "is-active" : ""}`}
            >
              <source src={s.video} type="video/mp4" />
            </video>
          ) : (
            <img
              key={s.region + s.caption}
              src={s.img}
              alt={s.alt}
              className={`hero__slide ${i === index ? "is-active" : ""}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          )
        )}
        <div className="hero__scrim" />
      </div>

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
            onClick={() => goTo(i)}
            aria-label={`Show ${s.region} — ${s.caption}`}
          />
        ))}
      </div>

      <div className="wrap hero__content">
        <span className="eyebrow">Travel · Events · Experiences</span>
        <h1 className="hero__title">
          Your plans.
          <br /><em>Our move.</em>
        </h1>
        <p className="hero__sub">
          Tell us what you need. We plan, book and coordinate the details —
          so you can focus on the journey, the meeting or the moment.
        </p>
        <div className="hero__actions">
          <Link to="/plan-your-journey" className="btn btn-solid">
            Tell Us What You Need <ArrowUpRight size={15} />
          </Link>
          <a href="#destinations" className="btn btn-ghost">
            Explore Our Solutions
          </a>
        </div>
      </div>

      <div className="hero__assurance">
        <span><MapPin size={15} /> Kenya-based coordination team</span>
        <span><ShieldCheck size={15} /> End-to-end travel support</span>
      </div>

      <a href="#intro" className="hero__scroll" aria-label="Scroll to next section">
        <ArrowDown size={16} strokeWidth={1.5} />
        <span>Scroll</span>
      </a>
    </section>
  );
}
