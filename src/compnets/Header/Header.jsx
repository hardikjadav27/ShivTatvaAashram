import React, { useState } from "react";
import "./header.css";
import Logo from "../../Photos/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <li>Home</li>
        <li>About</li>
        <li>Programs</li>
        <li>Activities</li>
        <li>Donations</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
