import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="wrap contact__wrap">
        <div className="contact__info">
          <span className="eyebrow">Get In Touch</span>
          <h2>Plan your journey</h2>
          <p>
            Tell us where you're dreaming of and we'll come back with a first
            draft itinerary — usually within two working days.
          </p>

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
                <a href="mailto:journeys@altheon.travel">journeys@altheon.travel</a>
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
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="contact__success">
              <h3>Message received</h3>
              <p>
                Thank you — a trip designer will be in touch shortly to start
                shaping your itinerary.
              </p>
            </div>
          ) : (
            <>
              <div className="contact__row">
                <label>
                  Full name
                  <input type="text" name="name" required placeholder="Jane Doe" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required placeholder="jane@email.com" />
                </label>
              </div>
              <div className="contact__row">
                <label>
                  Destination of interest
                  <input type="text" name="destination" placeholder="Kenya, Peru, Japan…" />
                </label>
                <label>
                  Preferred travel dates
                  <input type="text" name="dates" placeholder="e.g. March 2027" />
                </label>
              </div>
              <label>
                Tell us about your dream trip
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Group size, pace, occasions, anything you have in mind…"
                />
              </label>
              <button type="submit" className="btn btn-solid contact__submit">
                Request Free Itinerary
              </button>
              <p className="contact__fine">Secure &amp; confidential — no spam, ever.</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
