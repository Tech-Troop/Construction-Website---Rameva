import React, { useState } from "react";
import "./NavBar.css";
import logo from "../images/logo.jpeg";


function Navbar() {
  const toggleBtn =document.querySelector('.toggle_btn')
  const toggleBtnIcon =document.querySelector('.toggle_btn i')
  const dropDownMenu =document.querySelector('.dropdown_menu')

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen =dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'

  }

  return (
    <header>
      <div class="navbar">
        <div class="logo"><a href="#">Rameva Consult</a></div>
        <ul class="links">
          <li><a href="src/routes/Home.js">Home</a></li>
          <li><a href="src/routes/About.js">About</a></li>
          <li><a href="src/routes/Portfolio.js">Portflio</a></li>
          <li><a href="src/routes/Services.js">Services</a></li>
          <li><a href="src/routes/Contact.js">Contact</a></li>
        </ul>
        <a href="src/routes/Bookings.js" class="action_btn">Bookings</a>
        <div class="toggle_btn">
        <i class="fa-solid fa-bars"></i>
        </div>
      </div>

      <div class="dropdown_menu">
      <li><a href="src/routes/Home.js">Home</a></li>
      <li><a href="src/routes/About.js">About</a></li>
      <li><a href="src/routes/Portfolio.js">Portflio</a></li>
      <li><a href="src/routes/Services.js">Services</a></li>
      <li><a href="src/routes/Contact.js">Contact</a></li>
      <li><a href="src/routes/Bookings.js" class="action_btn">Bookings</a></li>
          
      </div>
    </header>

    
  );
}

export default Navbar;
