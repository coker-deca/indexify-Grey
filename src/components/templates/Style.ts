import styled from 'styled-components';
import { MainColors } from './../../constants/colors';

export const NavBar = styled.div`
    display: flex;
    max-width: 1234px;
    padding: 1.5rem 3rem 1.2rem 1.3rem;
    margin: auto;
    background-color: ${MainColors.white};

    button {
        margin-left: auto;
    }

    svg {
        margin-right: 2.3rem;
        min-width: 95px;
    }
`;