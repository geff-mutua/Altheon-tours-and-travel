import "./Intro.css";

const DESTINATIONS = [
  { name: "Kenya", image: "masai-mara.jpg", alt: "Two lions drinking at a waterhole in the Masai Mara", wide: true },
  { name: "Tanzania", image: "tanzania.jpeg", alt: "Tanzania", wide: false },
  { name: "Gorilla Trekking in Rwanda", image: "rwanda.jpeg", alt: "Gorilla", wide: false },
  { name: "victoria falls in Zambia", image: "zambia.jpeg", alt: "victoria falls in Zambia", wide: false },
  { name: "African Penguins at South Africa", image: "sa.jpeg", alt: "Penguins", wide: false },
  { name: "Turkey", image: "turkey.jpg", alt: "Architecture in Turkey", wide: true },
  { name: "Paris", image: "paris.jpeg", alt: "The Eiffel Tower beside the River Seine in Paris" },
  { name: "Bali", image: "bali.jpeg", alt: "A lakeside temple in Bali", position: "center 28%" },
  { name: "Dubai", image: "dubai.jpg", alt: "Dubai skyline with the Burj Khalifa" },
  { name: "Seychelles", image: "seychelles.jpeg", alt: "Seychelles" },
  // { name: "Mt Kenya", image: "mtKenya.jpeg", alt: "Mt Kenya Beach", wide: false },
];

export default function Intro() {
  return (
    <section id="intro" className="section intro" aria-labelledby="intro-title">
      <div className="wrap intro__wrap">
        <header className="intro__header">
          <h2 id="intro-title">Popular Destinations</h2>
          <h4>Discover Kenya with Altheon Tours & Travel</h4>
          <p>From breathtaking safaris and wildlife encounters to tropical beaches and scenic escapes, Kenya offers unforgettable experiences for every kind of traveller. Explore some of our most popular destinations and let us help you plan your next adventure.</p>
        </header>
        <div className="intro__layout">
          {DESTINATIONS.map(({ name, image, alt, wide, position }) => (
            <figure className={`intro__visual${wide ? " intro__visual--wide" : ""}`} key={name}>
              <img
                src={`/destinations/${image}`}
                alt={alt}
                loading="lazy"
                style={position ? { objectPosition: position } : undefined}
              />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
