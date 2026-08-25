import "./Intro.css";

export default function Intro() {
  return (
    <section id="intro" className="section intro">
      <div className="wrap intro__grid">
        <div className="intro__label">
          <span className="eyebrow">More Than Travel</span>
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
          We don't simply sell tickets. We create solutions —
          <span className="intro__statement-dim">
            {" "}
            bringing every journey, meeting, event and experience together around what matters to you.
          </span>
        </h2>

        <div className="intro__foot">
          <p>
            Altheon is a travel, events and experience-management company built
            for people and organisations who do not have time to coordinate
            multiple suppliers. You share the objective; we take ownership of
            planning, booking, coordination and support.
          </p>
          <div className="intro__stats">
            <div>
              <strong>01</strong>
              <span>partner from brief to delivery</span>
            </div>
            <div>
              <strong>05</strong>
              <span>integrated service desks</span>
            </div>
            <div>
              <strong>360°</strong>
              <span>coordination and support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
