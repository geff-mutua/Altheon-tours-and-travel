import "./Intro.css";

const DESTINATIONS = [
  { name: "Dubai", image: "dubai.jpg", alt: "Dubai skyline with the Burj Khalifa" },
  { name: "Kenya", image: "masai-mara.jpg", alt: "Two lions drinking at a waterhole in the Masai Mara", wide: true },
  { name: "Bali", image: "bali.jpeg", alt: "A lakeside temple in Bali", position: "center 28%" },
  { name: "Seychelles", image: "seychelles.jpeg", alt: "Seychelles" },
  { name: "Paris", image: "paris.jpeg", alt: "The Eiffel Tower beside the River Seine in Paris" },
  { name: "Turkey", image: "turkey.jpg", alt: "Architecture in Turkey", wide: true },
  // { name: "Diani Beach", image: "diani.jpeg", alt: "Diani Beach", wide: false },
  // { name: "Mt Kenya", image: "mtKenya.jpeg", alt: "Mt Kenya Beach", wide: false },
  { name: "victoria falls in Zambia", image: "zambia.jpeg", alt: "victoria falls in Zambia", wide: false },
  { name: "Gorilla Trekking in Rwanda", image: "rwanda.jpeg", alt: "Gorilla", wide: true },
  { name: "African Penguins at South Africa", image: "sa.jpeg", alt: "Penguins", wide: false },
];

export default function Intro() {
  return (
    <section id="intro" className="section intro" aria-labelledby="intro-title">
      <div className="wrap intro__wrap">
        <header className="intro__header">
          <h2 id="intro-title">Popular Destinations</h2>
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
