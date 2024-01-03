import { createPortal } from 'react-dom';
import { BallTriangle } from 'react-loader-spinner';
import s from './Spinner.module.css';

const Spinner = () => {
  return createPortal(
    <div className={s.spinner}>
      <BallTriangle
        color="#dedede"
        height={100}
        width={100}
        ariaLabel="loading"
        timeout={3000}
      />
    </div>,
    document.querySelector('#modal-root'),
  );
};

export default Spinner;
