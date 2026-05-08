export default function Beds() {

  const beds = [
    {
      name: "King Size Bed",
      price: "$950",
      image:
        "https://buildhub.in/storage/bedroom-sets/10-bh-sleek-bedroom-set-with-bed-3-door-wardrobe-side-table-and-dressing-table-2-800x800.jpg",
    },

    {
      name: "Modern Wooden Bed",
      price: "$780",
      image:
        "https://themapletree.in/cdn/shop/files/image_aeef02ca-c011-479a-ae27-b396185f868c_1.jpg?v=1692438362",
    },

    {
      name: "Luxury White Bed",
      price: "$1200",
      image:
        "https://www.estre.in/cdn/shop/files/2..jpg?v=1743763293",
    },

    {
      name: "Classic Bedroom Set",
      price: "$1500",
      image:
        "https://www.zorin.co.in/cdn/shop/files/AstridNMKing_Liftstyle.jpg",
    },
  ];

  return (
    <div className="bed-container">

      <div className="bed-header">
        <h1>Luxury Bed Collection</h1>

        <p>
          Comfortable and stylish beds for peaceful sleep
        </p>
      </div>

      <div className="bed-grid">

        {beds.map((item, index) => (
          <div className="bed-card" key={index}>

            <img src={item.image} alt={item.name} />

            <div className="bed-info">

              <h2>{item.name}</h2>

              <p className="bed-price">{item.price}</p>

              <button>Buy Now</button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}