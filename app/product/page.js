
export default function Products() {
  const products = [
    {
      id: 1,
      name: "Smart LED TV",
      price: 45000,
      img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1"
    },
    {
      id: 2,
      name: "Washing Machine",
      price: 30000,
      img: "https://static.godrejenterprises.com/Cue_Card1_Aipowered_f10d22e0b6.jpg"
    },
    {
      id: 3,
      name: "Refrigerator",
      price: 28000,
      img: "https://images.samsung.com/is/image/samsung/p6pim/in/rt45hg6a22s8hl/energylabel/in-energylabel-product-rt45hg6a22s8hl-550816946?$1164_776_PNG$"
    },
    {
      id: 4,
      name: "Air Conditioner",
      price: 52000,
      img: "https://image.made-in-china.com/202f0j00oslkqDctfbbK/Amaz-Split-AC-Cool-1-5-Ton-2-Ton-Air-Conditioner-for-Home-Use-Office-Use-High-Quality-Airflow-with-Low-Price-Wall-Split-Air-Conditioner.webp"
    },
    {
      id: 5,
      name: "Microwave Oven",
      price: 9000,
      img: "https://www.electrolux.in/globalassets/support/faq/microwave-faq-640x640.jpg?width=464"
    },
    {
      id: 6,
      name: "Mixer Grinder",
      price: 3500,
      img: "https://m.media-amazon.com/images/I/412kkXXQ7CL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
      id: 7,
      name: "Sofa Set",
      price: 25000,
      img: "https://ii1.pepperfry.com/media/catalog/product/f/r/494x544/frejol-velvet-3-seater-sofa-in-grey-colour-frejol-velvet-3-seater-sofa-in-grey-colour-vtegxx.jpg"
    },
    {
      id: 8,
      name: "I Phone",
      price: 50000,
      img: "https://www.designinfo.in/wp-content/uploads/2024/05/Apple-iPhone-15-128-GB-Blue-1-485x485.webp"
    },
    {
      id: 9,
      name: "Grinder",
      price: 3000,
      img: "https://5.imimg.com/data5/SELLER/Default/2025/8/536524144/GO/SN/XA/50950056/2-litres-wet-grinder-500x500.png"
    },
    {
      id: 10,
      name: "Fan",
      price: 1500,
      img: "https://nandilathgmart.com/wp-content/uploads/2025/01/Crompton-Energion-Cookie-BLDC-Ceiling-Fan.jpg"
    }
  ];

  return (
    <div className="container">
      <h1 className="title">Home Appliances Products</h1>

      <div className="grid">
        {products.map((item) => (
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