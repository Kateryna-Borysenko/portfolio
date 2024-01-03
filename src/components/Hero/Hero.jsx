import { useNavigate } from 'react-router-dom';
import Button from '../../uikit/Button/Button';
import image from '../../images/hero-img.png';
import Paper from '../common/Paper/Paper';
import s from './Hero.module.css';

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contacts');
  };
  return (
    <Paper>
      <div className={s.container}>
        <div className={s.content_container}>
          <h1 className={s.title}>
            Manifesting <br /> bold imaginations
            <br /> into remarkable results.
          </h1>
          <p className={s.quote}>
            Every journey starts with small decision. For us it will be a short
            call where we will get to know each other.
          </p>
          <div className={s.signature}>Kateryna Borysenko</div>
          <Button name="Contact Me" onClick={handleClick} />
        </div>
        <div className={s.img_container}>
          <img className={s.img} src={image} alt="Developer Logo" />
        </div>
      </div>
    </Paper>
  );
};

export default HeroBanner;
