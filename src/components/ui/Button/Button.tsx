import React, { FC } from 'react';

import { StyledButton } from './Style';

const Button: FC<{ className?: string; value: string }> = ({
  className,
  value,
}) => <StyledButton className={className}>{ value }</StyledButton>;

export default Button;
