import axios, {AxiosRequestConfig} from 'axios';
import { storageUtils } from '../utils/storage-utils';

export const BASE_URL = 'http://localhost:5000/api/users';
const TIMEOUT = 5000;

export const createAxiosApi = () => {
  const api = axios.create({ baseURL: BASE_URL, timeout: TIMEOUT, withCredentials: true });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = storageUtils.getToken();
      if (config.headers) {
        config.headers.Authorization = token;
      }
      return config;
    }
  );

  // axios.interceptors.response.use(
  //   (value) => value,
  //   (error) => {
  //     if(error.status === 401) {

  //     }
  //   }
  // )

  return api;
};

export const api = createAxiosApi();
