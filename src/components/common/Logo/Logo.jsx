import s from './Logo.module.css';

const Logo = ({ logo }) => {
  return (
    <div className={s.img_container}>
      <img className={s.img} src={logo} alt="img" />
    </div>
  );
};

export default Logo;
