import s from './LightButton.module.css';

const LightButton = ({ name, onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default LightButton;
