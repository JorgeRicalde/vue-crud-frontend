import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { StatusCode, StatusDefault } from './Swal';

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config;
};

const onRequestError = ({ response }: AxiosError): null => {
  if (response) {
    const { status, data } = response;
    (StatusCode[status] || StatusDefault)(data);
  } else {
    StatusDefault();
  }
  return null;
};

const onResponse = ({ data }: AxiosResponse): any => {
  return data;
};

const onResponseError = ({ response }: AxiosError): null => {
  if (response) {
    const { status, data } = response;
    (StatusCode[status] || StatusDefault)(data);
  } else {
    StatusDefault();
  }
  return null;
};

export const AxiosApp = axios.create({
  baseURL: 'https://localhost:44311/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    accept: 'application/json',
  },
});

AxiosApp.interceptors.request.use(onRequest, onRequestError);
AxiosApp.interceptors.response.use(onResponse, onResponseError);
