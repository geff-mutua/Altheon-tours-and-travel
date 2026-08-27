import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play, Volume2, VolumeX } from "lucide-react";
import "./Hero.css";

const FILM = "/spirit-of-kenya-cinematic.mp4";

const SLIDES = [
  {
    type: "video",
    src: FILM,
    poster: "/kilimanjaro_elephant.jpg",
    alt: "A cinematic journey through Kenya",
    hold: 16000,
  },
  {
    img: "/Zebra_herd,_Maasai_Mara_National_Reserve,_Kenya.jpg",
    alt: "A zebra herd grazing across the open Maasai Mara plains",
    hold: 6000,
  },
  {
    img: "/Diani_Beach_Sunrise_Kenya.jpg",
    alt: "Sunrise over the white sand and turquoise water of Diani Beach on the Kenyan coast",
    hold: 6000,
  },
  {
    img: "/Kenya_Airways_Flight.jpg",
    alt: "A Kenya Airways aircraft on the tarmac at Jomo Kenyatta International Airport",
    hold: 6000,
  },
  {
    img: "/kilimanjaro_elephant.jpg",
    alt: "Elephants grazing on the marshland beneath a snow-capped Mount Kilimanjaro",
    hold: 6000,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [reduced, setReduced] = useState(false);
  const videoRef = useRef(null);

  const onVideoSlide = SLIDES[index]?.type === "video";
  const watching = onVideoSlide && !muted; // sound on = pause the rotation

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // auto-advance, paused while the film is being watched with sound
  useEffect(() => {
    if (reduced || watching) return;
    const t = setTimeout(
      () => setIndex((v) => (v + 1) % SLIDES.length),
      SLIDES[index]?.hold ?? 6000
    );
    return () => clearTimeout(t);
  }, [index, reduced, watching]);

  // keep the background film playing only while it is the visible slide
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (onVideoSlide && !reduced) {
      v.play?.().catch(() => {});
    } else {
      v.pause?.();
      if (!onVideoSlide) {
        v.currentTime = 0;
        setMuted(true);
      }
    }
  }, [onVideoSlide, reduced]);

  const watchFilm = () => {
    setIndex(0);
    setMuted(false);
    const v = videoRef.current;
    if (v) {
      v.muted = false;
      v.currentTime = 0;
      v.play?.().catch(() => {});
    }
  };

  return (
    <section id="top" className="hero">
      <div className="hero__stage">
        {SLIDES.map((s, i) =>
          s.type === "video" ? (
            <video
              key="film"
              ref={videoRef}
              className={`hero__slide ${i === index ? "is-active" : ""}`}
              src={s.src}
              poster={s.poster}
              muted={muted}
              loop
              playsInline
              preload="metadata"
              aria-label={s.alt}
            />
          ) : (
            <img
              key={s.img}
              src={s.img}
              alt={s.alt}
              className={`hero__slide ${i === index ? "is-active" : ""}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          )
        )}
        <div className="hero__scrim" />
      </div>

      <div className="hero__content">
        <span className="hero__eyebrow">Travel · Events · Experiences</span>
        <h1 className="hero__title">
          Your plans. <em>Our move.</em>
        </h1>
        <p className="hero__sub">
          Tell us what you need. We plan, book and coordinate every detail — so you can
          focus on the journey, the meeting or the moment.
        </p>

        <div className="hero__actions">
          <Link to="/plan-your-journey" className="btn btn-solid">
            Tell Us What You Need <ArrowUpRight size={15} />
          </Link>
          <a href="#destinations" className="btn btn-ghost">
            Explore Our Solutions
          </a>
        </div>

        <button className="hero__play" onClick={watchFilm} aria-label="Watch the film">
          <span className="hero__play-circle">
            <Play size={15} fill="currentColor" strokeWidth={0} />
          </span>
          <span className="hero__play-text">
            <strong>Watch the film</strong>
            <small>2:20 · A cinematic journey through Kenya</small>
          </span>
        </button>
      </div>

      {onVideoSlide && !reduced && (
        <button
          className="hero__sound"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Turn sound on" : "Mute film"}
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          <span>{muted ? "Sound off" : "Sound on"}</span>
        </button>
      )}

      <div className="hero__dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.img || "film"}
            className={`hero__dot ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={s.type === "video" ? "Play the film" : `Show slide ${i}`}
          />
        ))}
      </div>
    </section>
  );
}
