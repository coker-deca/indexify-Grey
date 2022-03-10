import styled, { css } from 'styled-components';

import { MainColors } from '../../../constants/colors';

export const StyledContainer = styled.div<{useMediaQuery: boolean}>`
  background: ${MainColors.white};
  border: 1px solid ${MainColors['signUp-border']};
  width: 390px;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 9% 12%;
  margin: 40px;
  ${({ useMediaQuery }) =>
    useMediaQuery &&
    css`
      width: 90%;
  `}
  
  h4 {
    color: ${MainColors.error}
  }

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
    color: ${MainColors.black};
    ${({ useMediaQuery }) =>
    useMediaQuery &&
    css`
      fontSize: 0.75rem;
    `}
  }
  
  input[type="email"] {
    width: 100%;
    height: 41px;
    margin-bottom: 40px;
    padding: 10px;

    background: ${MainColors.white};
    border: 1px solid ${MainColors['indexify-border']};
    box-sizing: border-box;
    border-radius: 5px;
    ${({ useMediaQuery }) =>
    useMediaQuery &&
    css`
      height: 2rem;
    `}
  }

  input[type="submit"] {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 62px;
    width: 100%;
    margin-bottom: 20px;
    height: 2.4rem;
    background: ${MainColors['indexify-blue']};
    border: none;
    color: ${MainColors.white};
    letter-spacing: -0.005em;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    border-radius: 5px;
    cursor: pointer;
    ${({ useMediaQuery }) =>
    useMediaQuery &&
    css`
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
    color: ${MainColors.black};
    ${({ useMediaQuery }) =>
        useMediaQuery &&
        css`
        font-size: 15px;
    `}
`;
