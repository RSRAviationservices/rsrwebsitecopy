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
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </div>
        <div className="footer-copyright">
          &copy; 2024 RSR Aviation Services Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
