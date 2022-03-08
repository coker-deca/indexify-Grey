import React, { FC } from 'react';

import { tableHeadType, Users } from '../../../pages/HomePage';
import { formatDate } from '../../lib/date';
import Pagination from './Pagination';
import { StyledTable, TableContainer, TableWrapper } from './Style';

interface TableProps {
  page: number;
  totalPages: number;
  tableHead: tableHeadType;
  tableRowData: Users[];
  handlePrevPage: () => void;
  handleNextPage: () => void;
}
const Table: FC<TableProps> = ({
  page,
  totalPages,
  tableHead,
  tableRowData,
  handlePrevPage,
  handleNextPage,
}) => {
  const tableRows = (rowData: any) => {
    const { company, index } = rowData;
    const tableCell = Object.keys(tableHead);
      const columnData = tableCell.map((keyD, i) => {
        let value = company[keyD];
        if (keyD === "createdAt") value = formatDate(value);
        return <td key={i}>{value}</td>;
      });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return tableRowData.map((company, index) => tableRows({ company, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <TableWrapper >
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>{headRow()}</tr>
          </thead>
          <tbody className="trhover">{tableData()}</tbody>
        </StyledTable>
      </TableContainer>
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </TableWrapper>
  );
};
export default Table;
