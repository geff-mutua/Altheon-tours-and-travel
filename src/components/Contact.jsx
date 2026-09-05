import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Lock,
  Star,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { sendBookingEmail } from "../lib/sendBookingEmail";
import { initials } from "../lib/initials";
import "./Contact.css";

const QUOTE = {
  text: "Every detail felt considered before we even thought to ask. Altheon designed ten days in Kenya that read like they'd known us for years.",
  name: "Naomi R.",
  date: "Aug 2025",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      await sendBookingEmail(e.target);
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to send booking email", err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <div className="contact-card__head">
          <span className="eyebrow">Get In Touch</span>
          <h2>Plan Your Journey</h2>
          <p>
            Share your travel, event or experience brief and our team will
            shape the right solution for you.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-card__info">
            <h3>Contact Information</h3>
            <p>Reach out to us directly or fill out the form</p>

            <ul className="contact-card__list">
              <li>
                <span className="contact-card__icon"><Phone size={16} strokeWidth={1.5} /></span>
                <div>
                  <span>Call us</span>
                  <a href="tel:+254718441414">+254 718 441 414</a>
                </div>
              </li>
              <li>
                <span className="contact-card__icon"><MessageCircle size={16} strokeWidth={1.5} /></span>
                <div>
                  <span>WhatsApp</span>
                  <a href="https://wa.me/254718441414" className="contact-card__whatsapp">
                    Chat on WhatsApp
                  </a>
                </div>
              </li>
              <li>
                <span className="contact-card__icon"><Mail size={16} strokeWidth={1.5} /></span>
                <div>
                  <span>Email us</span>
                  <a href="mailto:altheontours@gmail.com">altheontours@gmail.com</a>
                </div>
              </li>
              <li>
                <span className="contact-card__icon"><MapPin size={16} strokeWidth={1.5} /></span>
                <div>
                  <span>Visit us</span>
                  <a href="#">12 Meridian Court, Nairobi</a>
                </div>
              </li>
            </ul>

            <div className="contact-card__social">
              <a href="#" aria-label="Facebook"><Facebook size={16} strokeWidth={1.5} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} strokeWidth={1.5} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={16} strokeWidth={1.5} /></a>
            </div>
          </div>

          <form className="contact-card__form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact-card__success">
                <h3>Message received</h3>
                <p>
                  Thank you — a trip designer will be in touch shortly to
                  start shaping your itinerary.
                </p>
              </div>
            ) : (
              <>
                <div className="contact-card__row">
                  <label>
                    Full Name *
                    <input type="text" name="name" required placeholder="Enter your full name" />
                  </label>
                  <label>
                    Email Address *
                    <input type="email" name="email" required placeholder="Enter your email" />
                  </label>
                </div>

                <div className="contact-card__row">
                  <label>
                    Phone Number *
                    <div className="contact-card__phone">
                      <select name="phoneCode" defaultValue="+254">
                        <option value="+254">KE +254</option>
                        <option value="+255">TZ +255</option>
                        <option value="+256">UG +256</option>
                        <option value="+250">RW +250</option>
                        <option value="+44">UK +44</option>
                        <option value="+1">US +1</option>
                      </select>
                      <input type="tel" name="phone" required placeholder="712 345 678" />
                    </div>
                  </label>
                  <label>
                    Preferred Start Date (Optional)
                    <input type="date" name="startDate" />
                  </label>
                </div>

                <div className="contact-card__row contact-card__row--single">
                  <label>
                    Preferred End Date (Optional)
                    <input type="date" name="endDate" />
                  </label>
                </div>

                <label>
                  Tell Us What You Need (Optional)
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your ideal trip — destinations, activities, accommodation preferences…"
                  />
                </label>

                <button type="submit" className="btn btn-solid contact-card__submit" disabled={sending}>
                  {sending ? "Sending…" : "Request Free Quote"} <Send size={15} strokeWidth={1.5} />
                </button>

                {error && (
                  <p className="contact-card__error">
                    Something went wrong sending your request — please try
                    again or email us directly at altheontours@gmail.com.
                  </p>
                )}

                <div className="contact-card__trust">
                  <span><Lock size={12} strokeWidth={1.5} /> Secure &amp; Confidential</span>
                  <span><Star size={12} strokeWidth={1.5} /> 5-Star Rated</span>
                </div>

                <div className="contact-card__quote">
                  <p>&ldquo;{QUOTE.text}&rdquo;</p>
                  <div className="contact-card__quote-foot">
                    <span className="contact-card__icon contact-card__icon--avatar">{initials(QUOTE.name)}</span>
                    <div>
                      <strong>{QUOTE.name}</strong>
                      <span>{QUOTE.date}</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
