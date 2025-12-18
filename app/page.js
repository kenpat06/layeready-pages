import Hero from "../components/Hero";
import Section from "../components/Section";
import StackGrid from "../components/StackGrid";
import Steps from "../components/Steps";
import Callout from "../components/Callout";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="What we do"
        title="AI compute capacity, engineered to scale."
        lead={
          <>
            Layeready builds deployable capacity — engineered as a system.
            <br />
            Not generic infrastructure. Not hardware resale.
          </>
        }
      >
        <div className="pillRow">
          <span className="pill">Modular compute stacks</span>
          <span className="pill">Power-aware, scale-forward design</span>
          <span className="pill">Reference architectures on request</span>
        </div>
      </Section>

      <Section
        id="offerings"
        eyebrow="Offerings"
        title="The compute stack"
        lead="Modular building blocks for AI compute capacity — delivered as a coherent, deployable system."
      >
        <StackGrid />
        <p className="fineprint">
          Components are integrated as a system — not sold individually.
        </p>
      </Section>

      <Section
        eyebrow="How we work"
        title="Assess → Design → Deliver"
        lead="A disciplined process that reduces risk, accelerates readiness, and preserves optionality."
      >
        <Steps />
      </Section>

      <Section
        eyebrow="Who we work with"
        title="Teams building real capacity"
        lead="We support AI-native operators, enterprises building internal compute, and sponsors backing scalable compute platforms."
      >
        <div className="card">
          <ul className="list">
            <li>AI-native companies scaling beyond first deployments</li>
            <li>Enterprises building internal compute capacity</li>
            <li>Sponsors and capital partners backing compute platforms</li>
          </ul>
          <p className="muted" style={{ marginTop: 12 }}>
            Specific engagements shared selectively.
          </p>
        </div>
      </Section>

      <Callout
        title="Let’s map your capacity plan."
        subtitle="Request capacity, discuss timelines, or review a reference architecture."
        primary={{
          label: "Request capacity",
          href: "mailto:info@layeready.com?subject=Capacity%20request",
        }}
        secondary={{ label: "View offerings", href: "#offerings" }}
      />
    </>
  );
}
