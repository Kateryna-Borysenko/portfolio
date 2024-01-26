import s from './LightButton.module.css';

const LightButton = ({ name, onClick, ariaLabel, icon }) => {
  return (
    <button className={s.button} onClick={onClick} aria-label={ariaLabel}>
      <span className={s.icon}>{icon}</span>
      {name}
    </button>
  );
};

export default LightButton;
