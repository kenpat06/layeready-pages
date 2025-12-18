const items = [
  {
    title: "Compute",
    desc: "Accelerator-first host profiles designed for stability and scale.",
    bullets: ["GPU tiers (training & inference)", "CPU + RAM host profiles", "Vendor-agnostic configs"],
  },
  {
    title: "Storage",
    desc: "NVMe-first designs for performance, burst, and throughput.",
    bullets: ["NVMe performance layer", "SSD / object tiers", "Designed for scale paths"],
  },
  {
    title: "Network",
    desc: "Fabric-ready topologies with clean expansion and observability.",
    bullets: ["Top-of-rack switching", "Expansion-ready fabric", "Optics + cabling strategy"],
  },
  {
    title: "Power",
    desc: "Delivery planning and monitoring built for staged ramp.",
    bullets: ["Utility coordination", "Redundancy targets", "Metering + monitoring"],
  },
  {
    title: "Cooling",
    desc: "Air-to-liquid readiness with controls and instrumentation.",
    bullets: ["Air / liquid-ready pathways", "Heat rejection strategy", "Controls + observability"],
  },
];

export default function StackGrid() {
  return (
    <div className="stackGrid">
      {items.map((x) => (
        <div key={x.title} className="stackCard">
          <div className="stackTop">
            <div className="stackIcon" aria-hidden="true" />
            <div>
              <h3 className="h3">{x.title}</h3>
              <p className="muted">{x.desc}</p>
            </div>
          </div>
          <ul className="list">
            {x.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="stackLinkRow">
            <a className="stackLink" href="mailto:info@layeready.com?subject=Offerings%20specs%20request">
              Get specs →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
