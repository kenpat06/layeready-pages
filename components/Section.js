export default function Section({ id, eyebrow, title, lead, children }) {
  return (
    <section id={id} className="section">
      <div className="sectionHead">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        {title ? <h2 className="h2">{title}</h2> : null}
        {lead ? <p className="lead muted">{lead}</p> : null}
      </div>
      {children}
    </section>
  );
}
