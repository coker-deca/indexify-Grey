import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import {setupInterceptorsTo} from "./interceptor";

setupInterceptorsTo(axios);

const fetchHttpResponse = async (url: string, headers: AxiosRequestConfig): Promise<AxiosResponse> => {
    try {
        const response = await axios.get(url, headers);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createHttpRequest = async <T>(url: string, body: T, headers: AxiosRequestConfig): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(url, body, headers);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export { fetchHttpResponse, createHttpRequest };
