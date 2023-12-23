import Logo from '../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import logo from '../../../images/logo.png';
import s from './Header.module.css';
import CellPhone from '../CellPhone/CellPhone';

const Header = () => {
  return (
    <header className={s.container}>
      <Logo logo={logo} />
      <Navigation />
      <CellPhone />
    </header>
  );
};

export default Header;
