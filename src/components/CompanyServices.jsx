import { ArrowUpRight, BriefcaseBusiness, CalendarDays, Heart, Laptop2, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import "./CompanyServices.css";

const SERVICES = [
  {
    code: "A&T 01",
    icon: Plane,
    title: "Travel Desk",
    text: "Everyday and urgent travel, organised through one responsive desk.",
    items: ["Flight bookings", "Hotels & accommodation", "Airport transfers", "Travel planning & itineraries", "Last-minute arrangements", "Travel consultancy & support"],
  },
  {
    code: "A&T 02",
    icon: BriefcaseBusiness,
    title: "Corporate",
    text: "Practical movement and meeting solutions for employees, executives and clients.",
    items: ["Corporate travel management", "Executive travel", "Meetings & conference venues", "Retreats & off-sites", "Business and client visits", "Corporate event logistics"],
  },
  {
    code: "A&T 03",
    icon: Laptop2,
    title: "Hybrid",
    text: "Bring distributed teams together without managing a web of suppliers.",
    items: ["Short-term company visits", "Transport & accommodation", "Meeting venue arrangements", "Team-building activities", "Meals & social experiences", "End-to-end gathering coordination"],
  },
  {
    code: "A&T 04",
    icon: Heart,
    title: "Experiences",
    text: "Personal journeys designed around connection, celebration and memory.",
    items: ["Couples' getaways", "Honeymoons & anniversaries", "Family holidays", "Friends' getaways", "Group experiences", "Curated activities"],
  },
  {
    code: "A&T 05",
    icon: CalendarDays,
    title: "Events",
    text: "Purposeful meetings and events with the logistics handled from end to end.",
    items: ["Corporate meetings", "Workshops & retreats", "Team-building events", "Conference logistics", "Venue sourcing", "Event travel & transfers"],
  },
];

export default function CompanyServices() {
  return (
    <section id="services" className="section services">
      <div className="wrap">
        <div className="section-head services__head">
          <div>
            <span className="eyebrow">What We Coordinate</span>
            <h2>Five desks.<br />One seamless partner.</h2>
          </div>
          <p>Book one requirement or hand us the complete brief. Each solution is built around your timing, budget and objective.</p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ code, icon: Icon, title, text, items }) => (
            <article className="service-card" key={title}>
              <div className="service-card__top">
                <span>{code}</span>
                <Icon size={24} strokeWidth={1.4} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link to="/plan-your-journey">Discuss this service <ArrowUpRight size={14} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
