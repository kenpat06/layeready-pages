export default function Home() {
  return (
    <div className="container">
      <header className="nav">
        <div className="brand"><span className="dot" /> Layeready</div>
        <nav className="navlinks">
          <a href="#approach">Approach</a>
          <a href="#focus">Focus</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn" href="#contact">Talk</a>
      </header>

      <main className="hero">
        <div className="kicker">Built for what comes next</div>
        <h1 className="h1">Compute-first sites for the next wave of AI.</h1>
        <p className="sub">
          Layeready sources and shapes projects where power, footprint, and execution can converge.
          We stay quiet on the front end — and rigorous behind the scenes — to turn constraints into deployable capacity.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
          <a className="btn" href="#approach">How we work</a>
          <a className="btn" href="#contact">info@layeready.com</a>
        </div>

        <div className="grid">
          <div className="card">
            <h3>Signals → Selection</h3>
            <p>We screen sites for realistic paths to near-term compute deployment, not brochure-grade “AI-ready” claims.</p>
          </div>
          <div className="card">
            <h3>Execution scaffolding</h3>
            <p>Permitting, interconnect, procurement, and delivery plans — structured early so projects don’t stall later.</p>
          </div>
          <div className="card">
            <h3>Capacity as a roadmap</h3>
            <p>Start with what’s feasible, then expand as power and infrastructure unlock — without rewriting the whole plan.</p>
          </div>
        </div>

        <section id="approach" className="section">
          <h2>Approach</h2>
          <p>
            We operate like builders: diligence that is practical, financing that is credible, and partners that can deliver.
            The homepage stays concise by design — details are shared when the conversation is real.
          </p>
        </section>

        <section id="focus" className="section">
          <h2>Focus</h2>
          <p>
            Our long-term goal is AI data center compute. Today, we concentrate on the hard parts that unlock it:
            site control, upgrade paths, and execution readiness.
          </p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>For partners, sites, or financing conversations: <b>info@layeready.com</b></p>
        </section>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Layeready</div>
        <div className="smalllinks">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  )
}
