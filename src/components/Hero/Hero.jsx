import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../uikit/Button/Button';
import image from '../../images/hero.png';
import Paper from '../common/Paper/Paper';
import s from './Hero.module.css';

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contacts');
  };

  const sliderVariants = {
    initial: {
      x: '120%',
    },
    animate: {
      x: '-120%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 30,
      },
    },
  };

  return (
    <div className={s.container}>
      <div className={s.hero_container}>
        <Paper>
          <div className={s.content_container}>
            <h1 className={s.title}>
              Manifesting <br /> bold imaginations
              <br /> into remarkable results.
            </h1>
            <p className={s.quote}>
              Every journey starts with small decision. For us it will be a
              short call where we will get to know each other.
            </p>
            <div className={s.signature}>Kateryna Borysenko</div>
            <Button
              name="Contact Me"
              ariaLabel="Contact Me"
              onClick={handleClick}
            />
          </div>
          <div className={s.image_container}>
            <img
              className={s.image}
              src={image}
              alt="Developer"
              loading="lazy"
            />
          </div>
        </Paper>
      </div>

      <motion.div
        className={s.sliding_text_container}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Fullstack Developer
      </motion.div>
    </div>
  );
};

export default HeroBanner;
