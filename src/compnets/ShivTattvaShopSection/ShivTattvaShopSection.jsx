import React from "react";
import "./ShivTattvaShopSection.css";
import { useNavigate } from "react-router-dom";

const ShivTattvaShopSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Handmade candle",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyb2Okv4jWbqF3CYhRWRzMQ3P-2eR_xd_pXA&s",
    },
    {
      name: "Home Made Cake",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sOT2RqyonkRO7KW9eNIxUqqS3Djr1JtQAw&s",
    },
    {
      name: "Natural Incense Sticks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0l-lBo2pIlrnVwI1lZ1NOz2R9fh7YuDJXVA&s",
    },
  ];

  return (
    <section className="shivtattva-shop">
      <div className="shop-content">
        <h2>Check Out the Shiv Tattva Shop</h2>
        <p>
          Discover handmade products crafted in the Shiv Productions Unit. Every
          purchase helps support the Shiv Tattva Mission 🕉️.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>

      <div className="shop-button">
        <button onClick={() => navigate(`/shop`)}>Shop Now</button>
      </div>
    </section>
  );
};

export default ShivTattvaShopSection;
