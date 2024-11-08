import React from 'react';
import './AboutUsMain.css';
import img1900 from "../../Resource/certifications/1900.png";
import img1920 from "../../Resource/certifications/1920.png";
import startup from "../../Resource/certifications/Startup.png";
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
    const sections = [
        {
          title: "Company Overview",
          content: (<>RSR Aviation Services Pvt. Ltd. is a premier provider of aerospace consumables for manufacturing and maintenance in the aerospace and defense sectors. Our focus on quality and reliability positions us as a trusted partner in the industry."</>)
        },
        {
          title: "Our Specialization",
          content: (<>We specialize in high-quality consumables tailored for the aerospace industry, meeting the rigorous standards of manufacturers and maintenance teams. Our products enhance durability, performance, and safety.</>)

        },
        {
          title: "Extensive Product Range",
          content: (<>Our inventory includes lubricants, adhesives, fasteners, primers, film adhesives, paints, and electrical supplies, supporting aerospace applications from production to repair.</>)
        },
        {
          title: "Warehousing Capabilities",
          content:(<>RSR Aviation's warehouse facility spans 4,000 square feet, with plans to expand to <strong>10,000 square feet by November 2024.</strong> The facility is fully equipped to handle large inventories, including aerospace consumables and hazardous goods. This expansion demonstrates our commitment to growth and our ability to meet increasing demand in the aerospace sector. 1 Current 4,000 square feet warehouse facility 2 November 2024 Planned expansion to 10,000 square feet 3 Future Increased capacity for aerospace inventories</>)
        },
        {
            title: "Cold Storage and Temperature",
            content:(<>RSR Aviation operates an in-house cold storage facility with a <strong>capacity of 1,000 liters, capable of storing 6-8 full-size adhesive film rolls.</strong> This ensures optimal conditions for temperature-sensitive materials. Our refrigeration system can store up to 1,500 liters of temperature-controlled materials, including adhesives, sealants, and other aerospace consumables, ensuring compliance with required temperature standards for sensitive products. Cold Storage Capacity 1,000 liters, storing 6-8 full-size adhesive film rolls. Planning to expand by 10x10 by November 2024. Refrigeration System 1,500 liters capacity for temperature-controlled materials. Planning to expand to double i.e<strong>3000 liters by November 2024.</strong>Product Range Paints, Primers, Adhesives, sealants, and other aerospace consumables"</>)
        },
        {
            title: "Vision Statement and Core Values",
            content: (
              <>
                <strong>1. Global Leadership:</strong> Become the leading supplier of aerospace consumables worldwide.<br />
                <strong>2. Standard Setting:</strong> Continuously set benchmarks for quality, safety, and innovation.<br />
                <strong>3. Industry Impact:</strong> Shape the future of aviation through superior products and services.<br/>
                <strong>Quality:</strong> Ensure all products meet stringent aerospace standards.<br />
                <strong>Safety:</strong> Prioritize customer safety with reliable, certified consumables.<br />
                <strong>Customer Focus:</strong> Build lasting relationships through unparalleled service and support.<br />
                <strong>Integrity:</strong> Conduct business with transparency, ethics, and responsibility.
              </>
            ),
        }

      ];
  return (
    <div className='AboutUsMain'>
        <h1 className="Customer-title kodchasan-regular">Certifications</h1>
      <div className='certificates'>
        <img src={img1900} alt="1900 certificates" className="certificate" />
        <img src={img1920} alt="1920 certificates" className="certificate" />
        <img src={startup} alt="Startup certificates" className="certificate" />
      </div>
      <div className="card-container">
        {sections.map((section, index) => (
            <div key={index} className="card kodchasan-regular">
                
                <SectionTitle title={section.title} />
                <SectionContent>{section.content}</SectionContent>
            </div>
            ))}
            </div>
    </div>
  );
};

export default AboutUsMain;
