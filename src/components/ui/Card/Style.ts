import styled, { css } from 'styled-components';

export const StyledContainer = styled.div<{useMediaQuery: boolean}>`
  background: #FFFFFF;
  border: 1px solid #F0F0F0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 9% 12%;
  margin: 40px;
  
  form {
      display: flex;
      flex-direction: column;
    }

  label p {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    margin: 4px 0;
    line-height: 16px;
    letter-spacing: -0.005em;
    color: #000000
    ${({ useMediaQuery }) =>
    useMediaQuery &&
    css`
      fontSize: 0.75rem;
    `}
  }
  
  input[type="email"] {
    width: 297px;
    height: 41px;
    margin-bottom: 40px;

    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-sizing: border-box;
    border-radius: 5px;
    ${({ useMediaQuery }) =>
    useMediaQuery &&
    css`
      width: 15rem;
      height: 2rem;
    `}
  }

  input[type="submit"] {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 62px;
    width: 18.6rem;
    margin-bottom: 20px;
    height: 2.4rem;
    background: #428AF5;
    border: none;
    color: #FFFFFF;
    letter-spacing: -0.005em;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    border-radius: 5px;
    ${({ useMediaQuery }) =>
    useMediaQuery &&
    css`
      width: 15rem;
      height: 2rem;
    `}
  }
`;

export const Title = styled.h2<{ useMediaQuery: boolean }>`
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 40px;
    letter-spacing: -0.005em;
    color: #000000;
    ${({ useMediaQuery }) =>
        useMediaQuery &&
        css`
        font-size: 15px;
    `}
`;
