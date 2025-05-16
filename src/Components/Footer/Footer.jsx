import React from 'react';
import './Footer.css'; // Assuming you keep the styles separate as per your preference
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
          {/* === Reach Us Section === */}
        <div className="reach-us">
          <h2>Reach Us</h2>
          <div className="offices-container">
            <div className="office-section">
              <p>
                <strong> Address:</strong> RSR AVIATION PVT.LTD UNIT NO B
                -68-71,PLATINUM SPRING ,PLOT NO 6 G20 to G24 TALOJA,
                PANVEL, MAHARASHTRA -410208
              </p>
              <p>
                <strong> Contact Person:</strong> SURESH RANHAGDALE{" "}
              </p>
              <p>
                <strong> For Corporate and Business-related Queries:</strong>{" "}
                +91 9595475981
              </p>

              <p>
                <strong> For HR related Queries:</strong>{" "}
                <a href="mailto:hr@rsraviation.com">HR@RSRAVIATION.COM</a>
              </p>
              <p>
                <strong> Email:</strong>{" "}
                <a href="mailto:info@rsraviation.com">INFO@RSRAVIATION.COM</a>
              </p>
            </div>
          </div>

          <div className="business-hours">
            <h3>Business Hours</h3>
            <p>🕒 MONDAY – SATURDAY - 10AM to 6PM</p>
          </div>
        </div>

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
        <div className="footer-copyright">
          &copy; 2025 RSR Aviation Services Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
