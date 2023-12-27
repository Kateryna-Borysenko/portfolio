import s from './Input.module.css';

const Input = ({
  name,
  type = 'text',
  label,
  errors,
  icon,
  placeholder = '',
}) => {
  return (
    <div className={s.container}>
      <label className={s.label}>
        {label}
        {icon && <span className={s.icon}>{icon}</span>}
        <input
          className={s.input}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </label>
      {errors && <div className={s.error}>{errors}</div>}
    </div>
  );
};

export default Input;
