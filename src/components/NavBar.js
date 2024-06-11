import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'


function NavBar() {
    
  return (
    
    /* Header Section */
    <header>
      <div class="navbar">
        <div class="logo"><a href="#">Construction Site</a></div>
        <ul class="links">
          <li><a href="src/routes/Home.js">Home</a></li>
          <li><a href="src/routes/About.js">About</a></li>
          <li><a href="src/routes/Services.js">Services</a></li>
          <li><a href="src/routes/Portfolio.js">Portfolio</a></li>
          <li><a href="src/routes/Contact.js">Contact</a></li>
        </ul>
        <a href="src/routes/Bookings.js" target="_blank" class="action_btn">Bookings</a>
        <div class="toggle_btn">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>

      <div class="dropdown_menu">
        <li><a href="src/routes/Home.js">Home</a></li>
        <li><a href="src/routes/About.js">About</a></li>
        <li><a href="src/routes/Services.js">Services</a></li>
        <li><a href="src/routes/Portfolio.js">Portfolio</a></li>
          <li><a href="src/routes/Contact.js">Contact</a></li>
        <li><a href="src/routes/Bookings.js" target="_blank" class="action_btn">Bookings</a></li>
      </div>

      <main>
        <section id="hero">
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at
            voluptate alias eum aspernatur beatae. <br />
            Consectetur animi labore voluptate atque, libero nostrum dicta
            fugiat repellat!
          </p>
          <a href="bookanappointment.html" target="_blank" class="action_btn">Bookings</a>
        </section>
      </main>
    </header>
    
  )

}

<script src="/script.js"></script>


export default NavBar


    