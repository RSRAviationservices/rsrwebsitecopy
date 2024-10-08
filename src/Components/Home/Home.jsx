import React, { useState } from 'react';
import './Home.css';
import ImageMarquee from '../Imagemarquee/Imagemarquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import presentationVideo from '../../Resource/videos/About.mp4';
import Form from '../Form/Form';
import AboutUs from'../AboutUs/AboutUs';
import img2 from '../../Resource/oems/2.jpg';
import img71 from '../../Resource/oems/71.jpg';
import img73 from '../../Resource/oems/73.jpg';
import img84 from '../../Resource/oems/84.jpg';


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="home-container">
      <div className='welcome'>
        <video width="100%" height="auto" autoPlay loop controls controlsList="nodownload noremoteplayback nofullscreen">
          <source src={presentationVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="who-we-are kodchasan-regular">
        <h2>Official Distributers of</h2>
        <div className='distributers-logos'>
        <img src={img2} alt="Distributer 2" className="distributer-logo" />
          <img src={img71}alt="Distributer 71" className="distributer-logo" />
          <img src={img73} alt="Distributer 73" className="distributer-logo" />
          <img src={img84} alt="Distributer 84" className="distributer-logo" />
        </div>
        <h2>We Deal With</h2>
        <div className="image-marquee">
          <ImageMarquee />
        </div>
      </div>

      {/* Adding AboutUs Component Here */}
      <AboutUs />

      <div className="query-icon" onClick={openModal}>  
        <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
      </div>

      {/* Modal */}
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
