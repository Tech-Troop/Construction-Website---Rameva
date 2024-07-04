import React from 'react'
import "./About.css"
import rolland from '../images/avat2.jpg'


const About = () => {
 return (
<div>
  <div className='title1'>
    Overview
  </div>
  <div>
    <p>
      We are a company that offers full building construction services. We also offer
      engineering and consultancy services to contractors, institutions and individuals.
    </p>
    <p>
      Our experienced staff have worked with consultants, contractors and estate developers
      in the building and construction environment for years. Some of our highly qualified
      and experienced staff like the managing director have been involved in the past in
      some major realty developments like the flagship Trasacco Valley estates.
    </p>
    <p>
      In a fast, economic and very efficient way, we are able to mobilize personnel and
      equipment to execute projects anywhere in Ghana. The successful execution of a wide
      range of numerous verifiable projects as referenced in our company profile under the
      section; RECENT CONTRACTS & PROJECT PROFILES attest to this.
    </p>
    <p>
      We seek to synergize our construction experience and consultancy prowess to the
      benefit of any future collaboration with your company.
    </p>
    <p>
      We believe our services are of the kind that you will find invaluable.
    </p>
    <p>
      We look forward to working with you.
    </p>
  </div>

  <div className='title1'>
    About RAMEVA CONSULT BUILDING AND CIVIL ENGINEERING
  </div>
  <div>
    <p>
    RAMEVA CONSULT LIMITED was established in 2007 to provide Construction
    and Engineering services as well as solutions to the building and civil industry in
    Accra and the Ghanaian market at large. RAMEVA CONSULT from set up have been
    providing building, structural, civil/mechanical engineering, pipeline and pipe laying
    services as well as other technical related services to businesses within and beyond
    Ghana.
    </p>
    <p>
    To be the preeminent provider of superior constructional services, RAMEVA
    CONSULT assembled a consortium of highly skilled and experienced professionals,
    who understands from first principle the dynamics and quandary of the engineering
    process. This over time has allowed us to perform for our customers, the highest level
    of quality construction services at fair and market competitive rates.
    </p>
    <p>
    Though relatively young, this has ensured the longevity of our company through
    repeat and referral business achieved through customer satisfaction, in all areas
    including attention to detail, professionalism, timeliness, integrity and honesty.
    </p>
    <p>
      
    </p>
  </div>
  <div className='title1'>
    The founder of RAMEVA CONSULT BUILDING AND CIVIL ENGINEERING
  </div>
  <div>
    <div className='about'>
      <div>
      <img src={rolland} alt='pic1' className='picture' width=''/> 
      </div>
      <div className='texts'>
        <p>
        Chief Executive Officer
        </p>
        <p>
        Rolland Amoah Mensah (PgDip. MBA, RICS)
        </p>
        <p>
        MBA Construction and Real Estates (Reading University, UK)
        </p>
        <p>
        Post Graduate Diploma Project Management 
        (University College of Estate Management UCEM, UK)
        </p>
        <p>
        Royal Institution of Chartered Surveyors (member)
        </p>
      </div>
    </div>
  </div>
</div>
  )
}
export default About;