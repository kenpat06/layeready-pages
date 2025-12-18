export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div>
          <div className="footerBrand">Layeready</div>
          <div className="footerSub">Built for what comes next.</div>
        </div>

        <div className="footerRight">
          <a href="mailto:info@layeready.com">info@layeready.com</a>
          <span className="dot" aria-hidden="true">
            •
          </span>
          <span className="muted">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
