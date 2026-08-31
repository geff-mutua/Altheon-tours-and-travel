import { ArrowUpRight, Play } from "lucide-react";
import "./JourneysInMotion.css";

const MOMENTS = [
  {
    label: "Shared Adventures",
    tag: "Friends & groups",
    video: "https://assets.mixkit.co/videos/11054/11054-720.mp4",
    poster: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=900&h=1100&q=80",
    kind: "feature",
    position: "54% center",
  },
  {
    label: "Time for Two",
    tag: "Couples & honeymoons",
    poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=900&q=85",
    kind: "wide",
    position: "center 62%",
  },
  {
    label: "Smooth Departures",
    tag: "Flights & transfers",
    poster: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&h=1200&q=85",
    kind: "tall",
    position: "center 46%",
  },
  {
    label: "Family Stories",
    tag: "Family holidays",
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&h=900&q=85",
    kind: "wide",
    position: "center 52%",
  },
  {
    label: "Stays Worth Remembering",
    tag: "Curated accommodation",
    poster: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&h=1200&q=85",
    kind: "tall",
    position: "center 58%",
  },
];

function MomentCard({ item }) {
  return (
    <a href="#contact" className={`moment moment--${item.kind}`}>
      {item.video ? (
        <video autoPlay muted loop playsInline preload="metadata" poster={item.poster} style={{ objectPosition: item.position }}>
          <source src={item.video} type="video/mp4" />
        </video>
      ) : (
        <img src={item.poster} alt={`${item.label} — ${item.tag}`} loading="lazy" style={{ objectPosition: item.position }} />
      )}
      <div className="moment__scrim" />
      {item.video && <span className="moment__play"><Play size={13} fill="currentColor" /> Playing</span>}
      <div className="moment__body">
        <span>{item.tag}</span>
        <h3>{item.label}</h3>
        <span className="moment__explore">Explore <ArrowUpRight size={14} /></span>
      </div>
    </a>
  );
}

export default function JourneysInMotion() {
  return (
    <section id="experiences" className="section reels">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Holiday &amp; Leisure</span>
            <h2>Designed for more<br />than getting away.</h2>
          </div>
          <p>Getaways and group experiences shaped around connection — with considered stays, activities, dinners, adventures and moments that feel personal.</p>
        </div>
        <div className="moments">
          {MOMENTS.map((item) => <MomentCard item={item} key={item.label} />)}
        </div>
      </div>
    </section>
  );
}
