import React, { useState } from 'react';
import './Home.css';
import ImageMarquee from '../Imagemarquee/Imagemarquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import presentationVideo from '../../Resource/videos/About.mp4';
import Form from '../Form/Form';
import AboutUs from'../AboutUs/AboutUs';


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
