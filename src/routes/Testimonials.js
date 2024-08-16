import React from 'react'
import quote from '../images/quote_left.png';
import Godwin from '../images/Godwin_Asare.jpg'
import Kelvin from '../images/Kelvin_Owusu.jpg'
import Jessica from '../images/Mmale_Jessica.png'
import anonymous from '../images/anonymous.png'
import why_choose_us from '../images/why_choose_us.png'
import what_we_do from '../images/what_we_do.png'
import "./Testimonials.css"

export default function 
() {
  return (
    <div>
          <div className="testimonialContainer">
       <span className="testimonialheader"> ────── TESTIMONIALS ────── </span>
        
        <div className='testimonialcardsContainer'>
          <div className='testimonialCard1'> 
            <img src={quote} className="quoteImage" alt=""/>
            <span className="testimonialText">RAMEVA Consult exceeded our expectations with their expertise and attention to detail. Their professionalism ensured the success of our commercial development. Highly recommended!</span>
          <div className="testimonialUserdiv">
            <img src={Kelvin} className="Kelvin" alt=""/>
            <div>
              <span className="userName">Kelvin Owusu</span>
              <span className="userName">CEO, Belt Realtor Consult</span>
            </div>
          </div>
          </div>

          <div className='testimonialCard2'>
            <img src={quote} className="quoteImage" alt=""/> 
            <span className="testimonialText">RAMEVA Consult turned our vision into reality with exceptional service and innovation. Their dedication made our project seamless and productive. Extremely satisfied!</span>
          <div className="testimonialUserdiv">
            <img src={Jessica} className="Jessica" alt=""/>
            <div>
              <span className="userName">Jessica Mmale</span>
              <span className="userName">CEO, Dexter Social Housing Ltd</span>
            </div>
          </div>
          </div>

          <div className='testimonialCard3'>
            <img src={quote} className="quoteImage" alt=""/>
            <span className="testimonialText">RAMEVA Consult's commitment to excellence is evident in every aspect of their work. Their proactive approach and quality results made the process smooth and stress-free. Highly recommend! 
            </span> 

          <div className="testimonialUserdiv">
            <img src={Godwin} className="Godwin" alt=""/>
            <div>
              <span className="userName">Godwin Asare</span>
              <span className="userName">CEO, GIGSO Ltd.</span>
            </div>
          </div>
          </div>

        </div>


      </div> 
    </div>
  )
}
