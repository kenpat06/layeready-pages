import Section from "../../components/Section";
import Callout from "../../components/Callout";

export const metadata = {
  title: "Site Vetting — Layeready",
  description: "A power-first, scale-forward approach to evaluating industrial sites.",
};

export default function SiteVettingPage() {
  return (
    <>
      <Section
        eyebrow="Site evaluation"
        title="Capacity begins with the right site."
        lead="We evaluate industrial sites through a power-first, scale-forward lens — focusing on long-term viability, not just near-term availability."
      >
        <div className="grid2">
          <div className="card">
            <h3 className="h3">What we evaluate</h3>
            <ul className="list">
              <li>Power access, constraints, and expansion pathways</li>
              <li>Physical layout and retrofit feasibility</li>
              <li>Cooling and heat rejection potential</li>
              <li>Regulatory and utility coordination</li>
              <li>Timeline realism</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="h3">Current progress</h3>
            <ul className="list">
              <li>Multiple sites evaluated across different markets</li>
              <li>Several advanced through full technical review</li>
              <li>Multiple rejected due to power, layout, or scale constraints</li>
            </ul>
            <p className="fineprint" style={{ marginTop: 12 }}>
              Details shared selectively with sponsors and partners.
            </p>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <h3 className="h3">Why it matters</h3>
          <p className="muted">
            Early discipline reduces execution risk, preserves capital efficiency,
            and enables faster scale as power unlocks — supporting deployable AI
            compute capacity built to last.
          </p>
        </div>
      </Section>

      <Callout
        title="Review our evaluation approach."
        subtitle="We can share methodology and selection criteria in sponsor discussions."
        primary={{
          label: "Contact",
          href: "mailto:info@layeready.com?subject=Site%20evaluation%20discussion",
        }}
        secondary={{ label: "Partners", href: "/partners" }}
      />
    </>
  );
}
