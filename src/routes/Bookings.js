import React from 'react'
import  "./Bookings.css"
import bg from "../images/bg1.jpg"
import avatar from "../images/avat.jpg"



function Bookings() {
  return (
    <div class="container">
		<div class="img">
			<img src={bg}/>
		</div>
		<div class="login-content">
			<form action="index.html">
				<img src={avatar}/>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   	
           		   		<input type="text" class="input" placeholder='Username'/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<input type="password" class="input" placeholder='password'/>
            	   </div>
            	</div >
            	<input type="submit" class="btn" value="Login"/>
            </form>
        </div>
    </div>
  
  )
}

export default Bookings