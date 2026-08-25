import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import "../components/Contact.css";
import "./PlanYourJourney.css";

export default function PlanYourJourney() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <article className="plan">
      <div className="plan__hero">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&h=900&q=80"
          alt="Sunrise over an open savannah horizon"
        />
        <div className="plan__scrim" />
        <div className="wrap plan__hero-content">
          <span className="eyebrow">Your Plans. Our Move.</span>
          <h1>Send Us Your Request</h1>
          <div className="plan__breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Send a Request</span>
          </div>
        </div>
      </div>

      <section className="section plan__body">
        <div className="wrap">
          <div className="plan__intro">
            <span className="eyebrow">Get In Touch</span>
            <h2>What can we coordinate for you?</h2>
            <p>
              Share your objective, timing, preferences and budget. We will shape
              the right travel, gathering, event or experience solution.
            </p>
          </div>

          <div className="contact__wrap plan__wrap">
            <div className="contact__info">
              <h3 className="plan__info-head">Contact Information</h3>
              <ul className="contact__list">
                <li>
                  <Phone size={17} strokeWidth={1.5} />
                  <div>
                    <span>Call us</span>
                    <a href="tel:+254722000000">+254 722 000 000</a>
                  </div>
                </li>
                <li>
                  <MessageCircle size={17} strokeWidth={1.5} />
                  <div>
                    <span>WhatsApp</span>
                    <a href="https://wa.me/254722000000">Chat with a trip designer</a>
                  </div>
                </li>
                <li>
                  <Mail size={17} strokeWidth={1.5} />
                  <div>
                    <span>Email us</span>
                    <a href="mailto:journeys@altheontours.com">journeys@altheontours.com</a>
                  </div>
                </li>
                <li>
                  <MapPin size={17} strokeWidth={1.5} />
                  <div>
                    <span>Visit us</span>
                    <a href="#">12 Meridian Court, Nairobi</a>
                  </div>
                </li>
              </ul>

              <h3 className="plan__info-head plan__info-head--social">Stay Connected</h3>
              <div className="footer__social plan__social">
                <a href="#" aria-label="Instagram"><Instagram size={17} strokeWidth={1.5} /></a>
                <a href="#" aria-label="Facebook"><Facebook size={17} strokeWidth={1.5} /></a>
                <a href="#" aria-label="YouTube"><Youtube size={17} strokeWidth={1.5} /></a>
              </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="contact__success">
                  <h3>Message received</h3>
                  <p>
                    Thank you — a trip designer will be in touch shortly to start
                    understanding and shaping your request.
                  </p>
                </div>
              ) : (
                <>
                  <div className="contact__row">
                    <label>
                      Full name *
                      <input type="text" name="name" required placeholder="Jane Doe" />
                    </label>
                    <label>
                      Email address *
                      <input type="email" name="email" required placeholder="jane@email.com" />
                    </label>
                  </div>
                  <div className="contact__row">
                    <label>
                      Phone number *
                      <input type="tel" name="phone" required placeholder="+254 712 345 678" />
                    </label>
                    <label>
                      Service needed
                      <select name="service" defaultValue="">
                        <option value="" disabled>Select a service</option>
                        <option>Travel Desk</option>
                        <option>Corporate Travel</option>
                        <option>Hybrid Team Gathering</option>
                        <option>Leisure Experience</option>
                        <option>Event Coordination</option>
                      </select>
                    </label>
                  </div>
                  <div className="contact__row">
                    <label>
                      Preferred start date
                      <input type="date" name="startdate" />
                    </label>
                    <label>
                      Preferred end date
                      <input type="date" name="enddate" />
                    </label>
                  </div>
                  <label>
                    Tell us what you need
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Objective, destination or venue, group size, budget and the arrangements you would like us to coordinate."
                    />
                  </label>
                  <button type="submit" className="btn btn-solid contact__submit">
                    Send My Request <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                  <p className="contact__fine">Secure &amp; confidential — no spam, ever.</p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </article>
  );
}
