import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRootRef = document.querySelector('#modal-root');

const Modal = ({ onClose, title, children }) => {
  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
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
        <header className={s.header}>
          <button
            type="button"
            className={s.close_btn}
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </header>

        <div className={s.content}>{children}</div>
      </div>
    </div>,
    modalRootRef,
  );
};

export default Modal;
