import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, ArrowUpRight, Instagram, Facebook, Youtube } from "lucide-react";
import { destinationMenu, journeysMenu, discoverMenu } from "../nav-data";
import "./Navbar.css";

const MEGA_MENUS = [
  { key: "destinations", label: "Services", data: destinationMenu, kind: "mega" },
  { key: "journeys", label: "Who We Serve", data: journeysMenu, kind: "mega" },
  { key: "discover", label: "Discover", data: discoverMenu, kind: "simple" },
];

function MegaPanel({ menu }) {
  return (
    <div className="mega">
      <div className="mega__columns">
        {menu.data.columns.map((col) => (
          <div className="mega__col" key={col.heading}>
            <span className="mega__heading">{col.heading}</span>
            {col.links.map((l) => (
              <Link key={l.label} to={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      {menu.data.featured && (
        <Link to={menu.data.featured.href} className="mega__featured">
          <img src={menu.data.featured.img} alt={menu.data.featured.title} loading="lazy" />
          <div className="mega__featured-body">
            <span>{menu.data.featured.label}</span>
            <strong>{menu.data.featured.title}</strong>
            <span className="mega__featured-link">
              Explore <ArrowUpRight size={13} strokeWidth={1.5} />
            </span>
          </div>
        </Link>
      )}
      {menu.data.viewAll && (
        <Link to={menu.data.viewAll.href} className="mega__viewall">
          {menu.data.viewAll.label} <ArrowUpRight size={13} strokeWidth={1.5} />
        </Link>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (key) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__utility">
        <div className="wrap nav__utility-inner">
          <div className="nav__utility-left">
            <a href="tel:+254722000000">
              <Phone size={12} strokeWidth={1.5} /> +254 722 000 000
            </a>
            <a href="mailto:journeys@altheontours.com">
              <Mail size={12} strokeWidth={1.5} /> journeys@altheontours.com
            </a>
          </div>
          <div className="nav__utility-social">
            <a href="#" aria-label="Instagram"><Instagram size={13} strokeWidth={1.5} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={13} strokeWidth={1.5} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={13} strokeWidth={1.5} /></a>
          </div>
        </div>
      </div>

      <div className="wrap nav__inner">
        <Link to="/#top" className="nav__brand" aria-label="Altheon — home">
          <img src="/logo-mark.png" alt="Altheon" className="nav__logo" />
          <span className="nav__wordmark">ALTHEON<small>Tours &amp; Travel</small></span>
        </Link>

        <nav className="nav__links" onMouseLeave={scheduleClose}>
          {MEGA_MENUS.map((menu) => (
            <div
              key={menu.key}
              className="nav__item"
              onMouseEnter={() => openMenu(menu.key)}
            >
              <button
                className={`nav__trigger ${activeMenu === menu.key ? "is-active" : ""}`}
                onClick={() => setActiveMenu((v) => (v === menu.key ? null : menu.key))}
              >
                {menu.label}
                <ChevronDown size={13} strokeWidth={1.5} />
              </button>
              {activeMenu === menu.key && (
                <div className={menu.kind === "mega" ? "mega__wrap" : "simple__wrap"}>
                  {menu.kind === "mega" ? (
                    <MegaPanel menu={menu} />
                  ) : (
                    <div className="simple">
                      {menu.data.columns.map((col) => (
                        <div className="simple__col" key={col.heading}>
                          <span className="mega__heading">{col.heading}</span>
                          {col.links.map((l) => (
                            <Link key={l.label} to={l.href}>
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <Link to="/journal" className="nav__plain">
            Blog
          </Link>
          <Link to="/#contact" className="nav__plain">
            Contact
          </Link>
        </nav>

        <div className="nav__cta">
          <Link to="/plan-your-journey" className="btn btn-solid">
            Send a Request
          </Link>
        </div>

        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {MEGA_MENUS.map((menu) => (
            <div className="nav__mobile-group" key={menu.key}>
              <button
                className="nav__mobile-trigger"
                onClick={() => setMobileSection((v) => (v === menu.key ? null : menu.key))}
              >
                {menu.label}
                <ChevronDown
                  size={15}
                  strokeWidth={1.5}
                  style={{ transform: mobileSection === menu.key ? "rotate(180deg)" : "none" }}
                />
              </button>
              {mobileSection === menu.key && (
                <div className="nav__mobile-panel">
                  {menu.data.columns.map((col) => (
                    <div key={col.heading} className="nav__mobile-col">
                      <span className="mega__heading">{col.heading}</span>
                      {col.links.map((l) => (
                        <Link key={l.label} to={l.href} onClick={() => setOpen(false)}>
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/journal" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link to="/#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link to="/plan-your-journey" className="btn btn-solid" onClick={() => setOpen(false)}>
            Send a Request
          </Link>
        </div>
      )}
    </header>
  );
}
