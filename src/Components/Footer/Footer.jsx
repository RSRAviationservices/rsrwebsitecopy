import React from 'react';
import './Footer.css'; // Assuming you keep the styles separate as per your preference
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.instagram.com/rsr_aviation/profilecard/?igsh=MWFsNHB1bjB4ZnQ2" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/company/rsraviationservicesprivatelimited/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://x.com/RSR_aviation" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
       
        </div>
        <div className="footer-newsletter">
          <form action="https://formsubmit.co/marketing@rsraviation.com" method="POST" className="newsletter-form">
            <input type="email" name="email" placeholder="Enter your email" required className="newsletter-input" />
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
        <div className="footer-copyright">
          &copy; 2025 RSR Aviation Services Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
