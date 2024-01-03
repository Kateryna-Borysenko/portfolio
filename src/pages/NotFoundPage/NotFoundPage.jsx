import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '../../components/common/Paper/Paper';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="global_container">
      <Paper>
        <div>
          <h1>404</h1>
          <div>
            Redirect to Home page after <span>{countdown} seconds...</span>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default NotFoundPage;
