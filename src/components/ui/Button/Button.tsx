import React, { FC } from 'react';

import { StyledButton } from './Style';

const Button: FC<{
  className?: string;
  value: string;
  onClick: () => void;
}> = ({ className, value, onClick }) => (
  <StyledButton className={className} onClick={onClick}>{value}</StyledButton>
);

export default Button;
