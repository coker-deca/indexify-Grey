import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { createHttpRequest } from '../../../utils/api';
import { StyledContainer, Title } from './Style';

const Card = () => {
  const ref = useRef<any>();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 400px)" });
  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const login = { email: ref.current.value };
    const { url, headers, body } = {
      url: "https://company-lookup.herokuapp.com/api/v1/auth/login",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    };
    const { data } = await createHttpRequest(url, body, { headers });
    if (data) {
      localStorage.setItem("token", data.token);
      history.push("/homepage");
    }
  };
  return (
    <StyledContainer useMediaQuery={isSmallScreen}>
      <Title useMediaQuery={isSmallScreen}>Log In to your account</Title>
      <form>
        <label>
          <p>Email Address</p>
          <input type="email" ref={ref} />
        </label>
        <input type="submit" value="Login" onClick={handleSubmit} />
      </form>
    </StyledContainer>
  );
};
export default Card;
