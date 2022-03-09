// import { useContext } from "react";
import { FC } from 'react';

import Portal from '../Portal/Portal';
import { Dialog } from './Style';

// const modalNode = useContext(ModalContext);
const Modal: FC<{ onClose: () => void }> = ({
  onClose,
  children,
  ...props
}) => {
  return (
    <Portal>
      <Dialog>
        <span className="close" onClick={onClose}>
          x
        </span>
        <div className="content-wrapper">{children}</div>
      </Dialog>
    </Portal>
  );
};

export default Modal;
