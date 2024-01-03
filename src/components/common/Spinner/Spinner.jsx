import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BallTriangle } from 'react-loader-spinner';
import s from './Spinner.module.css';

const Spinner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return show
    ? createPortal(
        <div className={s.spinner}>
          <BallTriangle
            color="#dedede"
            height={100}
            width={100}
            ariaLabel="loading"
          />
        </div>,
        document.querySelector('#modal-root'),
      )
    : null;
};

export default Spinner;
