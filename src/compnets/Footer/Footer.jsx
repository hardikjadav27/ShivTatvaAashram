import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Form */}
        <div className="footer-section quick-form">
          <h3>Quick Form</h3>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />

            <button type="submit">Submit Now</button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">🏠 Home</a>
            </li>
            <li>
              <a href="/about">🕉️ About Us</a>
            </li>
            <li>
              <a href="/join">🙏 Join Us</a>
            </li>
            <li>
              <a href="/contact">📞 Contact Us</a>
            </li>
            <li>
              <a href="/donate">💛 Donate</a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section contact-details">
          <h3>Contact Details</h3>
          <p>Shiv Tattava Ashram & Gaushala Trust</p>
          <p>📍 Amreli, Gujarat</p>
          <p>📞 +91 8306309039 / 8619449634</p>
          <p>
            <a href="mailto:Shivtattava@gmail.com">
              ✉️ Shivtattavatrust173@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ShivTattva Aashram & Gaushala Trust — All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
