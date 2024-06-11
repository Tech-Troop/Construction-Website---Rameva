import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div>
        <div className="nav">
                <nav className="navbar">
                    <div class="logoo">
                        <image src='' />
                    </div>    
                        <ul class="nav-link">
                            <li class="nav-linkss"><a href="/"> Home</a></li>
                            <li class="nav-links"><a href="Services">Services</a></li>
                            <li class="nav-links"><a href="Portfolio">Portfolio</a></li>
                            <li class="nav-links"><a href="Contact">Contact</a></li>
                            <li class="nav-links"><a href="About">About</a></li>
                            <li class="nav-links"><a href="Bookings">Bookings</a></li>

                        </ul> 
                </nav>
            </div>


    </div>
  )
}

export default NavBar