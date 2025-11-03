import React from "react";
import "./Footer.css";
import Logo from "../../Photos/ShivTatva2.png";
import Facebook from "../../Photos/Facebook.jpg";
import Instagram from "../../Photos/Instagram.jpg";
import Youtube from "../../Photos/Youtube.jpg";

const Footer = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo + Description + Social */}
        <div className="footer-section logo-desc">
          <img src={Logo} alt="Ashram Logo" />
          <p>
            Shiv Tattava Ashram & Gaushala Trust is dedicated to spiritual
            growth, education, and the welfare of cows and the community.
          </p>

          {/* Social Links */}
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

        {/* Column 2: Contacts */}
        <div className="footer-section contact-details">
          <h3>Contact</h3>
          <p>📍 Amreli, Gujarat</p>
          <p>📞 +91 8306309039 / 8619449634</p>
          <p>
            ✉️{" "}
            <a href="mailto:Shivtattavatrust173@gmail.com">
              Shivtattavatrust173@gmail.com
            </a>
          </p>
        </div>

        {/* Column 3: Main Menu */}
        <div className="footer-section main-menu">
          <h3>Main Menu</h3>
          <ul>
            <li onClick={() => handleScroll("donations")}>❤️ Donations</li>
            <li onClick={() => handleScroll("activities")}>🌼 Activities</li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => handleScroll("home")}>🏠 Home</li>
            <li onClick={() => handleScroll("mission")}>🎯 Mission</li>
            <li onClick={() => handleScroll("programs")}>🎓 Programs</li>
            <li onClick={() => handleScroll("contact")}>📞 Contact</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ShivTattva Ashram & Gaushala Trust — All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
