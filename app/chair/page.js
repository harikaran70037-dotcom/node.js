
export default function chair() {
  const chairs = [
    {
      id: 1,
      name: "Modern Office Chair",
      price: 3500,
      img: "https://images.woodenstreet.de/image/cache/data/rocking-chairs/margot-rocking-chair-walnut-finish/cream-stripe/product/new-logo/AI/15-750x650.jpg"
    },
    {
      id: 2,
      name: "Gaming Chair",
      price: 8000,
      img: "https://images.unsplash.com/photo-1592078615290-033ee584e267"
    },
    {
      id: 3,
      name: "Wooden Chair",
      price: 2500,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oFBBbc2eQwlQn0Tn1MIOZM1MkI_ToBIs5w&s"
    },
    {
      id: 4,
      name: "Luxury Sofa Chair",
      price: 12000,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/1280px-Set_of_fourteen_side_chairs_MET_DP110780.jpg"
    },
    {
      id: 5,
      name: "Plastic Dining Chair",
      price: 1200,
      img: "https://www.estre.in/cdn/shop/files/1-min_1a7b23d8-e00c-4bca-86fe-9c65a55bcd1d.png?v=1743763634"
    },
    {
      id: 6,
      name: "Recliner Chair",
      price: 15000,
      img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd"
    }
  ];

  return (
    <div className="container">
      <h1 className="title">Chair Collection</h1>

      <div className="grid">
        {chairs.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.name} />

            <h3>{item.name}</h3>

            <p className="price">₹ {item.price.toLocaleString()}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}