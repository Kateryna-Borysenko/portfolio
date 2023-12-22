import Navigation from '../../Navigation/Navigation';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.container}>
      <div>LOGO</div>
      <Navigation />
    </header>
  );
};

export default Header;
