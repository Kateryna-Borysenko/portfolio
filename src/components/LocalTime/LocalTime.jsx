import useMiamiTime from '../../utils/useMiamiTime';

const LocalTime = () => {
  const miamiTime = useMiamiTime();

  return <div>Local time: {miamiTime}</div>;
};

export default LocalTime;
