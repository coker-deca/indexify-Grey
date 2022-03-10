// import { useContext } from "react";
import { FC, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import Portal from '../Portal/Portal';
import { Dialog } from './Style';

const Modal: FC<{ onClose: () => void }> = ({
  onClose,
  children,
  ...props
}) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 425px)" });
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => onClose());
  return (
    <Portal>
      <Dialog ref={ref} useMediaQuery={isSmallScreen}>
        <span className="close" onClick={onClose}>
          x
        </span>
        <div className="content-wrapper">{children}</div>
      </Dialog>
    </Portal>
  );
};

export default Modal;
