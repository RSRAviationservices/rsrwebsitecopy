import React, { useState, useEffect } from "react";
import "./Home.css";
import ImageMarquee from "../Imagemarquee/Imagemarquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import presentationVideo from "../../Resource/videos/About.mp4";
import Form from "../Form/Form";
import AboutUs from "../AboutUs/AboutUs";
import img2 from "../../Resource/oems/2.jpg";
import img1 from "../../Resource/oems/1.jpg";
import img5 from "../../Resource/oems/5.jpg";
import img7 from "../../Resource/oems/7.jpg";
import img71 from "../../Resource/oems/71.jpg";
import img73 from "../../Resource/oems/73.jpg";
import img84 from "../../Resource/oems/84.jpg";
import img78 from "../../Resource/oems/78.jpg";

const Home = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../../Resource/post", false, /\.(png|jpe?g|svg)$/)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIsImageChanging(true); // Start image transition
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsImageChanging(false); // End image transition
      }, 500); // Match this duration with CSS transition time
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="home-container">
      <div className="welcome">
        <div className="image-carousel">
          <img
            src={images[currentImageIndex]}
            alt={`Carousel Slide ${currentImageIndex + 1}`}
            className={`carousel-image ${
              isImageChanging ? "fade-out" : "fade-in"
            }`}
          />
        </div>
      </div>

      <div className="our-stock kodchasan-regular">
        <div className="stocks-container">
          <div className="stock-section">
            <h2>Official Distributers</h2>
            <div className="distributers-logos">
              <img
                src={img78}
                alt="Distributer 78"
                className="distributer-logo"
              />
              <img
                src={img71}
                alt="Distributer 71"
                className="distributer-logo"
              />
              <img
                src={img73}
                alt="Distributer 73"
                className="distributer-logo"
              />
            </div>
          </div>
          <div className="stock-section">
            <h2>Blending Partner</h2>
            <div className="distributers-logos">
              <img
                src={img84}
                alt="Distributer 84"
                className="distributer-logo"
              />
            </div>
          </div>
          <div className="stock-section">
            <h2>Major Stock Holdings</h2>
            <div className="distributers-logos">
              <img src={img2} alt="akzo" className="distributer-logo" />
              <img src={img1} alt="3m" className="distributer-logo" />
              <img src={img5} alt="ppg" className="distributer-logo" />
              <img src={img7} alt="henkel" className="distributer-logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="who-we-are kodchasan-regular">
        <h2>We Deal With</h2>
        <div className="image-marquee">
          <ImageMarquee />
        </div>
      </div>

      <AboutUs />

      <div className="query-icon" onClick={openModal}>
        <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
