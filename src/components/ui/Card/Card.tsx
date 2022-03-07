import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { StyledContainer, Title } from './Style';

const Card = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 400px)" });
  return (
    <StyledContainer useMediaQuery={isSmallScreen}>
      <Title useMediaQuery={isSmallScreen}>Log In to your account</Title>
      <form>
        <label>
          <p>Email Address</p>
          <input type="text" />
        </label>
        <input type="button" value="Login" />
      </form>
    </StyledContainer>
  );
};
export default Card;
