import Section from "../../components/Section";
import Callout from "../../components/Callout";

export const metadata = {
  title: "Partners — Layeready",
  description: "Select partnerships across compute, power, and delivery.",
};

export default function PartnersPage() {
  return (
    <>
      <Section
        eyebrow="Partners"
        title="Selective by design."
        lead={
          <>
            We build long-term partnerships across compute, power, and delivery.
            <br />
            We prioritize alignment and execution capability over logos.
          </>
        }
      >
        <div className="card">
          <p className="muted">
            As partnerships are formalized, this page will reflect them.
          </p>

          <div style={{ height: 16 }} />

          <h3 className="h3">Current focus areas</h3>
          <ul className="list">
            <li>Compute hardware and acceleration</li>
            <li>Networking and fabric design</li>
            <li>Power generation and delivery</li>
            <li>Engineering, procurement, and commissioning</li>
          </ul>

          <p className="fineprint" style={{ marginTop: 12 }}>
            Partner inquiries welcome.
          </p>
        </div>
      </Section>

      <Callout
        title="Partner with Layeready."
        subtitle="If you can deliver at scale, we should talk."
        primary={{
          label: "Partner inquiries",
          href: "mailto:info@layeready.com?subject=Partner%20inquiry",
        }}
        secondary={{ label: "Back to home", href: "/" }}
      />
    </>
  );
}

x


<a className="stackLink" href="/deployment-readiness">Deployment readiness 
→</a>
'

