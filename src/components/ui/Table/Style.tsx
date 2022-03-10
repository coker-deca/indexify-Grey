import styled from 'styled-components';

import { MainColors } from '../../../constants/colors';

export const TableWrapper = styled.div`
  max-width: 60rem;
  margin: auto;
  font-family: DM Sans;
  padding: 10px;

  .pagination-button-wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  .current-page {
    color: ${MainColors.black};
  }

  .pagination-page-info {
    color: ${MainColors["indexify-grey"]};
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.005em;
  }

  button {
    display: grid;
    place-items: center;
    height: 26px;
    width: 26px;
    font-size: 17px;
    border-radius: 5px;
    color: ${MainColors.white};
    background-color: ${MainColors["indexify-blue"]};
    cursor: pointer;
    margin: 0px 15px;
    border: none;
  }

  button:hover {
    background-color: ${MainColors["button-hover"]};
    color: ${MainColors.white};
  }

  button:disabled {
    cursor: not-allowed;
    background-color: ${MainColors.disabled};
    :hover {
      background: none;
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  background: ${MainColors.white};
  width: 100%;
  min-width: 760px;
  overflow: scroll;
  padding: 1em;
  margin: 12px 0;
  border-collapse: collapse;
  border: 1px solid ${MainColors['indexify-border']};
  box-sizing: border-box;
  border-radius: 5px;

  thead tr td {
    text-align: left;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.005em;
    padding: 16px;
  }

  tbody tr td {
    border-top: 1px solid ${MainColors['indexify-border']};
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    text-align: left;
    padding: 15px;
  }
`;
