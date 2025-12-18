import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav">
      <div className="navInner">
        <Link className="brand" href="/">
          <span className="brandMark" aria-hidden="true" />
          <span>Layeready</span>
        </Link>

        <nav className="navLinks" aria-label="Primary">
          <Link href="/#offerings">Offerings</Link>
          <Link href="/site-vetting">Site vetting</Link>
          <Link href="/partners">Partners</Link>
          <a
            className="btn btnSmall"
            href="mailto:info@layeready.com?subject=Capacity%20request"
          >
            Request capacity
          </a>
        </nav>
      </div>
    </header>
  );
}
