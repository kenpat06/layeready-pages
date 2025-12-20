import HubspotForm from "../../components/HubspotForm";

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 20px" }}>
      <h1>Start a conversation</h1>
      <p style={{ marginTop: 12, opacity: 0.8 }}>
        Tell us what you’re building and where you are in the process.
      </p>

      <div style={{ marginTop: 32 }}>
        <HubspotForm />
      </div>
    </main>
  );
}
