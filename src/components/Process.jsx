import "./Process.css";

const STEPS = [
  ["01", "Tell us what you need", "Share the objective, destination or occasion."],
  ["02", "We understand the brief", "We clarify preferences, timing and budget."],
  ["03", "We design the solution", "The right route, venue, experience and suppliers."],
  ["04", "We coordinate it all", "Bookings, transport and arrangements come together."],
  ["05", "You receive clarity", "A clear itinerary and everything you need to know."],
  ["06", "We remain available", "Support continues throughout the agreed scope."],
  ["07", "We follow up", "Your feedback helps us improve future experiences."],
];

export default function  Process() {
  return (
    <section id="process" className="section process">
      <div className="wrap">
        <div className="section-head">
          <div><span className="eyebrow">How Altheon Works</span><h2>You bring the plan.<br />We make the arrangements.</h2></div>
          {/* <p>A clear, accountable process from the first conversation to the final follow-up.</p> */}
        </div>
        <div className="process__layout">
          <div className="process__grid">
            {STEPS.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>

          <figure className="process__visual">
            <img src="/youngafrikanna.jpeg" alt="Altheon trip designer coordinating a client's journey" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  );
}
