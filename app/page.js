import Link from "next/link";

export default function Home() {
  return (
    <div className="home">

      {/* NAVBAR */}
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

      {/* HERO */}
      <section className="hero">
        <h1>Modern Furniture Store</h1>
        <p>Stylish furniture for your dream home</p>

        <div className="hero-btns">
          <button>Shop Now</button>
          <button className="outline">Explore</button>
        </div>
      </section>

      {/* DISCOUNT BANNER */}
      <section className="banner">
        <h2>🔥 Flat 30% OFF on New Collection</h2>
        <p>Limited time offer for premium furniture</p>
      </section>

      {/* CATEGORIES */}
      <section className="categories">

      <Link href="/chair"> <div className="cat-card">🪑 Chairs</div></Link> 
     <Link href="/sofa">  <div className="cat-card">🛋️ Sofas</div></Link> 
      <Link href="/bed"> <div className="cat-card">🛏️ Beds</div></Link> 
       <Link href="/table"> <div className="cat-card">🍽️ Tables</div></Link>

      </section>

      {/* PRODUCTS */}
      <section className="cards">

        <div className="card">
          <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" />
          <h2>Wooden Chair</h2>
          <p>$120</p>
          <button>Add To Cart</button>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9" />
          <h2>Luxury Sofa</h2>
          <p>$450</p>
          <button>Add To Cart</button>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4" />
          <h2>Modern Table</h2>
          <p>$220</p>
          <button>Add To Cart</button>
        </div>

      </section>

      {/* FOOTER CTA */}
      <section className="cta">
        <h2>Want Custom Furniture?</h2>
        <button>Contact Us</button>
      </section>

    </div>
  );
}