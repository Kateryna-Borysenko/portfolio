import s from './LightButton.module.css';

const LightButton = ({ name, onClick, ariaLabel }) => {
  return (
    <button className={s.button} onClick={onClick} aria-label={ariaLabel}>
      {name}
    </button>
  );
};

export default LightButton;
