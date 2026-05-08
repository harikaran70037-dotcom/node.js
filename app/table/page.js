export default function Dining() {

  const diningTables = [
    {
      name: "Modern Dining Table",
      price: "$850",
      image:
        "https://static.wixstatic.com/media/648254_56d464f3e83e4f6ab5d0242cd7ee82ed~mv2.jpg/v1/fill/w_875,h_963,al_c,q_85,enc_avif,quality_auto/648254_56d464f3e83e4f6ab5d0242cd7ee82ed~mv2.jpg",
    },

    {
      name: "Luxury Wooden Dining Set",
      price: "$1200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrFyCHSL8yf0G8YCA2ypINOXEb85412N1rw&s",
    },

    {
      name: "Classic Family Table",
      price: "$950",
      image:
        "https://www.royaloakindia.com/media/catalog/product/d/t/dt20214003-6-cr20214003_1_.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300",
    },

    {
      name: "Premium Glass Dining Table",
      price: "$1400",
      image:
        "https://rukminim2.flixcart.com/image/480/480/xif0q/dining-set/i/w/i/144-78-cream-72-39-0-rosewood-sheesham-20-rectangle-43-18-99-06-original-imahbh4jq3bywf4a.jpeg?q=90",
    },
  ];

  return (
    <div className="dining-container">

      <div className="dining-header">
        <h1>Dining Table Collection</h1>

        <p>
          Elegant dining tables for memorable family moments
        </p>
      </div>

      <div className="dining-grid">

        {diningTables.map((item, index) => (
          <div className="dining-card" key={index}>

            <img src={item.image} alt={item.name} />

            <div className="dining-info">

              <h2>{item.name}</h2>

              <p className="dining-price">{item.price}</p>

              <button>Buy Now</button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}