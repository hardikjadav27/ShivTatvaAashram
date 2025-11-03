import React from "react";
import { useNavigate } from "react-router-dom";
import "./Donations.css";

const Donations = () => {
  const navigate = useNavigate();

  const donations = [
    {
      id: 1,
      title: "Gurukul Education",
      amount: "₹1200",
      per: "Per Month",
      description:
        "Help preserve ancient Indian education through Gurukul teaching — empower students with knowledge, values, and discipline.",
    },
    {
      id: 2,
      title: "Temple Construction",
      amount: "₹600",
      per: "Per Month",
      description:
        "Support the sacred temple construction — a space for meditation, worship, and community upliftment.",
    },
  ];

  return (
    <section className="donations-section" id="donations">
      <div className="donations-header">
        <h2>Compassion Creates Change</h2>
        <p>
          Your generous donation empowers us to continue our mission — building
          temples, educating children, and caring for Gaumata. Every rupee
          counts in spreading light and kindness.
        </p>

        <div className="goal-info">
          <span>🎯 Goal: ₹4,500</span>
          <span>💚 Raised: ₹5,000</span>
        </div>

        <button
          className="main-donate-btn"
          onClick={() => navigate("/Donation")}
        >
          DONATE NOW
        </button>
      </div>

      <div className="donation-cards">
        {donations.map((item) => (
          <div key={item.id} className="donation-card">
            <h3>{item.title}</h3>
            <div className="donation-amount">{item.amount}</div>
            <p className="per-month">{item.per}</p>
            <p className="donation-description">{item.description}</p>
            <button className="donate-btn">DONATE NOW</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Donations;
