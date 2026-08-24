import { Compass, PenLine, Users, LifeBuoy } from "lucide-react";
import "./WhyUs.css";

const FEATURES = [
  {
    icon: Compass,
    title: "Local, not licensed-in",
    text: "Our guides live where they guide. They're partners in the design, not contractors reading a script.",
  },
  {
    icon: PenLine,
    title: "Built from a blank page",
    text: "No templated packages. Every itinerary is drafted around your pace, your interests, and your calendar.",
  },
  {
    icon: Users,
    title: "Private by default",
    text: "Your journey is yours alone, unless you choose one of our small, capped group departures.",
  },
  {
    icon: LifeBuoy,
    title: "A number that answers",
    text: "A dedicated trip designer and regional desk are reachable for the entire length of your trip.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="section why">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Why Travel With Us</span>
            <h2>The difference is in what we don't do</h2>
          </div>
          <p>Four commitments we hold on every single journey, no exceptions.</p>
        </div>

        <div className="why__grid">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <div className="why__card" key={title}>
              <span className="why__index">{String(i + 1).padStart(2, "0")}</span>
              <Icon size={26} strokeWidth={1.25} color="var(--brass-bright)" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
