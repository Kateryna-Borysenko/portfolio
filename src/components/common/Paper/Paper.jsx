import s from './Paper.module.css';

const Paper = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Paper;
