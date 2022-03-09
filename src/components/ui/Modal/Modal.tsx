// import { useContext } from "react";
import { FC, useRef } from 'react';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

import Portal from '../Portal/Portal';
import { Dialog } from './Style';

// const modalNode = useContext(ModalContext);
const Modal: FC<{ onClose: () => void }> = ({
  onClose,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => onClose());
  return (
    <Portal>
      <Dialog ref={ref}>
        <span className="close" onClick={onClose}>
          x
        </span>
        <div className="content-wrapper">{children}</div>
      </Dialog>
    </Portal>
  );
};

export default Modal;
