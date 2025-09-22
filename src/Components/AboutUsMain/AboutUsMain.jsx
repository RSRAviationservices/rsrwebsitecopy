import React from 'react';
import './AboutUsMain.css';
import img9100 from "../../Resource/certifications/9100.png";
import img9120 from "../../Resource/certifications/9120.png";
import img14001 from "../../Resource/certifications/14001.png";
import logo from "../../Resource/logo.png";
import special from "../../Resource/image-5-1.png";
import Form from "../Form/Form";
const SectionTitle = ({ title }) => {
    return <h2>{title}</h2>;
  };
  
  // Component for a paragraph of content
  const SectionContent = ({ children }) => {
    return <p>{children}</p>;
  };
  const SectionImage = ({ icon }) => {
    return icon ? <img src={icon} alt="Section icon" className="section-icon" /> : null;
  };
  
const AboutUsMain = () => {
   


  return (
    <div className='AboutUsMain'>
      <div className='AboutUsMain-content'>
       <h1>At <b>RSR Aviation</b>, We work closely with our customers and partners to deliver practical, high-performance solutions for the aerospace and defense industries. By combining technical expertise with local insight, we help bring precision, customization, and reliability to every part we supply or manufacture.
       From sourcing global-quality materials to offering in-house blending and application support, we are focused on making complex requirements simple, fast, and effective. With a deep understanding of industry needs, we’re not just supporting operations — we’re enabling progress.</h1>
      </div>
    </div>
  );
};

export default AboutUsMain;
