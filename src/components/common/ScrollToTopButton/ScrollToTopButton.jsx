import { useState, useEffect } from 'react';
import { TopArrowIcon } from '../../icons';
import s from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`${s.scroll_btn} ${isVisible ? s.show : s.hide}`}>
      <div className={s.button} onClick={scrollToTop}>
        <TopArrowIcon fill="#fff" />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
