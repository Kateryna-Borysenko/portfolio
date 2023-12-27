import s from './LocalTime.module.css';
import useMiamiTime from '../../utils/useMiamiTime';

const LocalTime = () => {
  const miamiTime = useMiamiTime();

  return <div className={s.container}>Local time: {miamiTime}</div>;
};

export default LocalTime;
