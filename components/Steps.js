const steps = [
  { t: "Assess", d: "Site, power, timeline, constraints, and deployment posture." },
  { t: "Design", d: "Stack architecture, vendor pathways, scale plan, and readiness targets." },
  { t: "Deliver", d: "Commissioning, operational readiness, and expansion roadmap." },
];

export default function Steps() {
  return (
    <div className="steps">
      {steps.map((s, i) => (
        <div className="stepCard" key={s.t}>
          <div className="stepNum">{String(i + 1).padStart(2, "0")}</div>
          <div>
            <div className="stepTitle">{s.t}</div>
            <div className="muted">{s.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
