import React from "react";
import GausalaImg from "../../Photos/Gausala.jpg";
import Educations from "../../Photos/Educations.jpg";
import Temple from "../../Photos/Temple.jpg";
import "./Initiatives.css";

const Initiatives = () => {
  const initiatives = [
    {
      id: 1,
      title: "Goshala (Cow Shelter)",
      image: GausalaImg,
      description:
        "Our Ashram’s Goshala provides care and shelter for Gaumata (holy cows) who are abandoned or injured, ensuring they receive love, food, and protection.",
      link: "#",
    },
    {
      id: 2,
      title: "Gurukul Education",
      image: Educations,
      description:
        "Inspired by the ancient Gurukul system, our Ashram nurtures traditional Indian education — combining Vedic teachings, values, and discipline for young minds.",
      link: "#",
    },
    {
      id: 3,
      title: "Temple Construction",
      image: Temple,
      description:
        "Our temple stands as the spiritual heart of the Ashram — a sacred space where devotees gather for meditation, bhajans, and selfless service to the divine.",
      link: "#",
    },
  ];

  return (
    <section className="initiatives-section" id="activities">
      <h2 className="initiatives-title">Our Recent Initiatives</h2>
      <div className="initiatives-grid">
        {initiatives.map((item) => (
          <div key={item.id} className="initiative-card">
            <div className="initiative-img-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="initiative-image"
              />
            </div>
            <div className="initiative-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Initiatives;
