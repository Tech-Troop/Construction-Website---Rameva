import React from 'react'
import "./About.css"
import aboutPic from '../images/aboutPic.png'

const About = () => {
 return (
<div>

<div className='container'>
    <div className='picture'>
      <img src={aboutPic} alt="Responsive" className='responsive-img' /> 
    </div>
  <div className='sub-heading'>
      <h4 className='text2'> 
       </h4>
   </div>
  </div>
</div>
  )
}
export default About;