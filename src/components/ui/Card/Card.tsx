import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

// import ApiService from '../../../utils/service';
import { StyledContainer, Title } from './Style';

const Card = () => {
  const ref = useRef<any>();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 400px)" });
  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const login = { email: ref.current.value };
    const body = JSON.stringify(login);
    const data = {token: "s"};
    // const { data } = await ApiService.signUp(body);
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
