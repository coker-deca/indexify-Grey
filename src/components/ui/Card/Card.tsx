import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { setCredentials } from '../../../app/slices/authSlice';
import { useSignUpMutation } from '../../../utils/service';
import { StyledContainer, Title } from './Style';

const Card = () => {
  const dispatch = useDispatch();
  const ref = useRef<any>();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 400px)" });
  const history = useHistory();
  const [signUp, {error}] = useSignUpMutation();

  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const token = await signUp({ email: ref.current!.value }).unwrap();
      dispatch(setCredentials(token));
      history.push("/homepage");
    } catch (error) {
      console.log(error);
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
        {error && "Error login in!!!"}
      </form>
    </StyledContainer>
  );
};
export default Card;
