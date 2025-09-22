import React, { useState, useEffect } from "react";
import "./Services.css";
import defenceImg from '../../Resource/Defence.png';
import aerospaceImg from '../../Resource/Aerospace.png';
import industrialImg from '../../Resource/industrial.png';
import generalAviationImg from '../../Resource/general Aviation.png';
import { useLocation } from "react-router-dom";
import tradingImg from '../../Resource/trading.png';
import paintManufacturingImg from '../../Resource/paintmanufacturing.png';
import paintApplicationImg from '../../Resource/paintapplication.png';

const industries = [
  {
    name: "Defence",
    image: defenceImg,
    description: "We supply specialized consumables and services to When readiness defines success, RSR Aviation delivers. We support defense agencies and armed forces with mission-critical paints, materials, and solutions that meet the highest military standards. From ruggedized coatings to specialized hardware, our offerings are built for resilience, precision, and performance in even the most demanding environments"
  },
  {
    name: "Aerospace MRO",
    image: aerospaceImg,
    description: "In the high-stakes world of aircraft maintenance, reliability isn’t optional—it’s mission-critical. RSR Aviation supports MRO operations with high-performance consumables, coatings, and components engineered to meet OEM standards and reduce turnaround time. Our solutions help extend aircraft life, optimize maintenance schedules, and ensure regulatory compliance with every service.Our products and expertise help aerospace MRO (Maintenance, Repair, and Overhaul) organizations maintain the highest standards of airworthiness and operational efficiency."
  },
  {
    name: "Industrial",
    image: industrialImg,
    description: "RSR Aviation partners with public sector agencies and industrial enterprises to deliver customized material and coating solutions built for performance, scale, and compliance. Whether supporting infrastructure, transport, or energy-related applications, we help critical industries maintain operational excellence with dependable, timely supply."
  },
  {
    name: "General Aviation",
    image: generalAviationImg,
    description: "Whether it’s business jets or personal aircraft, RSR Aviation brings the same technical precision and quality assurance to general aviation that we deliver to large fleets. From premium paints to specialty materials, our solutions help private operators, FBOs, and charter services maintain top-tier performance and presentation—on the ground and in the sky."
  }
];

const services = [
  {
    title: "Trading",
    image: tradingImg,
    description: "We offer a wide range of aerospace consumables and products for trading, ensuring quality and timely delivery to our clients. Our trading division sources and supplies only the best materials, building long-term relationships with both suppliers and customers. Global sourcing and distribution, quality assurance for every product, and efficient logistics and support."
  },
  {
    title: "Paint Manufacturing",
    image: paintManufacturingImg,
    description: "Our state-of-the-art paint manufacturing facility produces high-quality paints tailored for aerospace and industrial applications. We focus on innovation, durability, and compliance with international standards. Custom formulations for specific needs, stringent quality control, and eco-friendly, sustainable processes."
  },
  {
    title: "Paint Application",
    image: paintApplicationImg,
    description: "We provide professional paint application services, ensuring precision, durability, and compliance with industry standards. Our expert team uses advanced techniques and equipment for flawless results. Experienced application specialists, on-site and in-house services, and strict adherence to safety and quality."
  }
];

const Services = () => {
  const location = useLocation();
  const initialIndustry = location.state && typeof location.state.industryIndex === 'number' ? location.state.industryIndex : 0;
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(initialIndustry);
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeInService, setFadeInService] = useState(true);

  useEffect(() => {
    setFadeIn(true);
    const timeout = setTimeout(() => setFadeIn(false), 500);
    return () => clearTimeout(timeout);
  }, [activeIndustry]);

  useEffect(() => {
    setFadeInService(true);
    const timeout = setTimeout(() => setFadeInService(false), 500);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <div className="services-tabs-section">
      <h1 className="services-blog-title">Our Services</h1>
      
      <div className="services-feature-content">
            {services.map((service, idx) => (
         <article key={idx} className="industry-feature-card service-card-vertical industry-fade-in">
             <div className="industry-feature-image-wrap">
                    <img
                    src={service.image}
                    alt={`${service.title} icon`}
                    className="industry-feature-image"
                    />
                </div>
            <div className="industry-feature-text">
                <h2 className="industry-feature-title">{service.title}</h2>
                <div className="industry-feature-description">{service.description}</div>
            </div>
            </article>
        ))}
</div>
      <div className="industries-section">
        <h2 className="industries-title">Industries We Serve</h2>
        <div className="industries-list">
          {industries.map((industry, idx) => (
            <span className={`industry-badge${activeIndustry === idx ? " active" : ""}`} key={idx} onClick={() => setActiveIndustry(idx)}>{industry.name}</span>
          ))}
        </div>
        <div className="industries-feature-content">
          <article className={`industry-feature-card${fadeIn ? ' industry-fade-in' : ''}`}>
            <div className="industry-feature-image-wrap">
              <img src={industries[activeIndustry].image} alt={industries[activeIndustry].name + ' icon'} className="industry-feature-image" />
            </div>
            <div className="industry-feature-text">
              <h2 className="industry-feature-title">{industries[activeIndustry].name}</h2>
              <div className="industry-feature-description">{industries[activeIndustry].description}</div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Services;
