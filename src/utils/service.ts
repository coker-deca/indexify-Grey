import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';

import { Users } from '../pages/HomePage';

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://company-lookup.herokuapp.com/api/v1',
    prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<{ token: string }, {"email": string}>({
    query: (request) => ({url:"/auth/login", method: "POST", body: request})
  }),
    getCompanies: builder.query<{payload: {companies: Users[], pages: number}}, number>({
      query: (page) => ({ url: `/company?page=${page}`, method: 'get' }),
  }),
    getSomeCompanies: builder.query<{payload: {companies: Users[], pages: number}}, { search: string, page: number}>({
      query: ({search, page}) => ({ url: `/company/${search}?page=${page}`, method: 'get' }),
    }),
  }),
});

export const { useGetCompaniesQuery, useGetSomeCompaniesQuery, useSignUpMutation} = companyApi;
