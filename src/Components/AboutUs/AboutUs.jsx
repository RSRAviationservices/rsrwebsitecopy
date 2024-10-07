import React from 'react';
import './aboutus.css';  // Custom CSS for styling

// Component for Section Title
const SectionTitle = ({ title }) => {
  return <h2>{title}</h2>;
};

// Component for a paragraph of content
const SectionContent = ({ children }) => {
  return <p>{children}</p>;
};

// Main Component
const AboutUs = () => {
  return (
    <div className="card-container">
      <div className="card kodchasan-regular">
        <SectionTitle title="Who We Are" />
        <SectionContent>
          RSR Aviation Services Pvt Ltd is a premier provider of high-quality consumables for the aerospace industry, specializing in supplying a broad range of products essential for both aircraft manufacturing and maintenance operations. We are committed to delivering top-tier materials and consumables that ensure safety, performance, and regulatory compliance in all aspects of aircraft production, repair, and upkeep.
        </SectionContent>
      </div>

      <div className="card kodchasan-regular">
        <SectionTitle title="Our Mission" />
        <SectionContent>
          Our mission is to provide the aerospace industry with world-class consumables that enhance the safety, reliability, and efficiency of aircraft manufacturing and maintenance. We strive to be the trusted partner for aviation companies by offering innovative solutions, superior products, and exceptional customer service.
        </SectionContent>
      </div>

      <div className="card kodchasan-regular">
        <SectionTitle title="Our Vision" />
        <SectionContent>
          <strong>Quality:</strong> We ensure all products meet stringent aerospace standards and deliver exceptional performance.<br />
          <strong>Safety:</strong> We prioritize the safety of our customers by supplying reliable, certified consumables.<br />
          <strong>Customer Focus:</strong> We are committed to building lasting relationships through unparalleled service and support.<br />
          <strong>Integrity:</strong> We conduct our business with transparency, ethics, and responsibility.<br />
          <strong>Innovation:</strong> We continuously seek cutting-edge solutions to meet the evolving demands of the aviation industry.
        </SectionContent>
      </div>
    </div>
  );
};

export default AboutUs;
