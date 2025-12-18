export default function Hero() {
  return (
    <section className="hero">
      <div className="heroCard">
        <div className="eyebrow">Layeready</div>
        <h1 className="h1">Built for what comes next</h1>
        <p className="lead">
          We design and stand up scalable AI compute capacity — from early pilots
          to expansion-ready platforms.
        </p>

        <div className="heroActions">
          <a className="btn" href="mailto:info@layeready.com?subject=Capacity%20request">
            Request capacity
          </a>
          <a className="btn btnGhost" href="#offerings">
            View offerings
          </a>
        </div>

        <div className="pillRow" style={{ marginTop: 18 }}>
          <span className="pill">Deployable stacks</span>
          <span className="pill">Vendor-agnostic design</span>
          <span className="pill">Scale path: pilot → expansion</span>
        </div>
      </div>
    </section>
  );
}
