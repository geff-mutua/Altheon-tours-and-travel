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
          <span className="eyebrow">Your Plan. Our Move.</span>
          <h2>Tell us what you need</h2>
          <p>
            A flight, a company gathering, an event or a complete holiday —
            share the brief and our team will help shape the right solution.
          </p>

          <ul className="contact__list">
            <li>
              <Phone size={17} strokeWidth={1.5} />
              <div>
                <span>Call us</span>
                <a href="tel:+254718441414">+254 718 441 414</a>
              </div>
            </li>
            <li>
              <MessageCircle size={17} strokeWidth={1.5} />
              <div>
                <span>WhatsApp</span>
                <a href="https://wa.me/254718441414">Chat with a trip designer</a>
              </div>
            </li>
            <li>
              <Mail size={17} strokeWidth={1.5} />
              <div>
                <span>Email us</span>
                <a href="mailto:altheontours@gmail.com">altheontours@gmail.com</a>
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
                  Service or destination
                  <input type="text" name="destination" placeholder="Flights, retreat, honeymoon, Kenya…" />
                </label>
                <label>
                  Preferred dates
                  <input type="text" name="dates" placeholder="e.g. March 2027" />
                </label>
              </div>
              <label>
                Tell us what you need
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Objective, number of people, budget, locations and any arrangements you need…"
                />
              </label>
              <button type="submit" className="btn btn-solid contact__submit">
                Send My Request
              </button>
              <p className="contact__fine">Secure &amp; confidential — no spam, ever.</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
