export default function Product() {

  const sofas = [
    {
      name: "Luxury Leather Sofa",
      price: "$650",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGj3zyYWooi8PKZAVOuyKF-CJH5gFOqGIUw&s",
    },

    {
      name: "Modern Gray Sofa",
      price: "$520",
      image:
        "https://www.estre.in/cdn/shop/files/2-min_d2bc49bf-1893-4118-bab5-8d0848d4d3fb.jpg?v=1743762905",
    },

    {
      name: "Wooden Sofa Set",
      price: "$780",
      image:
        "https://indiannest.in/cdn/shop/files/H598fb849e1e543528cc6e61987f27a47u.jpg?v=1684257622",
    },

    {
      name: "Classic White Sofa",
      price: "$890",
      image:
        "https://alder.in/wp-content/uploads/2024/05/Jaguar-L-Shape.webp",
    },
  ];

  return (
    <div className="sofa-container">

      <div className="sofa-header">
        <h1>Sofa Collection</h1>

        <p>
          Premium quality sofa sets for modern homes
        </p>
      </div>

      <div className="sofa-grid">

        {sofas.map((item, index) => (
          <div className="sofa-card" key={index}>

            <img src={item.image} alt={item.name} />

            <div className="sofa-info">

              <h2>{item.name}</h2>

              <p className="sofa-price">{item.price}</p>

              <button>Buy Now</button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}