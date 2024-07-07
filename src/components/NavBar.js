import React, { useState } from "react";
import "./NavBar.css";
// import logo from "../images/logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <a href="#">Rameva Consult</a>
        </div>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/Services">Services</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
        <a href="/Bookings" className="action_btn">
          Bookings
        </a>
        <div className="toggle_btn" onClick={toggleMenu}>
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>

      <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/About">About</a>
    </li>
    <li>
      <a href="/Portfolio">Portfolio</a>
    </li>
    <li>
      <a href="/Services">Services</a>
    </li>
    <li>
      <a href="/Contact">Contact</a>
    </li>
    <li>
      <a href="/Bookings" className="action_btn">
        Bookings
      </a>
    </li>
  </ul>
</div>
    </nav>
  );
}

export default Navbar;
