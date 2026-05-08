
export default function Shop() {
  return (
    <div className="shop-container">
      <div className="shop-card">
        <h1>🏬 Home Appliances Store</h1>

        <p className="tagline">
          Your Trusted Destination for Smart Home Solutions
        </p>

        <div className="info">
          <p><b>Owner:</b> Hari Electronics Pvt Ltd</p>
          <p><b>Location:</b> Chennai, Tamil Nadu, India</p>
          <p><b>Email:</b> support@homeappliances.com</p>
          <p><b>Phone:</b> +91 98765 43210</p>
          <p><b>Opening Hours:</b> 9:00 AM - 9:00 PM</p>
        </div>

        <div className="stats">
          <div>
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Products</p>
          </div>

          <div>
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>

        <button>Contact Shop</button>
      </div>
    </div>
  );
}