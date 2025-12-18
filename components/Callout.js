export default function Callout({ title, subtitle, primary, secondary }) {
  return (
    <section className="callout">
      <div className="calloutInner">
        <div>
          <h2 className="h2">{title}</h2>
          <p className="muted">{subtitle}</p>
        </div>
        <div className="calloutActions">
          {primary ? (
            <a className="btn" href={primary.href}>
              {primary.label}
            </a>
          ) : null}
          {secondary ? (
            <a className="btn btnGhost" href={secondary.href}>
              {secondary.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
