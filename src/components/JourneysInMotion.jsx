import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import "./JourneysInMotion.css";

const REELS = [
  {
    label: "Maasai Mara",
    tag: "Wildlife — Lion Pride",
    video: "https://assets.mixkit.co/videos/11054/11054-720.mp4",
    poster: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=900&h=1100&q=80",
  },
  {
    label: "Amboseli",
    tag: "Wildlife — Elephant",
    video: "https://assets.mixkit.co/videos/3661/3661-720.mp4",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Amboseli_Park_-_Kilimanjaro_elephant.jpg/1920px-Amboseli_Park_-_Kilimanjaro_elephant.jpg",
  },
  {
    label: "Samburu",
    tag: "Wildlife — Giraffe",
    video: "https://assets.mixkit.co/videos/11363/11363-720.mp4",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Elephants_crossing_the_Ewaso_Ng%27iro_river_at_Samburu_Park%2C_Kenya.jpg/1920px-Elephants_crossing_the_Ewaso_Ng%27iro_river_at_Samburu_Park%2C_Kenya.jpg",
  },
  {
    label: "Maasai Mara",
    tag: "Wildlife — Cheetah",
    video: "https://assets.mixkit.co/videos/11146/11146-720.mp4",
    poster: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=900&h=1100&q=80",
  },
  {
    label: "Tsavo",
    tag: "Wildlife — Hippo",
    video: "https://assets.mixkit.co/videos/11281/11281-720.mp4",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Majestic_red_elephant_of_Tsavo_East_%285232098119%29.jpg/1920px-Majestic_red_elephant_of_Tsavo_East_%285232098119%29.jpg",
  },
];

const VISIBLE = 3;

function ReelCard({ reel }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);
  const [muted, setMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // the <video> only mounts once `ready` flips true, so play()/pause() belong
  // in an effect keyed on the mount + visibility state, not the observer callback
  useEffect(() => {
    if (!ready) return;
    if (inView) videoRef.current?.play?.().catch(() => {});
    else videoRef.current?.pause?.();
  }, [ready, inView]);

  useEffect(() => {
    if (reducedMotion) return;
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setReady(true);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div className="reel" ref={wrapRef}>
      {ready && !reducedMotion ? (
        <video ref={videoRef} muted={muted} loop playsInline preload="none" poster={reel.poster}>
          <source src={reel.video} type="video/mp4" />
        </video>
      ) : (
        <img src={reel.poster} alt={`${reel.label} — ${reel.tag}`} loading="lazy" />
      )}
      <div className="reel__scrim" />
      <div className="reel__body">
        <span className="reel__tag">{reel.tag}</span>
        <strong>{reel.label}</strong>
      </div>
      {ready && !reducedMotion && (
        <button
          className="reel__mute"
          aria-label={muted ? "Unmute video" : "Mute video"}
          onClick={() => setMuted((v) => !v)}
        >
          {muted ? <VolumeX size={15} strokeWidth={1.5} /> : <Volume2 size={15} strokeWidth={1.5} />}
        </button>
      )}
    </div>
  );
}

const AUTOSLIDE_MS = 6000;

export default function JourneysInMotion() {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const n = REELS.length;
  const visible = Array.from({ length: VISIBLE }, (_, k) => REELS[(start + k) % n]);

  const go = (dir) => setStart((v) => (v + dir + n) % n);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const id = setInterval(() => go(1), AUTOSLIDE_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, paused, start]);

  return (
    <section className="section reels">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">See It In Motion</span>
            <h2>Journeys, as they actually move</h2>
          </div>
          <p>A few unscripted minutes from the field — the pace, the light, the animals that don't wait for a schedule.</p>
        </div>

        <div
          className="reels__grid"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visible.map((r) => (
            <ReelCard reel={r} key={r.label + r.tag} />
          ))}
        </div>

        <div className="reels__nav">
          <button className="reels__navbtn" onClick={() => go(-1)} aria-label="Previous clip">
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <div className="reels__dots">
            {REELS.map((r, idx) => (
              <button
                key={r.label + r.tag}
                className={`reels__dot ${idx === start ? "is-active" : ""}`}
                onClick={() => setStart(idx)}
                aria-label={`Show clips starting at ${r.label}`}
              />
            ))}
          </div>
          <button className="reels__navbtn" onClick={() => go(1)} aria-label="Next clip">
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
