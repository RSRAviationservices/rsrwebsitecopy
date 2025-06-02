import React from "react";
import "./ContactUs.css";

import Form from "../Form/Form";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <h1 className="Customer-title kodchasan-regular">Contact Us</h1>
      <div className="contact-info">
        <div className="form-info">
          <Form />
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0949557903436!2d73.11645197549421!3d19.059562252487858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d7f525cad1%3A0x2049828996a93ba0!2sRSR%20AVIATION%20SERVICES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1728389995674!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
                  <strong> For Corporate and Business-related Queries:</strong>{" "}
                  +91 74001 82337 / 022 4455 5321
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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
