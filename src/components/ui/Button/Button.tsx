import { ButtonHTMLAttributes, FC } from 'react';

import { StyledButton } from './Style';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => (
  <StyledButton className={className} {...props}>
    {children}
  </StyledButton>
);

export default Button;
