import React from 'react';
import './Customers.css';
import chem from "../../Resource/certifications/3chem.png";
import dynamic from "../../Resource/certifications/dynamin.png"
import supplier from "../../Resource/certifications/Supplier.png"
import airindia from "../../Resource/customers/Airindia.png";
import adani from "../../Resource/customers/adani.png";
import airwork from "../../Resource/customers/airwork.png";
import akasha  from "../../Resource/customers/akasha.png";
import bharatele from "../../Resource/customers/bharatele.png";
import collins from "../../Resource/customers/collins.png";
import godrej from "../../Resource/customers/godrej.png";
import hical from "../../Resource/customers/hical.png";
import isro from "../../Resource/customers/isro.png";
import lnt from "../../Resource/customers/l&T.png";
import mahindra from "../../Resource/customers/mahindra.png";
import tata from "../../Resource/customers/tata.png";
import thales from "../../Resource/customers/thales.png";





const Customers = () => {
  return (
    <div className='Customers'>
      <h1 className="Customer-title kodchasan-regular">Customers Testimonials</h1>
      <div className='certificates'>
        <img src={chem} alt="3chem linked in Post" className="certificate" />
        <img src={dynamic} alt="3chem linked in Post" className="certificate" />
        <img src={supplier} alt="3chem linked in Post" className="certificate" />
      </div>
      <h2 className="Customer-title kodchasan-regular">Our Esteemed Clients</h2>
      <div className='customers-logos'>
        <img src={airindia} alt="Air India" className="customer-logo" />
        <img src={adani} alt="Adani" className="customer-logo" />
        <img src={airwork} alt="Air Work" className="customer-logo" />
        <img src={akasha} alt="Akasha" className="customer-logo" />
        <img src={bharatele} alt="Bharat Electronics" className="customer-logo" />
        <img src={collins} alt="Collins" className="customer-logo" />
        <img src={godrej} alt="Godrej" className="customer-logo" />
        <img src={hical} alt="Hi-Caliber" className="customer-logo" />
        <img src={isro} alt="ISRO" className="customer-logo" />
        <img src={lnt} alt="L&T" className="customer-logo" />
        <img src={mahindra} alt="Mahindra" className="customer-logo" />
        <img src={tata} alt="Tata" className="customer-logo" />
        <img src={thales} alt="Thales" className="customer-logo" />
      </div>
     
    </div>
  );
};

export default Customers;