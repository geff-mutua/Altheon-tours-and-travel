import "./Intro.css";

const EXPERIENCES = [
  {
    name: "Maasai Mara",
    image: "/safari-park.jpeg",
    alt: "Travellers viewing elephants with a guide in the Maasai Mara",
  },
  {
    name: "Diani Coast",
    image: "/tiger.jpeg",
    alt: "Sunrise over the white sands and turquoise water of Diani Beach",
  },
  {
    name: "Amboseli",
    image: "/zebras.jpeg",
    alt: "Elephants beneath Mount Kilimanjaro in Amboseli",
  },
  {
    name: "Mount Kenya",
    image: "/about/mount-kenya.jpg",
    alt: "The peaks and mountain landscape of Mount Kenya",
  },
  {
    name: "Nairobi",
    image: "/giraffe.jpeg",
    alt: "The Nairobi skyline",
  },
  {
    name: "Kenyan Coast",
    image: "/about/kenyan-coast-dhows.jpg",
    alt: "Traditional dhow boats along the Kenyan coast",
  },
];

export default function Intro() {
  return (
    <section id="intro" className="section intro">
      <div className="wrap">
        <header className="intro__header">
          <span className="intro__label">Explore Kenya</span>
          <h2>Curated Journeys, Unforgottable Experiences</h2>
          <span className="intro__divider" aria-hidden="true" />
          <p>
            Altheon Tours & Travel is a travel, events and experience management company that handles every detail-from planning and booking to coordination. Whether it’s a business trip, corporate event, romantic getaway or group holiday, clients tell us what they need, and we take care of the rest.
          </p>
        </header>

        <div className="intro__layout" aria-label="Featured Kenya experiences">
          {EXPERIENCES.map(({ name, image, alt }) => (
            <figure className="intro__visual" key={name}>
              <img src={image} alt={alt} loading="lazy" />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
