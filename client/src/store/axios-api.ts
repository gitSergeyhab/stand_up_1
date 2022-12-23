import axios, {AxiosRequestConfig} from 'axios';
import { TokenType } from '../types/types';
import { storageUtils } from '../utils/storage-utils';

const BASE_URL = 'http://localhost:5000/api/users';
const TIMEOUT = 5000;

export const createAxiosApi = () => {
  const api = axios.create({ baseURL: BASE_URL, timeout: TIMEOUT });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = storageUtils.getToken(TokenType.Access);
      if (config.headers) {
        config.headers.Authorization = token;
      }
      return config;
    }
  );

  return api;
};

export const api = createAxiosApi();
