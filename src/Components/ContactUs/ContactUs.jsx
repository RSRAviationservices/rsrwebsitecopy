import React from 'react';
import './ContactUs.css';

import Form from "../Form/Form";

const ContactUs = () => {
  return (
    <div className='ContactUs'>
      <h1 className="Customer-title kodchasan-regular">Contact Us</h1>
    <div className='contact-info'>
      <div className='form-info'>
      <Form/>
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
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
