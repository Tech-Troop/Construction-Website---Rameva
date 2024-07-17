import "./About.css";
import quote from '../images/quote_left.png';
import Godwin from '../images/Godwin_Asare.jpg'
import Kelvin from '../images/Kelvin_Owusu.jpg'
import Jessica from '../images/Mmale_Jessica.png'
import anonymous from '../images/anonymous.png'
import why_choose_us from '../images/why_choose_us.png'
import what_we_do from '../images/what_we_do.png'

function AboutUs() {
  return (
    <div className="about-container">
      <div className="HeaderContainer">
        <div className="greenBgdiv"> </div>
        <div className="aboutpageHeader">
          <div className="headerContent">
            <h5 className="Text">About Us</h5>
            <span className="Text2">Building Dreams with Excellence</span>
          </div>
          <div className="headerpicsdiv">
            
          </div>
        </div>
          <div className="aboutRAMEVA">
            <h1><span className="headerUnderline">Who we </span>are</h1>
            <p>
                    <strong>RAMEVA CONSULT LIMITED </strong>was established in 2007 to provide Construction 
              and Engineering services as well as solutions to the building and civil industry in 
              Accra and the Ghanaian market at large. RAMEVA CONSULT from set up have been 
              providing building, structural, civil/mechanical engineering, pipeline and pipe laying 
              services as well as other technical related services to businesses within and beyond 
              Ghana. 
              To be the preeminent provider of superior constructional services, RAMEVA 
              CONSULT assembled a consortium of highly skilled and experienced professionals, 
              who understands from first principle the dynamics and quandary of the engineering 
              process. This over time has allowed us to perform for our customers, the highest level 
              of quality construction services at fair and market competitive rates. 
              Though relatively young, this has ensured the longevity of our company through 
              repeat and referral business achieved through customer satisfaction, in all areas 
              including attention to detail, professionalism, timeliness, integrity and honesty.
            </p>
              <img src={anonymous} alt='' className="anonymous"/>
          </div>
      </div>
      
      <div className="aboutBox1grid">
      <div className="aboutBox1Content1">
        <img src={what_we_do} alt='' className="whatWeDo" />
        <h1><span className="headerUnderline">What we </span> do</h1>
        <p>
        We are a company that offers full building construction services. We also offer 
        engineering and consultancy services to contractors, institutions and individuals. 
        Our experienced staff have worked with consultants, contractors and estate developers 
        in the building and construction environment for years. Some of our highly qualified 
        and experienced staff like the managing director have been involved in the past in 
        some major realty developments like the flagship Trasacco Valley estates. 
        In a fast, economic and very efficient way, we are able to mobilize personnel and 
        equipment to execute projects anywhere in Ghana. The successful execution of a wide 
        range of numerous verifiable projects as referenced in our company profile under the 
        section; RECENT CONTRACTS & PROJECT PROFILES attest to this. 
        </p>
      </div>

      <div className="aboutBox1Content2">
        <img src={why_choose_us} alt="" className="whyChooseUs"/>
        <h1><span className="headerUnderline">Why choose </span>us</h1>
        <p>
          Our vision is to become the leading building construction and civil engineering 
          company in Ghana, providing value-added construction services to customers in the 
          built environment. We propose to achieve this by creating a successful partnership 
          and a lasting relationship with customers by exceeding their expectations and gaining 
          their trust through exceptional performance. We pride ourselves on providing
          exceptional service and utilizing the latest technology and design
          trends to bring your vision to life. Whether you’re building a new home,
          renovating a commercial space or planning a large-scale development, we
          have the expertise to make it happen
        </p>
      </div>

     
      </div>
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
  );
}

export default AboutUs;