import "./About.css";

const LOGO = "/about/altheon-logo.png";

/* ------------------------------------------------------------------ *
 *  About = a faithful imitation of the Altheon Company Profile 2026
 *  deck. Nine 16:9 "pages", stacked. Wording, order, colours and
 *  photography are taken directly from the document.
 * ------------------------------------------------------------------ */

const coreValues = [
  { n: "01", name: "Excellence", text: "High standards in every journey and interaction." },
  { n: "02", name: "Personalized Service", text: "Solutions tailored to individual needs and preferences." },
  { n: "03", name: "Integrity & Trust", text: "Honesty, transparency and professionalism." },
  { n: "04", name: "Attention to Detail", text: "Careful planning that makes travel seamless." },
  { n: "05", name: "Reliability", text: "Responsive support throughout the journey." },
  { n: "06", name: "Discovery & Experience", text: "Meaningful experiences and lasting memories." },
];

const experiences = [
  { n: "01", title: "Maasai Mara & Wildlife", img: "/about/maasai-mara-lion.jpg" },
  { n: "02", title: "Kenyan Coast & Beaches", img: "/about/kenyan-coast-dhows.jpg" },
  { n: "03", title: "Nairobi & City Experiences", img: "/about/nairobi-skyline.jpg" },
  { n: "04", title: "Mount Kenya & Nature", img: "/about/mount-kenya.jpg" },
  { n: "05", title: "Adventure & Culture", img: "/about/adventure-culture.jpg" },
];

const servicesGrid = [
  { icon: "✈", name: "Air Ticketing", text: "Domestic & international flight bookings." },
  { icon: "⌂", name: "Hotel & Accommodation", text: "Hotels, resorts, lodges and guesthouses." },
  { icon: "⚑", name: "Safari & Wildlife", text: "Curated experiences across Kenya's iconic destinations." },
  { icon: "☘", name: "Holiday & Leisure", text: "Beach holidays, honeymoons, family & weekend escapes." },
  { icon: "⊕", name: "International Travel", text: "Planning for Africa & worldwide destinations." },
  { icon: "✉", name: "Corporate Travel", text: "Professional solutions for companies & organizations." },
  { icon: "⌥", name: "Group Travel", text: "Coordinated travel for groups, schools & conferences." },
  { icon: "☷", name: "Visa Assistance", text: "Guidance with travel documentation & visa processes." },
  { icon: "⚑", name: "Airport Transfers", text: "Smooth arrival & departure arrangements." },
];

const difference = [
  { n: "01", title: "Personalized", text: "Every journey is designed around your needs, preferences and purpose." },
  { n: "02", title: "Attention to Detail", text: "We carefully manage the details that make travel seamless." },
  { n: "03", title: "Comfort & Convenience", text: "We prioritize a smooth and comfortable experience from planning to arrival." },
  { n: "04", title: "Professional Service", text: "Responsive, polished and attentive service." },
  { n: "05", title: "Tailor-Made", text: "Travel experiences shaped around your interests and lifestyle." },
  { n: "06", title: "Reliable Support", text: "Support throughout the planning and travel process." },
];

const corporateList = [
  { icon: "✈", name: "Corporate Air Ticketing", text: "Domestic & international flights." },
  { icon: "⌂", name: "Hotel & Accommodation", text: "Selected based on comfort, convenience & requirements." },
  { icon: "📅", name: "Business Trip Planning", text: "Coordinated arrangements around schedules & objectives." },
  { icon: "👥", name: "Group & Conference Travel", text: "For teams, delegates & events." },
  { icon: "📄", name: "Travel Policy Support", text: "Aligned with company policies & budgets." },
];

function Eyebrow({ n, label }) {
  return (
    <p className="dk-eyebrow">
      <span className="dk-eyebrow__n">{n}</span> / {label}
    </p>
  );
}

export default function About() {
  return (
    <article className="about-page">
      {/* ============ PAGE 1 — COVER ============ */}
      <section className="dk dk--cover">
        <img className="dk__bg" src="/about/kilimanjaro-safari.jpg" alt="" />
        <div className="dk__scrim" />
        <img className="dk__logo" src={LOGO} alt="Altheon Tours and Travel" />
        <div className="dk__frame dk-cover">
          <div className="dk-cover__mark">
            <h1>ALTHEON</h1>
            <p className="dk-cover__sub">T O U R S &nbsp;&amp;&nbsp; T R A V E L</p>
            <span className="dk-rule" />
            <p className="dk-cover__tag">Travel, thoughtfully curated.</p>
          </div>
          <p className="dk-cover__seal">Tembea Kenya the Altheon Way</p>
        </div>
      </section>

      {/* ============ PAGE 2 — 01 / WELCOME ============ */}
      <section className="dk dk--light dk--white">
        <span className="dk__page">02</span>
        <div className="dk__frame dk-welcome">
          <header className="dk-head">
            <Eyebrow n="01" label="Welcome" />
            <h2>Welcome to ALTHEON</h2>
            <p className="dk-sub">Precision, comfort and unforgettable experiences.</p>
          </header>
          <div className="dk-welcome__body">
            <div className="dk-card dk-card--pad">
              <p className="dk-lead">
                We curate journeys for those who value precision, comfort and unforgettable
                experiences.
              </p>
              <p>
                Every trip is thoughtfully designed, professionally executed and supported from start
                to finish — ensuring a seamless, elevated travel experience.
              </p>
              <span className="dk-rule" />
              <p className="dk-quote">
                “Travel is more than logistics, it's about creating memories that last a lifetime.”
              </p>
            </div>
            <div className="dk-collage">
              <img src="/about/welcome-collage-1.jpg" alt="Aircraft wing above the clouds at sunrise" />
              <img src="/about/welcome-collage-2.jpg" alt="Infinity pool overlooking the Indian Ocean" />
              <img src="/about/welcome-collage-3.jpg" alt="Travellers walking the Kenyan shoreline" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAGE 3 — 02 / ABOUT US ============ */}
      <section className="dk dk--light dk--cream">
        <span className="dk__page">03</span>
        <div className="dk__frame dk-about">
          <header className="dk-head">
            <Eyebrow n="02" label="About Us" />
            <h2>About Us</h2>
            <p className="dk-sub">A thoughtful approach to travel, built around the client.</p>
          </header>
          <div className="dk-about__body">
            <div className="dk-about__copy">
              <p>
                Welcome to Altheon Tours and Travel, where we curate journeys for those who value
                precision, comfort, and unforgettable experiences.
              </p>
              <p>
                We plan every detail with care, sophistication and discretion. Each journey is
                tailored to your purpose, preferences and lifestyle, executed flawlessly, and
                supported from start to finish.
              </p>
              <p>
                At Altheon, travel is more than logistics — it is a seamless, elevated experience
                designed to exceed expectations.
              </p>
            </div>
            <figure className="dk-about__figure">
              <img src="/about/safari-lodge-deck.jpg" alt="Traveller on a safari lodge deck overlooking the bush" />
              <figcaption>Precision • Comfort • Discretion</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ============ PAGE 4 — 03 / OUR FOUNDATION ============ */}
      <section className="dk dk--light dk--white">
        <span className="dk__page">04</span>
        <div className="dk__frame dk-foundation">
          <header className="dk-head">
            <Eyebrow n="03" label="Our Foundation" />
            <h2>Purpose with a sense of place.</h2>
          </header>
          <div className="dk-foundation__body">
            <div className="dk-foundation__col">
              <div className="dk-card dk-card--dark">
                <p className="dk-card__kicker">◉ Our Vision</p>
                <p>
                  To become a trusted and distinguished travel partner in Kenya and beyond, known for
                  creating seamless, personalized and memorable travel experiences that inspire people
                  to explore the world with confidence.
                </p>
              </div>
              <div className="dk-card dk-card--plain">
                <p className="dk-card__kicker dk-card__kicker--ink">◎ Our Mission</p>
                <p>
                  To provide exceptional travel and tourism solutions tailored to every client's
                  purpose, preferences and lifestyle, combining professional expertise, personalized
                  service, comfort and attention to detail.
                </p>
              </div>
            </div>
            <div className="dk-foundation__values">
              <p className="dk-label dk-label--ink">Our Core Values</p>
              <div className="dk-values">
                {coreValues.map((v) => (
                  <div key={v.n} className="dk-value">
                    <span className="dk-value__n">{v.n}</span>
                    <p className="dk-value__name">{v.name}</p>
                    <p className="dk-value__text">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAGE 5 — 04 / EXPERIENCES ============ */}
      <section className="dk dk--light dk--cream">
        <span className="dk__page">05</span>
        <div className="dk__frame dk-experiences">
          <header className="dk-head">
            <Eyebrow n="04" label="Experiences" />
            <h2>Tembea Kenya the Altheon Way</h2>
            <p className="dk-sub">
              From iconic wildlife to coastal escapes, discover Kenya through experiences made for
              you.
            </p>
          </header>
          <div className="dk-exp-grid">
            {experiences.map((e) => (
              <article key={e.n} className="dk-exp" style={{ backgroundImage: `url(${e.img})` }}>
                <div className="dk-exp__scrim" />
                <span className="dk-exp__n">{e.n}</span>
                <h3>{e.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PAGE 6 — 05 / OUR SERVICES ============ */}
      <section className="dk dk--light dk--white">
        <span className="dk__page">06</span>
        <div className="dk__frame dk-services">
          <header className="dk-head">
            <Eyebrow n="05" label="Our Services" />
            <h2>Everything arranged around your journey.</h2>
            <p className="dk-sub">Professional travel solutions, tailored to your purpose.</p>
          </header>
          <div className="dk-serv-grid">
            {servicesGrid.map((s) => (
              <article key={s.name} className="dk-serv">
                <span className="dk-serv__icon">{s.icon}</span>
                <p className="dk-serv__name">{s.name}</p>
                <p className="dk-serv__text">{s.text}</p>
              </article>
            ))}
          </div>
          <p className="dk-band">
            <strong>Customized Experiences</strong> &nbsp;•&nbsp; Tailor-made itineraries around your
            interests and schedule.
          </p>
        </div>
      </section>

      {/* ============ PAGE 7 — 06 / THE ALTHEON DIFFERENCE ============ */}
      <section className="dk dk--photo">
        <img className="dk__bg" src="/about/diani-beach.jpg" alt="" />
        <div className="dk__scrim" />
        <span className="dk__page dk__page--light">07</span>
        <div className="dk__frame dk-diff">
          <header className="dk-head dk-head--onphoto">
            <Eyebrow n="06" label="The Altheon Difference" />
            <h2>Why Choose Altheon?</h2>
            <p className="dk-sub dk-sub--light">A more thoughtful way to travel.</p>
          </header>
          <div className="dk-diff-grid">
            {difference.map((d) => (
              <article key={d.n} className="dk-diff__card">
                <span className="dk-diff__n">{d.n}</span>
                <p className="dk-diff__title">{d.title}</p>
                <p className="dk-diff__text">{d.text}</p>
              </article>
            ))}
          </div>
          <p className="dk-diff__tagline">Your Journey, Our Priority.</p>
        </div>
      </section>

      {/* ============ PAGE 8 — 07 / CORPORATE TRAVEL ============ */}
      <section className="dk dk--split dk--cream">
        <span className="dk__page">08</span>
        <div className="dk__frame dk-corp">
          <div className="dk-corp__main">
            <header className="dk-head">
              <Eyebrow n="07" label="Corporate Travel" />
              <h2>Business travel, handled with precision.</h2>
              <p className="dk-sub">Efficient, reliable and carefully coordinated solutions.</p>
            </header>
            <p className="dk-corp__intro">
              We understand that business travel requires efficiency, reliability and careful
              coordination. Our corporate travel solutions help organizations manage their travel
              requirements smoothly while allowing their teams to focus on their core
              responsibilities.
            </p>
            <ul className="dk-corp__list">
              {corporateList.map((c) => (
                <li key={c.name}>
                  <span className="dk-corp__icon">{c.icon}</span>
                  <span>
                    <strong>{c.name}</strong> — {c.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="dk-corp__tags">
              Business Travel • Groups • Conferences • Executive Support
            </p>
          </div>
          <div className="dk-corp__aside">
            <img src="/about/flight-clouds.jpg" alt="Aircraft wing above the clouds" />
          </div>
        </div>
      </section>

      {/* ============ PAGE 9 — BACK COVER ============ */}
      <section className="dk dk--photo dk--back">
        <img className="dk__bg" src="/about/resort-pool.jpg" alt="" />
        <div className="dk__scrim" />
        <span className="dk__page dk__page--light">09</span>
        <div className="dk__frame dk-back">
          <p className="dk-label dk-label--light">Let's plan your next journey</p>
          <h2>Travel • Explore • Experience</h2>
          <span className="dk-rule" />
          <p className="dk-back__name">ALTHEON TOURS AND TRAVEL</p>
          <p className="dk-back__line">Precision • Comfort • Unforgettable Experiences</p>
          <dl className="dk-back__contacts">
            <div>
              <dt>Phone</dt>
              <dd><a href="tel:+254718441414">0718 441 414</a></dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href="mailto:altheontours@gmail.com">altheontours@gmail.com</a></dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Nairobi, Kenya</dd>
            </div>
          </dl>
          <p className="dk-back__seal">Tembea Kenya the Altheon Way</p>
          <p className="dk-back__year">2026</p>
        </div>
      </section>
    </article>
  );
}
