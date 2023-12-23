import { Link } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = ({ logo }) => {
  return (
    <div className={s.img_container}>
      <Link to="/">
        <img className={s.img} src={logo} alt="Developer Logo" />
      </Link>
    </div>
  );
};

export default Logo;
