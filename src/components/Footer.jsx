import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div className="footer__brand">
          <div className="nav__brand footer__logo">
            <img src="/logo-mark.png" alt="Altheon" className="nav__logo" />
          </div>
          <p>
            Travel, events and experiences coordinated around your plans. Share
            the brief and leave the details to us.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Instagram size={17} strokeWidth={1.5} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={17} strokeWidth={1.5} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={17} strokeWidth={1.5} /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <Link to="/services">Services</Link>
          <Link to="/about">About Altheon</Link>
          <Link to="/#corporate">Corporate &amp; Hybrid</Link>
          <Link to="/#process">How It Works</Link>
          <Link to="/journal">Blog</Link>
          <Link to="/#faq">FAQ</Link>
        </div>

        <div className="footer__col">
          <h4>Solutions</h4>
          <Link to="/services/travel-desk">Travel Desk</Link>
          <Link to="/services/corporate">Corporate</Link>
          <Link to="/services/hybrid">Hybrid Teams</Link>
          <Link to="/services/experiences">Experiences</Link>
          <Link to="/services/events">Events</Link>
        </div>

        <div className="footer__col footer__newsletter">
          <h4>Stay Connected</h4>
          <p>Useful travel ideas, planning notes and company updates.</p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" required />
            <button type="submit" className="btn btn-solid">Join</button>
          </form>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <span>© 2026 Altheon Tours &amp; Travel. All rights reserved.</span>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
