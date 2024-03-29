import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import { StatusCode } from '../const/errors';
import { LoginUserDataSC } from '../types/user-types';
import { adaptLoginUserDataToClient } from '../utils/adapters/user-adapters';
import { storageUtils } from '../utils/storage-utils';
import { setUser } from './actions';
import { store } from './store';

export const BASE_URL = 'http://localhost:5000/api/users';
const TIMEOUT = 5000;

export const getRefresh = async () => await axios.get<LoginUserDataSC>(`${BASE_URL}/refresh`, {timeout: TIMEOUT, withCredentials: true});

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

  api.interceptors.response.use(
    (value) => value,
    async (error: AxiosError) => {
      if (error.response?.status === StatusCode.NotAuthError) {
        try {
          const {data} = await getRefresh();
          const userData = adaptLoginUserDataToClient(data);
          storageUtils.setData(userData);
          store.dispatch(setUser(userData.user));
          return api.request(error.config);

        } catch {
          storageUtils.removeData();
          store.dispatch(setUser(null));
        }

      }
      throw error;
    }
  );


  return api;
};

export const api = createAxiosApi();

