import { Star, ArrowRight } from "lucide-react";
import { initials } from "../lib/initials";
import "./Reviews.css";

const REVIEWS = [
  {
    title: "Beyond your dreams",
    text: "Every detail felt considered before we even thought to ask. Altheon designed ten days in Kenya that read like they'd known us for years.",
    name: "Naomi R.",
    date: "Aug 2025",
  },
  {
    title: "You will not regret this",
    text: "We told them we wanted slow mornings and no crowds. That's exactly what Peru became — even the train times worked in our favour.",
    name: "Daniel & Priya K.",
    date: "Aug 2025",
  },
  {
    title: "Best worry-free adventure",
    text: "Our guide in the Atlas knew every village by name. It stopped feeling like a tour and started feeling like being shown home.",
    name: "Foster M.",
    date: "Jul 2025",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="wrap reviews__wrap">
        <div className="reviews__head">
          <span className="eyebrow">Trusted By Travellers</span>
          <h2>Guest Reviews</h2>
        </div>

        <div className="reviews__grid">
          {REVIEWS.map((r) => (
            <div className="review-card" key={r.name}>
              <div className="review-card__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} strokeWidth={0} fill="var(--brass)" />
                ))}
              </div>
              <h3>&ldquo;{r.title}&rdquo;</h3>
              <p>{r.text}</p>
              <div className="review-card__foot">
                <span className="review-card__avatar">{initials(r.name)}</span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews__foot">
          <a href="#" className="btn btn-ghost">
            Read All Reviews <ArrowRight size={15} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
