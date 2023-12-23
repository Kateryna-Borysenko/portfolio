import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div style={{ height: '3px', backgroundColor: '#ffffff' }} />
      <div className={s.container}>Footer</div>
    </footer>
  );
};

export default Footer;
