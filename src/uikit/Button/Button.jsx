import s from './Button.module.css';

const Button = ({ name, icon, onClick, ariaLabel, children }) => {
  return (
    <button className={s.button} onClick={onClick} aria-label={ariaLabel}>
      {name && <span className={s.name}>{name}</span>}
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
