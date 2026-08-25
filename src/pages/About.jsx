import { ArrowRight, Check, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { companyProfile } from "../company-profile";
import "./About.css";

export default function About() {
  return (
    <article className="about-page">
      <header className="about-hero">
        <img src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1920&q=85" alt="Map and travel-planning materials" />
        <div className="about-hero__scrim" />
        <div className="wrap about-hero__content">
          <span className="eyebrow">About Altheon</span>
          <h1>We don't just book trips.<br />We create solutions.</h1>
          <p>Travel, meetings, events and experiences—planned around what matters to you.</p>
        </div>
      </header>

      <section className="section about-story">
        <div className="wrap about-story__grid">
          <div><span className="eyebrow">Our Brand Idea</span><h2>More than a traditional tours and travel agency.</h2></div>
          <div className="about-story__copy">{companyProfile.brandIdea.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="about-promise">
        <div className="about-promise__image"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85" alt="People planning together around a table" loading="lazy" /></div>
        <div className="about-promise__content">
          <span className="eyebrow">Our Core Promise</span>
          <Quote size={34} strokeWidth={1} />
          <h2>{companyProfile.promise.headline}</h2>
          <div className="about-promise__problem"><span>The client problem we solve</span><strong>“{companyProfile.promise.problem}”</strong><p>{companyProfile.promise.answer}</p></div>
        </div>
      </section>

      <section className="section about-difference">
        <div className="wrap">
          <div className="section-head"><div><span className="eyebrow">What Makes Altheon Different</span><h2>Solutions, not transactions.</h2></div><p>One accountable partner connecting travel, accommodation, meetings, events and experiences.</p></div>
          <div className="about-difference__grid">{companyProfile.differentiators.map((item, index) => <article key={item}><span>0{index + 1}</span><Check size={20} /><p>{item}</p></article>)}</div>
        </div>
      </section>

      <section className="section about-values">
        <div className="wrap">
          <div className="section-head"><div><span className="eyebrow">Our Core Values</span><h2>How we show up.</h2></div><p>Nine principles guide every client interaction, booking, proposal, itinerary and event.</p></div>
          <div className="about-values__grid">{companyProfile.values.map((value, index) => <article key={value.name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{value.name}</h3><p>{value.description}</p></article>)}</div>
        </div>
      </section>

      <section className="about-philosophy">
        <div className="wrap about-philosophy__inner"><span className="eyebrow">The Altheon Philosophy</span><h2>{companyProfile.philosophy}</h2><Link to="/services" className="btn btn-ghost">Explore our services <ArrowRight size={15} /></Link></div>
      </section>

      <section className="section about-experience">
        <div className="wrap">
          <div className="section-head"><div><span className="eyebrow">The Altheon Customer Experience</span><h2>Clear from brief<br />to follow-up.</h2></div><p>Seven steps keep the client informed and the solution accountable.</p></div>
          <div className="about-experience__steps">{companyProfile.process.map((step, index) => <article key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></article>)}</div>
        </div>
      </section>

      <section className="section about-clients">
        <div className="wrap about-clients__grid">
          <div><span className="eyebrow">Who We Serve</span><h2>Built for work, life and everything that brings people together.</h2><p>Altheon is designed to serve corporate and leisure clients with the same commitment to convenient, professional coordination.</p></div>
          <div className="about-clients__list">{companyProfile.targetClients.map((client) => <span key={client}>{client}</span>)}</div>
        </div>
      </section>

      <section className="about-final"><div className="wrap"><span className="eyebrow">Tembea na A&amp;T</span><h2>Your plans. Our move.</h2><p>Share what you need and let Altheon take care of the details.</p><Link to="/plan-your-journey" className="btn btn-solid">Start a conversation <ArrowRight size={15} /></Link></div></section>
    </article>
  );
}
