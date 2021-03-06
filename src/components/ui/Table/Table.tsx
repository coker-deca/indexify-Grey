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
  isModalOpen: boolean;
  isLoading: boolean;
  toggleModal: (state: boolean, id?: number) => void;
}
const Table: FC<TableProps> = ({
  page,
  totalPages,
  tableHead,
  tableRowData,
  handlePrevPage,
  handleNextPage,
  toggleModal,
  isLoading,
}) => {
  const tableRows = (rowData: { company: Users; index: number }) => {
    const { company, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      let value = company[keyD as keyof typeof tableHead];
      if (keyD === "createdAt") value = formatDate(value);
      return <td key={i}>{value}</td>;
    });

    return (
      <tr onClick={() => toggleModal(true, index)} key={index}>
        {columnData}
      </tr>
    );
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
    <TableWrapper>
      {!isLoading && (
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>{headRow()}</tr>
            </thead>
            <tbody>{tableData()}</tbody>
          </StyledTable>
        </TableContainer>
      )}
      {isLoading && "Data loading"}
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        isLoading={isLoading}
      />
    </TableWrapper>
  );
};
export default Table;
