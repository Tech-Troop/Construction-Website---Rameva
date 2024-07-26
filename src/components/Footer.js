import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className='sb_footer-links_div'>
            <h4>For business</h4>
            <a href="/employer"><p>Employer</p></a>
            <a href="/healthplan"><p>Health Plan</p></a>
            <a href="/Individual"><p>Individual</p></a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Resources</h4>
            <a href="/about"><p>About</p></a>
            <a href="/blog"><p>Blog</p></a>
            <a href="/contact"><p>Contact</p></a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Support</h4>
            <a href="/about"><p>About</p></a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Company</h4>
            <a href="/about"><p>About</p></a>
            <a href="/blog"><p>Blog</p></a>
            <a href="/contact"><p>Contact</p></a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Coming soon on</h4>
            <div className='socialmedia'>
              <a href="https://www.facebook.com/"><img src="https://img.icons8.com/facebook" alt="Facebook" /></a>
              <a href="https://www.instagram.com/"><img src="https://img.icons8.com/instagram" alt="Instagram" /></a>
              <a href="https://www.twitter.com/"><img src="https://img.icons8.com/twitter" alt="Twitter" /></a>
              <a href="https://www.linkedin.com/"><img src="https://img.icons8.com/linkedin" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className='sb_footer-below'>
        <div className='sb_footer-copyright'>
          <p>© {new Date().getFullYear()} RAMEVA. All rights reserved</p>
          <p>Designed and maintained by TECH TROOP - 0593736945 </p>
        </div>
        <div className='sb_footer-below-links'>
          <a href="/terms"><p>Terms of use</p></a> <a href="/privacy"><p>Privacy policy</p></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
