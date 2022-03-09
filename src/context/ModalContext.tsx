import { createContext, FC, useEffect, useRef, useState } from 'react';

import { Container } from '../components/ui/Portal/Style';

interface ModalContextProps {
  node: Element;
}

export const ModalContext = createContext<Partial<ModalContextProps>>({});

export const ModalProvider: FC = ({ children }) => {
  const modalRef = useRef(null);
  const [context, setContext] = useState<Element>();

  // make sure re-render is triggered after initial
  // render so that modalRef exists
  useEffect(() => {
    setContext(modalRef.current!);
  }, []);

  return (
    <Container>
      <ModalContext.Provider value={{ node: context }}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </Container>
  );
};
