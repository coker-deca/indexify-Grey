import { debounce } from 'lodash';
import { FC, useEffect, useRef, useState } from 'react';

import { Template } from '../components/templates/GeneralTemplate';
import Table from '../components/ui/Table/Table';
import { fetchHttpResponse } from '../utils/api';

export interface Users {
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

export type tableHeadType = {
  company_name: string;
  email: string;
  address: string;
  createdAt: string;
};

export const HomePage: FC = () => {
  const [companies, setCompanies] = useState<Users[]>([]);
  const [totalPages, setTotalPages] = useState(10);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useRef(
    debounce(async (criteria: string) => setValue(criteria), 400)
  ).current;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    debouncedSearch(e.target.value);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((nextPage) => nextPage + 1);
  };

  const tableHead: tableHeadType = {
    company_name: "Company Name",
    email: "Email",
    address: "Address",
    createdAt: "Date Created",
  };

  useEffect(() => {
    getData(value);
  }, [value, page]);

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

  return (
    <Template value={value} handleChange={handleChange}>
      <Table
        page={page}
        tableRowData={companies}
        tableHead={tableHead}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </Template>
  );
};
