import React, { useState } from "react";
import "./header.css";
import Logo from "../../Photos/ShivTatva2.png";
import Facebook from "../../Photos/Facebook.jpg";
import Instagram from "../../Photos/Instagram.jpg";
import Youtube from "../../Photos/Youtube.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Ashram Logo" />
      </div>

      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("mission")}>Mission</li>
        <li onClick={() => handleScroll("programs")}>Programs</li>
        <li onClick={() => handleScroll("activities")}>Activities</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
        <li className="donation-btn" onClick={() => handleScroll("donations")}>
          Donations
        </li>

        {/* Contact + Social Section (Mobile only) */}
        <div className="mobile-contact">
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@ashram.org</p>

          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Youtube} alt="YouTube" />
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
