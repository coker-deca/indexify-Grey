import { createApi } from '@reduxjs/toolkit/query/react';

import { Users } from '../pages/HomePage';
import axiosBaseQuery from './api';

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://company-lookup.herokuapp.com/api/v1',
  }),
  endpoints: (build) => ({
    getCompanies: build.query<Users, number>({
      query: (page) => ({ url: `/company?page=${page}`, method: 'get' }),
  }),
    getSomeCompanies: build.query<Users, { search: string, page: number}>({
      query: ({search, page}) => ({ url: `/company/${search}?page=${page}`, method: 'get' }),
  }),
  }),
});

export const { useGetCompaniesQuery, useGetSomeCompaniesQuery} = companyApi;
