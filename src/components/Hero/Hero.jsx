import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../uikit/Button/Button';
import image from '../../images/hero.jpg';
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
      <Paper>
        <div className={s.hero_container}>
          <div className={s.content_container}>
            <h1 className={s.title}>
              Bridging Concepts <br className={s.br} /> with Solutions
              <br className={s.br} /> for Impactful Outcomes.
            </h1>
            <p className={s.quote}>
              Every journey starts with a small decision. Contact me so that
              together we can realize your ideas.
            </p>
            <div className={s.signature}>Kateryna Borysenko</div>
            <div className={s.button_container}>
              <Button
                name="Contact Me"
                ariaLabel="Contact Me"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className={s.image_container}>
            <img
              className={s.image}
              src={image}
              alt="Developer"
              loading="lazy"
            />
          </div>
        </div>
      </Paper>

      <motion.div
        className={s.sliding_text_container}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Developer
      </motion.div>
    </div>
  );
};

export default HeroBanner;
