import { debounce } from 'lodash';
import { FC, useEffect, useRef, useState } from 'react';

import { toCurrency } from '../components/lib/currency';
import { formatDate } from '../components/lib/date';
import { Template } from '../components/templates/GeneralTemplate';
import Modal from '../components/ui/Modal/Modal';
import { BodyFields, ModalBody, ModalHead } from '../components/ui/Modal/Style';
import Table from '../components/ui/Table/Table';
import { ModalProvider } from '../context/ModalContext';
import { fetchHttpResponse } from '../utils/api';

export interface Users {
  _id: string;
  company_name: string;
  email: string;
  address: string;
  createdAt: string;
  country: string;
  number_of_staff: number;
  net_worth: number;
  worth_currency: string;
}

export type KeyTypes = keyof tableHeadType;

export type tableHeadType = {
  company_name: string;
  email: string;
  address: string;
  createdAt: string;
};

export const HomePage: FC = () => {
  const [companies, setCompanies] = useState<Users[]>([]);
  const [currentCompany, setCurrentCompany] = useState<Users>();
  const [totalPages, setTotalPages] = useState(10);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const handleToggleModal = (state: boolean, index?: number) => {
    setIsModalOpen(state);
    console.log(index);
    if (index) setCurrentCompany(companies[index]);
  };
  currentCompany && console.log(currentCompany);
  const tableHead: tableHeadType = {
    company_name: "Company Name",
    email: "Email",
    address: "Address",
    createdAt: "Date Created",
  };

  useEffect(() => {
    getData(value);
  }, [value, page, currentCompany]);

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
    <ModalProvider>
      <Template value={value} handleChange={handleChange}>
        <Table
          page={page}
          tableRowData={companies}
          tableHead={tableHead}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          isModalOpen={isModalOpen}
          toggleModal={handleToggleModal}
        />
        {isModalOpen && currentCompany && (
          <Modal onClose={() => handleToggleModal(false)}>
            <ModalHead>{currentCompany.company_name}</ModalHead>
            <ModalBody>
              <BodyFields>
                <span className="key">Email:</span>
                <span className="value">{currentCompany.email}</span>
              </BodyFields>
              <BodyFields>
                <span className="key">Address:</span>
                <span className="value">{currentCompany.address}</span>
              </BodyFields>
              <BodyFields>
                <span className="key">Date created:</span>
                <span className="value">
                  {formatDate(currentCompany.createdAt)}
                </span>
              </BodyFields>
              <BodyFields>
                <span className="key">No. of staff:</span>
                <span className="value">{currentCompany.number_of_staff}</span>
              </BodyFields>
              <BodyFields>
                <span className="key">Country:</span>
                <span className="value">{currentCompany.country}</span>
              </BodyFields>
              <BodyFields>
                <span className="key">Net worth:</span>
                <span className="value">
                  {toCurrency(
                    currentCompany.net_worth,
                    currentCompany.worth_currency
                  )}
                </span>
              </BodyFields>
            </ModalBody>
          </Modal>
        )}
      </Template>
    </ModalProvider>
  );
};
