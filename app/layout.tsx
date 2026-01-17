import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="side-pattern left" />
        <div className="side-pattern right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
