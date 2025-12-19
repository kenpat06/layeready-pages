const steps = [
  { t: "Align", d: "Clarify the target workload, constraints, and readiness expectations." },
  { t: "Design", d: "Define a modular stack and an execution plan that can expand over time." },
  { t: "Execute", d: "Coordinate delivery, commissioning readiness, and a clean ramp path." },
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
