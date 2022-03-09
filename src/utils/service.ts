import { createHttpRequest, fetchHttpResponse } from './api';

const baseUrl = "https://company-lookup.herokuapp.com/api/v1"

const getAll = (page:number) => {
  return fetchHttpResponse(`${baseUrl}/company?page=${page}`, {});
};
const getSome = (criteria: string, page: number) => {
  return fetchHttpResponse(`${baseUrl}/company/${criteria}?page=${page}`, {});
};
const signUp = (body: any) => {
    const url = `${baseUrl}/auth/login`;
    const headers = { "Content-Type": "application/json" };
  return createHttpRequest(url, body, { headers });
};

const ApiService = {
    getAll,
    getSome,
    signUp,
}
export default ApiService;