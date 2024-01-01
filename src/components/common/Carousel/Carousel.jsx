import React, { useState } from 'react';
import s from './Carousel.module.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    setIsTransitioning(true);
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = index => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className={s.carousel_container}>
      <div className={s.carousel_controls}>
        <button onClick={goToPrevious}>Назад</button>
        <button onClick={goToNext}>Вперед</button>
      </div>
      <div className={s.carousel_image_container}>
        {items.map((item, index) => (
          <img
            key={index}
            src={item.imgSrc}
            alt={item.alt}
            style={{ maxWidth: item.width, height: 'auto' }}
            className={`${s.carousel_image} ${
              index === currentIndex ? s.active : ''
            } ${isTransitioning ? s.transitioning : ''}`}
          />
        ))}
      </div>

      <div className={s.carousel_indicators}>
        {items.map((item, index) => (
          <button
            key={index}
            className={`${s.indicator} ${
              index === currentIndex ? s.active_indicator : ''
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
