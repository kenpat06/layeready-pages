import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Layeready — Built for what comes next",
  description:
    "We design and stand up scalable AI compute capacity — from early pilots to expansion-ready platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-grid" aria-hidden="true" />
        <Nav />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
