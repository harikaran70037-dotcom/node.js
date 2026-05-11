import "./globals.css";
import Link from "next/link";


export default function RootLayout({ children }) {
  return (
    <html >


 <nav className="navbar">
        <Link href="/">
          <h1>FurniHome</h1>
        </Link>

        <div className="links">
          <Link href="/product">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>


      <body>{children}
   <footer className="footer">
  <div className="footer-container">

    <div className="footer-box">
      <h2>FurniHome</h2>
      <p>
        Modern furniture for stylish homes.
        Premium quality sofas, beds, chairs,
        dining tables and more.
      </p>

      <div className="social-icons">
        <a href="#">F</a>
        <a href="#">I</a>
        <a href="#">T</a>
        <a href="#">Y</a>
      </div>
    </div>

    <div className="footer-box">
      <h3>Quick Links</h3>

      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/product">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-box">
      <h3>Products</h3>

      <ul className="footer-links">
        <li><a href="#">Sofa Sets</a></li>
        <li><a href="#">Beds</a></li>
        <li><a href="#">Dining Tables</a></li>
        <li><a href="#">Office Chairs</a></li>
      </ul>
    </div>

    <div className="footer-box">
      <h3>Contact Info</h3>

      <p>Email: furnihome@gmail.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Location: Chennai, India</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 FurniHome. All Rights Reserved.</p>
  </div>
</footer>

</body>

    </html>
  );
}