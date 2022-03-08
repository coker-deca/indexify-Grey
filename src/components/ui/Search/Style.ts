import styled from 'styled-components';
import { MainColors } from '../../../constants/colors';

export const InputContainer = styled.div`
    width: 40%;
    min-width: 200px;

    input {
        background: ${MainColors.white};
        border: 1px solid ${MainColors['indexify-border']};
        box-sizing: border-box;
        border-radius: 5px;
        width: 100%;
        min-width: 200px;
        padding: 10px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 17px;
        letter-spacing: -0.005em;
  }

`;
