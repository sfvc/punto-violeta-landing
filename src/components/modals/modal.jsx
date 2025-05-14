import { forwardRef } from 'react';

const Modal = forwardRef(({ isOpen, onClose, children, clase }, ref) => {
  if (!isOpen) return null;

  return (
    <div className={clase} onClick={onClose} ref={ref}>
      {children}
    </div>
  );
});

export default Modal;
