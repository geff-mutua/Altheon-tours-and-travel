import "./Intro.css";

export default function Intro() {
  return (
    <section id="intro" className="section intro">
      <div className="wrap intro__grid">
        <div className="intro__label">
          <span className="eyebrow">Our Philosophy</span>
          <figure className="intro__polaroid">
            <img
              src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=400&h=500&q=80"
              alt="Trip designer's compass and route notes"
              loading="lazy"
            />
            <figcaption>Field notes, Nairobi desk</figcaption>
          </figure>
        </div>

        <h2 className="intro__statement">
          A good journey isn't found in a brochure. It's built —
          <span className="intro__statement-dim">
            {" "}
            route by route, guide by guide, around the way you actually want to travel.
          </span>
        </h2>

        <div className="intro__foot">
          <p>
            Altheon designs private expeditions across six continents, working only
            with guides, camps, and drivers we've vetted ourselves. No fixed
            packages, no shared buses — every itinerary starts as a blank map and
            a long conversation.
          </p>
          <div className="intro__stats">
            <div>
              <strong>19</strong>
              <span>years designing journeys</span>
            </div>
            <div>
              <strong>46</strong>
              <span>countries covered</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>private, tailor-made</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
