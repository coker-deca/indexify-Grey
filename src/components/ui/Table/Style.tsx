import styled from 'styled-components';

export const TableWrapper = styled.div`
  max-width: 60rem;
  margin: auto;
  font-family: DM Sans;

  .heading {
    color: #14877c;
    border-bottom: 1px solid #14877c;
    margin-bottom: 30px;
    padding-bottom: 10px;
  }

  .pagination-button-wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  input {
    background: #ffffff;
    border: 1px solid #f1f1f1;
    box-sizing: border-box;
    border-radius: 5px;
    width: 40%;
    min-width: 200px;
    padding: 10px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: -0.005em;
  }
  button {
    height: 26px;
    width: 26px;
    font-size: 17px;
    user-select: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: #428af5;
    cursor: pointer;
    margin: 0px 15px;
    border: none;
  }

  button:hover {
    background-color: #498fff;
    color: #ffffff;
  }

  button:disabled {
    cursor: not-allowed;
    background-color: #e9e9e9;
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
  background: #ffffff;
  width: 100%;
  min-width: 760px;
  overflow: scroll;
  padding: 1em;
  margin: 20px 0;
  border-collapse: collapse;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  border-radius: 5px;

  thead {
    font-size: 16px;
  }

  th {
    text-align: left;
    padding: 8px;
    background-color: 1px solid #ffffff;
    color: #14877c;
  }

  td {
    border-top: 1px solid #f1f1f1;
    text-align: left;
    padding: 8px;
  }

  tr {
    height: 50px;
  }
`;
