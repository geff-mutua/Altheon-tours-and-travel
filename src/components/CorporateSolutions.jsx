import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import "./CorporateSolutions.css";

const DAYS = [
  { day: "Day 01", title: "Arrive & connect", detail: "Airport transfers, hotel check-in and a hosted welcome dinner." },
  { day: "Day 02", title: "Meet & collaborate", detail: "Breakfast, conference venue, workshop, lunch, team-building and dinner." },
  { day: "Day 03", title: "Align & depart", detail: "Strategy meeting, lunch, checkout and coordinated departure transfers." },
];

export default function CorporateSolutions() {
  return (
    <section id="corporate" className="corporate">
      <div className="corporate__visual">
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=85" alt="Team collaborating during an off-site gathering" loading="lazy" />
        <div className="corporate__visual-copy">
          <span>For companies that need people to</span>
          <strong>move, meet &amp; connect.</strong>
        </div>
      </div>
      <div className="corporate__content">
        <span className="eyebrow">Corporate &amp; Hybrid Teams</span>
        <h2>One brief in.<br />A complete gathering out.</h2>
        <p>For SMEs, hybrid companies, NGOs and corporate teams, Altheon coordinates the people, places and suppliers behind productive business travel and memorable company gatherings.</p>
        <div className="corporate__benefits">
          <span><Check size={15} /> One accountable coordination partner</span>
          <span><Check size={15} /> Clear itinerary and relevant information</span>
          <span><Check size={15} /> Support throughout the agreed scope</span>
        </div>
        <div className="corporate__example">
          <span className="corporate__example-label">Example · 3-day hybrid-company gathering</span>
          {DAYS.map((item) => (
            <div className="corporate__day" key={item.day}>
              <span>{item.day}</span><div><strong>{item.title}</strong><p>{item.detail}</p></div>
            </div>
          ))}
        </div>
        <Link to="/plan-your-journey" className="btn btn-solid">Plan a company gathering <ArrowUpRight size={15} /></Link>
      </div>
    </section>
  );
}
