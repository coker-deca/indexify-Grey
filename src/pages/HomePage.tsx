import { debounce } from 'lodash';
import { FC, useEffect, useRef, useState } from 'react';

import { toCurrency } from '../components/lib/currency';
import { formatDate } from '../components/lib/date';
import { Template } from '../components/templates/GeneralTemplate';
import Modal from '../components/ui/Modal/Modal';
import { BodyFields, ModalBody, ModalHead } from '../components/ui/Modal/Style';
import Table from '../components/ui/Table/Table';
import { ModalProvider } from '../context/ModalContext';
import { useGetCompaniesQuery, useGetSomeCompaniesQuery } from '../utils/service';

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
    if (index) setCurrentCompany(companies[index]);
  };
  const tableHead: tableHeadType = {
    company_name: "Company Name",
    email: "Email",
    address: "Address",
    createdAt: "Date Created",
  };

  useEffect(() => {
    getData(value);
    console.log(companies);
  }, [value, page, currentCompany]);

  const {
    data: allCompanies,
    error: allCompaniesError,
    isLoading: allCompaniesLoading,
  } = useGetCompaniesQuery(page);

  const {
    data: someCompanies,
    error: someCompaniesError,
    isLoading: someCompaniesLoading,
  } = useGetSomeCompaniesQuery({ search: value, page });

  const getData = async (criteria: string) => {
    if (criteria.length) {
      someCompanies && setCompanies(someCompanies.payload.companies);
      someCompanies && setTotalPages(Math.floor(someCompanies.payload.pages));
    } else {
      allCompanies && setCompanies(allCompanies.payload.companies);
      allCompanies && setTotalPages(Math.floor(allCompanies.payload.pages));
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
