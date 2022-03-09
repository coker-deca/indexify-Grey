import { FC, useContext } from 'react';
import { createPortal } from 'react-dom';

import { ModalContext } from '../../../context/ModalContext';
import { Overlay } from './Style';

const Portal: FC = ({ children, ...props }) => {
  const modalNode = useContext(ModalContext).node;

  return modalNode
    ? createPortal(<Overlay>{children}</Overlay>, modalNode)
    : null;
};

export default Portal;