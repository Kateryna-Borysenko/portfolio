import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRootRef = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const onEscPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', onEscPress);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <div className={s.wrapper}>
          <button
            type="button"
            className={s.close_btn}
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          <div className={s.content}>{children}</div>
        </div>
      </div>
    </div>,
    modalRootRef,
  );
};

export default Modal;
