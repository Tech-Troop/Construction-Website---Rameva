import React from 'react'
import "./Contact.css"
import location from '../images/location.png';
import telephone from '../images/telephone.png';
import mailbox from '../images/mailbox.png';
import email from '../images/email.png';
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'

function Contact() {
  return (
    <div className='mainContainer'>
      <div className='subContainer1'> <br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
      <div className='subContainer2'> 
        <br/>
        <div className='cardsContainer'>
          <div className='card1'> 
            <img
              src={location}
              alt="location"
              className="location"/> 
              <span className='cardHeader'>Office Location</span>
              <br/>
              <span className='cardText'>
              <a
                className='locText'
                href="https://www.google.com/maps/search/?api=1&query=A882%2F15+2nd+Becham+Street%2C+Dansoman%2C+Sahara%2C+Accra+West"
                target="_blank"
                rel="noopener noreferrer">
                A882/15 2nd Becham Street, Dansoman, Sahara, Accra West
              </a>
            </span>
            </div>
          <div className='card2'> 
            <img
              src={telephone}
              alt="telephone"
              className="telephone"
              /> 
              <span className='cardHeader'>PhoneLines</span>
              <br/>
              <span className='cardText'><a href="tel:+233207213900">+233 (0)20 721 3900</a></span>
              <span className='cardText'><a href="tel:+233277485786">+233 (0)27 748 5786</a></span>

          </div>
          <div className='card3'> 
            <img
              src={mailbox}
              alt="mailbox"
              className="mailbox"/> 
              <span className='cardHeader'>Postal Address</span>
              <br/>
              <span className='cardText'>Rameva Consult Limited</span>
              <span className='cardText'>P. O. Box MP 1622 </span>
              <span className='cardText'>Mamprobi – Accra</span> 
              <span className='cardText'>Ghana, West Africa</span>
          </div>
          <div className='card4'> 
            <img
              src={email}
              alt="email"
              className="email"/> 
              <span className='cardHeader'>Email</span>
              <br/>
              <a href="mailto:rameva.info@gmail.com">rameva.info@gmail.com</a> 
          </div>
        </div>

        <div className='twosectioneddiv'>
          <div className='form'>
            <form>
              <div className='formdiv1' >
                <div>
                  <span className='emailText'>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter a valid email address"
                    className='emailInput'
                    required
                  />
                </div>
                <div className='nameInputdiv'>
                  <span className= 'nameText'>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className='nameInput'
                    required
                  />
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <span className='messageText'>Message</span>
                <textarea
                    name="message"
                    rows="3"
                    placeholder="Enter your message"
                    className='messageInput'
                    required
                  />
              </div>
              <div>
                <button type="submit" className='submitButton'><span className='submit'>SUBMIT</span></button>
              </div>
            </form>
          </div>

          <div className='moreInfo'>
            <span className='getinTouch'> Get in Touch</span>
            <span className='hearMore' >We would love to hear from you! Whether you have a question about our services, 
                  need assistance with a project, or just want to say hello, our team is ready to 
                  answer all your questions.
            </span> 
            <br/>
            <br/>
            <span className='socials'>Stay connected by following us on our social media channels</span>
            <div className='socialsIcons'>
              <a href='https://www.facebook.com/'> <img src={facebook} className='facebook' alt='facebook'/></a>
              <a href='https://www.twitter.com/'> <img src={twitter} className='twitter' alt='twitter'/></a>
              <a href='https://www.instagram.com/'> <img src={instagram} className='instagram' alt='instagram'/></a>
              <a href='https://www.linkedin.com/'> <img src={linkedin} className='linkedin' alt='linkedin'/></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact