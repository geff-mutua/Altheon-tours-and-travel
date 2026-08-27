import {
  ArrowRight,
  Quote,
  Eye,
  Target,
  Plane,
  Building2,
  Compass,
  Palmtree,
  Globe2,
  Briefcase,
  Users,
  FileText,
  Car,
  Sparkles,
  CalendarDays,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

const values = [
  { name: "Excellence", description: "High standards in every journey and interaction." },
  { name: "Personalized Service", description: "Solutions tailored to individual needs and preferences." },
  { name: "Integrity & Trust", description: "Honesty, transparency and professionalism." },
  { name: "Attention to Detail", description: "Careful planning that makes travel seamless." },
  { name: "Reliability", description: "Responsive support throughout the journey." },
  { name: "Discovery & Experience", description: "Meaningful experiences and lasting memories." },
];

const experiences = [
  { title: "Maasai Mara & Wildlife", img: "/about/maasai-mara-lion.jpg" },
  { title: "Kenyan Coast & Beaches", img: "/about/kenyan-coast-dhows.jpg" },
  { title: "Nairobi & City Experiences", img: "/about/nairobi-skyline.jpg" },
  { title: "Mount Kenya & Nature", img: "/about/mount-kenya.jpg" },
  { title: "Adventure & Culture", img: "/about/adventure-culture.jpg" },
];

const servicesList = [
  { icon: Plane, name: "Air Ticketing", description: "Domestic & international flight bookings." },
  { icon: Building2, name: "Hotel & Accommodation", description: "Hotels, resorts, lodges and guesthouses." },
  { icon: Compass, name: "Safari & Wildlife", description: "Curated experiences across Kenya's iconic destinations." },
  { icon: Palmtree, name: "Holiday & Leisure", description: "Beach holidays, honeymoons, family & weekend escapes." },
  { icon: Globe2, name: "International Travel", description: "Planning for Africa & worldwide destinations." },
  { icon: Briefcase, name: "Corporate Travel", description: "Professional solutions for companies & organizations." },
  { icon: Users, name: "Group Travel", description: "Coordinated travel for groups, schools & conferences." },
  { icon: FileText, name: "Visa Assistance", description: "Guidance with travel documentation & visa processes." },
  { icon: Car, name: "Airport Transfers", description: "Smooth arrival & departure arrangements." },
];

const difference = [
  { title: "Personalized", description: "Every journey is designed around your needs, preferences and purpose." },
  { title: "Attention to Detail", description: "We carefully manage the details that make travel seamless." },
  { title: "Comfort & Convenience", description: "We prioritize a smooth and comfortable experience from planning to arrival." },
  { title: "Professional Service", description: "Responsive, polished and attentive service." },
  { title: "Tailor-Made", description: "Travel experiences shaped around your interests and lifestyle." },
  { title: "Reliable Support", description: "Support throughout the planning and travel process." },
];

const corporate = [
  { icon: Plane, name: "Corporate Air Ticketing", description: "Domestic & international flights." },
  { icon: Building2, name: "Hotel & Accommodation", description: "Selected based on comfort, convenience & requirements." },
  { icon: CalendarDays, name: "Business Trip Planning", description: "Coordinated arrangements around schedules & objectives." },
  { icon: Users, name: "Group & Conference Travel", description: "For teams, delegates & events." },
  { icon: ShieldCheck, name: "Travel Policy Support", description: "Aligned with company policies & budgets." },
];

export default function About() {
  return (
    <article className="about-page">
      <header className="about-hero">
        <img src="/about/kilimanjaro-safari.jpg" alt="A safari vehicle and elephant on the plains beneath Mount Kilimanjaro" />
        <div className="about-hero__scrim" />
        <div className="wrap about-hero__content">
          <span className="eyebrow">01 / Welcome</span>
          <h1>Welcome to Altheon</h1>
          <p className="about-hero__lead">Precision, comfort and unforgettable experiences.</p>
          <p className="about-hero__body">
            We curate journeys for those who value precision, comfort and unforgettable experiences.
            Every trip is thoughtfully designed, professionally executed and supported from start to
            finish — ensuring a seamless, elevated travel experience.
          </p>
          <blockquote className="about-hero__quote">
            <Quote size={26} strokeWidth={1} />
            Travel is more than logistics, it's about creating memories that last a lifetime.
          </blockquote>
        </div>
      </header>

      <section className="section about-story">
        <div className="wrap about-story__grid">
          <div className="about-story__intro">
            <span className="eyebrow">02 / About Us</span>
            <h2>A thoughtful approach to travel, built around the client.</h2>
            <div className="about-story__figure">
              <img src="/about/safari-lodge-deck.jpg" alt="A traveller relaxing on a safari lodge deck overlooking the bush" loading="lazy" />
            </div>
          </div>
          <div className="about-story__copy">
            <p>
              Welcome to Altheon Tours and Travel, where we curate journeys for those who value
              precision, comfort, and unforgettable experiences.
            </p>
            <p>
              We plan every detail with care, sophistication and discretion. Each journey is tailored
              to your purpose, preferences and lifestyle, executed flawlessly, and supported from
              start to finish.
            </p>
            <p>
              At Altheon, travel is more than logistics — it is a seamless, elevated experience
              designed to exceed expectations.
            </p>
            <div className="about-tags">
              <span>Precision</span>
              <span>Comfort</span>
              <span>Discretion</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-foundation">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">03 / Our Foundation</span>
              <h2>Purpose with a sense of place.</h2>
            </div>
          </div>
          <div className="about-foundation__grid">
            <article className="about-foundation__card">
              <Eye size={26} strokeWidth={1.4} />
              <h3>Our Vision</h3>
              <p>
                To become a trusted and distinguished travel partner in Kenya and beyond, known for
                creating seamless, personalized and memorable travel experiences that inspire people
                to explore the world with confidence.
              </p>
            </article>
            <article className="about-foundation__card">
              <Target size={26} strokeWidth={1.4} />
              <h3>Our Mission</h3>
              <p>
                To provide exceptional travel and tourism solutions tailored to every client's
                purpose, preferences and lifestyle, combining professional expertise, personalized
                service, comfort and attention to detail.
              </p>
            </article>
          </div>
          <div className="about-values">
            <span className="about-values__label">Our Core Values</span>
            <div className="about-values__grid">
              {values.map((value, index) => (
                <article key={value.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h4>{value.name}</h4>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section about-experiences">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">04 / Experiences</span>
              <h2>Tembea Kenya the Altheon Way</h2>
            </div>
            <p>From iconic wildlife to coastal escapes, discover Kenya through experiences made for you.</p>
          </div>
          <div className="about-experiences__grid">
            {experiences.map((experience, index) => (
              <article key={experience.title} className="about-experiences__card">
                <img src={experience.img} alt={experience.title} loading="lazy" />
                <div className="about-experiences__overlay" />
                <div className="about-experiences__body">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{experience.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">05 / Our Services</span>
              <h2>Everything arranged around your journey.</h2>
            </div>
            <p>Professional travel solutions, tailored to your purpose.</p>
          </div>
          <div className="about-services__grid">
            {servicesList.map((service) => (
              <article key={service.name}>
                <service.icon size={22} strokeWidth={1.5} />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <p className="about-services__note">
            <Sparkles size={15} strokeWidth={1.5} />
            <span>
              <strong>Customized Experiences</strong> — tailor-made itineraries around your interests
              and schedule.
            </span>
          </p>
        </div>
      </section>

      <section className="section about-difference">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">06 / The Altheon Difference</span>
              <h2>Why choose Altheon?</h2>
            </div>
            <p>A more thoughtful way to travel.</p>
          </div>
          <div className="about-difference__grid">
            {difference.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p className="about-difference__tagline">Your Journey, Our Priority.</p>
        </div>
      </section>

      <section className="about-corporate">
        <div className="about-corporate__image">
          <img src="/about/flight-clouds.jpg" alt="An aircraft wing above the clouds" loading="lazy" />
        </div>
        <div className="about-corporate__content">
          <span className="eyebrow">07 / Corporate Travel</span>
          <h2>Business travel, handled with precision.</h2>
          <p className="about-corporate__lead">Efficient, reliable and carefully coordinated solutions.</p>
          <p>
            We understand that business travel requires efficiency, reliability and careful
            coordination. Our corporate travel solutions help organizations manage their travel
            requirements smoothly while allowing their teams to focus on their core responsibilities.
          </p>
          <ul className="about-corporate__list">
            {corporate.map((item) => (
              <li key={item.name}>
                <item.icon size={18} strokeWidth={1.5} />
                <span>
                  <strong>{item.name}</strong> — {item.description}
                </span>
              </li>
            ))}
          </ul>
          <p className="about-corporate__tags">
            Business Travel • Groups • Conferences • Executive Support
          </p>
        </div>
      </section>

      <section className="about-final">
        <div className="wrap about-final__inner">
          <span className="eyebrow">Let's plan your next journey</span>
          <h2>Travel • Explore • Experience</h2>
          <p>Altheon Tours and Travel — precision, comfort, unforgettable experiences.</p>
          <div className="about-final__contacts">
            <a href="tel:+254718441414"><Phone size={16} strokeWidth={1.6} /> 0718 441 414</a>
            <a href="mailto:altheontours@gmail.com"><Mail size={16} strokeWidth={1.6} /> altheontours@gmail.com</a>
            <span><MapPin size={16} strokeWidth={1.6} /> Nairobi, Kenya</span>
          </div>
          <Link to="/plan-your-journey" className="btn btn-solid">
            Start a conversation <ArrowRight size={15} />
          </Link>
          <span className="about-final__seal">Tembea Kenya the Altheon Way</span>
        </div>
      </section>
    </article>
  );
}
