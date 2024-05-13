import LocalTime from '../../LocalTime/LocalTime';
import CellPhone from '../CellPhone/CellPhone';
import logo from '../../../images/logo.png';
import { EMAIL } from '../../../utils/constants';
import { LOCATION } from '../../../utils/constants';
import { GITHUB_URL } from '../../../utils/urls';
import { PINELLAS_PARK_MAP_URL } from '../../../utils/urls';
import s from './Footer.module.css';

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
          <p className={s.logo_description}>IDEAS IN CODE</p>
        </a>

        <div className={s.copyright_info}>
          © {new Date().getFullYear()} All rights reserved.
        </div>
        <div className={s.contacts_info_container}>
          <div className={s.title}>CONTACTS</div>
          <CellPhone />
          <div className={s.email}>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <LocalTime />
          <div className={s.location}>
            <a
              href={PINELLAS_PARK_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {LOCATION}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
