import React from 'react';
import Marquee from 'react-fast-marquee';
import './Imagemarquee.css';

function ImageMarquee({ speed = 60, imageHeight = 100 }) {
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../../Resource/oems', false, /\.(png|jpe?g|svg)$/));

  const handleClick = (index) => {
    console.log(`Image ${index + 1} clicked`);
  };

  return (
    <div className="marquee-container">
      <Marquee speed={speed} gradient={false}>
        {images.map((img, index) => (
          <div key={index} className="marquee-item">
            <button onClick={() => handleClick(index)} className="marquee-button">
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="marquee-image"
                style={{ height: `${imageHeight}px`, width: 'auto' }}
              />
            </button>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default ImageMarquee;