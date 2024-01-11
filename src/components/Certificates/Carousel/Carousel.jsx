import { useState, useEffect, useCallback } from 'react';
import Paper from '../../common/Paper/Paper';
import { BackArrowIcon, ForwardArrowIcon } from '../../icons';
import s from './Carousel.module.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentItem = items[currentIndex];

  const goToSlide = useCallback(index => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    goToSlide(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  }, [currentIndex, items.length, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, items.length, goToSlide]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(goToNext, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused, goToNext]);

  return (
    <div
      className={s.container}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Paper>
        <div className={s.carousel_container}>
          <div className={s.carousel_image_container}>
            {items.map((item, index) => (
              <img
                key={item.id}
                src={item.imgSrc}
                alt={item.alt}
                loading="lazy"
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
                key={item.id}
                className={`${s.indicator} ${
                  index === currentIndex ? s.active_indicator : ''
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
          <div className={s.info_block}>
            <a
              key={currentItem.id}
              className={s.link}
              href={currentItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={s.title}>{currentItem.title}</h2>
            </a>
            <div>Duration: {currentItem.duration}</div>
            <div className={s.year}>
              <span>{currentItem.city} </span>
              {currentItem.year}
            </div>
          </div>
        </div>
      </Paper>
      <div className={s.carousel_controls}>
        <button className={s.back} onClick={goToPrevious}>
          <BackArrowIcon width="48px" fill="#282626ff" />
        </button>
        <button className={s.forward} onClick={goToNext}>
          <ForwardArrowIcon width="48px" fill="#282626ff" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
