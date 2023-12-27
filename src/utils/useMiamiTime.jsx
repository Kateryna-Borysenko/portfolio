import { useState, useEffect } from 'react';

const useMiamiTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const miamiTime = new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
      });
      const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).format(new Date(miamiTime));

      setTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return time;
};

export default useMiamiTime;
