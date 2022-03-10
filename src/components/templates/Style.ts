import styled, { css } from 'styled-components';

import { MainColors } from './../../constants/colors';

export const NavBar = styled.div<{useMediaQuery: boolean;}>`
    background-color: ${MainColors.white};
    
    .wrapper {
        padding: 1.5rem 3rem 1.2rem 1.3rem;
        display: flex;
        margin: 0 auto;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        max-width: 1234px;
        ${({ useMediaQuery }) =>
            useMediaQuery &&
            css`
            padding: 1rem;
            flex-direction: column;
        `}
    }
    .search {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        margin-left: 42px;
        ${({ useMediaQuery }) =>
            useMediaQuery &&
            css`
            margin-left: 0;
            margin-top: 20px;
            width: 100%;
        `}
    }
    .logout-logo {
        display: none;
        font-size: 20px;
        padding: 10px 5px;
        
        ${({ useMediaQuery }) =>
    useMediaQuery &&
    css`
      display: grid;
      `}
    }

    .logout-word {
        display: grid;
        padding: 10px 28px;

        ${({ useMediaQuery }) =>
        useMediaQuery &&
        css`
        display: none;
     `}
    }
    .logo {
        width: 95px;
    }
`;