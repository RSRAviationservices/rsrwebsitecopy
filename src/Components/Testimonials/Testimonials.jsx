import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "TATA ADVANCED SYSTEMS LTD,NOIDA",
    title: "SHOURYA / SUPPLY CHAIN MANAGER",
    text: "Greate Support and Service with all the requirements ,Timely Delivery and Quality Products",
   
    stars: 5
  },
  {
    name: "AIR WORKS INDIA PVT LTD",
    title: "PRAVIN NIKAM / ASSISTANT MANAGER-SUPPLY CHAIN",
    text: "We are extremely satisfied with the timely delivery of our order, the high-quality product and the exceptional support provided by your team",
    stars: 5
  },
  {
    name: "TATA ADVANCED SYSTEMS LTD,VADODARA",
    title: "ASHISH KUMAR / MANAGER-SUPPLY CHAIN",
    text: "We greatly appreciate the time and effort youre dedicating to our requirements. As you know,Your cooperation and commitment to ensuring everything runs smoothly are truly valued. Thank you for your continued support.",
    stars: 5
  },
  {
    name: "MACREQ MANUFACTURING Services PVT.LTD",
    title: "Creative Studio / Designer",
    text: "Excellent response time and on time delivery,Keep up the good work.",
    stars: 5
  }
];

const STAR = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD600" stroke="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const total = testimonials.length;

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  // Calculate visible testimonials (wrap around)
  const getVisible = () => {
    let arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(testimonials[(current + i) % total]);
    }
    return arr;
  };

  return (
    <div className="testimonials-carousel-bg">
        <h2>Testimonials</h2>
      <div className="testimonials-carousel">
        
        <button className="carousel-arrow left" onClick={prev} aria-label="Previous testimonials">&#8249;</button>
        <div className="carousel-cards">
          {getVisible().map((t, i) => (
            <div className="carousel-card" key={i}>
              
              <div className="carousel-name">{t.name}</div>
              <div className="carousel-title">{t.title}</div>
              <div className="carousel-stars">{Array.from({ length: t.stars }).map((_, idx) => <span key={idx}>{STAR}</span>)}</div>
              <div className="carousel-text">{t.text}</div>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right" onClick={next} aria-label="Next testimonials">&#8250;</button>
      </div>
      <div className="carousel-dots">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${idx === current ? " active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
