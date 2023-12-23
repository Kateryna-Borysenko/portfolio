import s from './Button.module.css';

const Button = ({ name, icon, onClick, children }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {name && <span className={s.name}>{name}</span>}
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
