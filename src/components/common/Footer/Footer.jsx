import LocalTime from '../../LocalTime/LocalTime';
import s from './Footer.module.css';
import CellPhone from '../CellPhone/CellPhone';
import logo from '../../../images/logo.png';
import { EMAIL } from '../../../utils/constants';
import { LOCATION } from '../../../utils/constants';
import { GITHUB_URL } from '../../../utils/urls';

const Footer = () => {
  return (
    <footer>
      <div style={{ height: '3px', backgroundColor: '#ffffff' }} />
      <div className={s.container}>
        <a
          className={s.logo_link}
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="Logo" width="100px" />
          <p>IDEAS IN CODE</p>
        </a>

        <div>
          <div>CONTACTS</div>
          <CellPhone />
          <div>{EMAIL}</div>
          <LocalTime />
          <div>{LOCATION}</div>
        </div>
        <div>
          © {new Date().getFullYear()} Kateryna Borysenko. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
