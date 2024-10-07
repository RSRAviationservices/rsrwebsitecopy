import React, { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import './ImageCarousel.css';

const ImageCarousel = ({ images, interval = 2000}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [goToNext, interval]);

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    swipeDuration: 500,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...handlers} className="image-carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel image ${index + 1}`}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          style={{ 
            opacity: index === currentIndex ? 1 : 0,
            transform: `translateX(${(index - currentIndex) * 100}%)`,
            transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
          }}
        />
      ))}
      <button className="carousel-button prev" onClick={goToPrevious}>&lt;</button>
      <button className="carousel-button next" onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default ImageCarousel;