import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';

import { fetchHttpResponse } from '../../../constants/api';
import Pagination from './Pagination';

interface Users {
  _id: string;
  company_name: string;
  email: string;
  address: string;
  createdAt: Date;
  country: string;
  number_of_staff: number;
  net_worth: number;
  worth_currency: string;
}

const tableHead = {
  company_name: "Company Name",
  email: "Email",
  address: "Address",
  createdAt: "Date Created",
};

const Table = () => {
  const [companies, setCompanies] = useState<Users[]>([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const getData = async (criteria: string) => {
    if (criteria.length) {
      const { data } = await fetchHttpResponse(
        `https://company-lookup.herokuapp.com/api/v1/company/${criteria}?page=${page}`,
        {}
      );
      setCompanies(data.payload.companies);
      setTotalPages(Math.floor(data.payload.pages));
    } else {
      const { data } = await fetchHttpResponse(
        `https://company-lookup.herokuapp.com/api/v1/company?page=${page}`,
        {}
      );
      console.log(data);
      setCompanies(data.payload.companies);
      setTotalPages(Math.floor(data.payload.pages));
    }
  };
  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };

  const debouncedSearch = useRef(
    debounce(async (criteria: string) => setValue(criteria), 400)
  ).current;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    debouncedSearch(e.target.value);
  };

  useEffect(() => {
    getData(value);
  }, [value, page]);

  const tableRows = (rowData: any) => {
    const { company, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{company[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return companies.map((company, index) => tableRows({ company, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <>
      <div className="search">
        <input
          type="search"
          placeholder="Search for a user"
          value={value}
          onChange={handleChange}
        />
      </div>
      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </>
  );
};
export default Table;
