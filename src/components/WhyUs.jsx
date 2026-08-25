import { Bolt, CheckCircle2, HeartHandshake, Lightbulb, Scale, ShieldCheck, Sparkles, UserCheck, Zap } from "lucide-react";
import "./WhyUs.css";

const FEATURES = [
  {
    icon: Bolt,
    title: "Efficiency",
    text: "Timely, practical solutions that respect our clients' time.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "When you entrust us with a request, we take responsibility for getting it done.",
  },
  {
    icon: CheckCircle2,
    title: "Commitment",
    text: "We own the need from planning and booking through coordination and support.",
  },
  {
    icon: HeartHandshake,
    title: "Customer first",
    text: "Every solution begins with your needs, preferences and objective.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We seek smarter, creative and more convenient ways to solve each challenge.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    text: "We bring imagination to purposeful, memorable and engaging experiences.",
  },
  {
    icon: Zap,
    title: "Bold & energetic",
    text: "We bring confidence, energy and a positive attitude to every request.",
  },
  {
    icon: UserCheck,
    title: "Professionalism",
    text: "Every interaction, proposal, itinerary and event is handled professionally.",
  },
  {
    icon: Scale,
    title: "Accountability",
    text: "Once we accept a request, we own delivery of the agreed solution.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="section why">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">What Guides Us</span>
            <h2>Professional in delivery.<br />Human in approach.</h2>
          </div>
          <p>Our values shape every proposal, booking, itinerary, event and client interaction.</p>
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
