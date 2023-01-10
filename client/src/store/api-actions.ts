import { ThunkActionResult } from '../types/types';
import { LoginUserDataSC } from '../types/user-types';
import { adaptLoginUserDataToClient } from '../utils/adapters/user-adapters';
import { storageUtils } from '../utils/storage-utils';
import { setUser } from './actions';
import axios, {AxiosError} from 'axios';
import { BASE_URL } from './axios-api';
import { toast } from 'react-toastify';


type LoginType = {email: string; password: string};
type ErrorData = {message: string; errors: string[]};
type RegistrationType = LoginType & {nik: string; passwordRepeat: string};


const serErrorMessage = (cb: (message: string[]) => void, err: Error | AxiosError) => {
  if(axios.isAxiosError(err)){
    const {errors} = err.response?.data as ErrorData;
    cb(errors);
    // toast.error(message);
  } else {
    cb(['Message.DefaultError']);
  }
};

export const loginAction = ({email, password} : LoginType, redirect: () => void, setAble: () => void, cbError: React.Dispatch<React.SetStateAction<string[]>>): ThunkActionResult =>
  async(dispatch, _getState, api) => {
    try {
      const {data} = await api.post<LoginUserDataSC>('/login', {email, password});
      const userData = adaptLoginUserDataToClient(data);

      dispatch(setUser(userData.user));
      storageUtils.setData(userData);
      setAble();
      redirect();
    } catch (err){
      // console.log(err);
      serErrorMessage(cbError, err as Error | AxiosError);
      setAble();
    }
  };

export const registrationAction = ({email, password, nik, passwordRepeat} : RegistrationType, redirect: () => void, setAble: () => void, cbError: React.Dispatch<React.SetStateAction<string[]>>): ThunkActionResult =>
  async(_dispatch, _getState, api) => {
    try {
      await api.post('/registration', {email, password, nik, passwordRepeat});
      redirect();
      setAble();
    } catch (err) {
      // console.log(err);
      serErrorMessage(cbError, err as Error | AxiosError);
      setAble();
    }
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.post('/logout');
      dispatch(setUser(null));
      storageUtils.removeData();
      // console.log('logout');

    } catch (err) {
      // console.log({err}, 'logout');
    }
  };


export const authAction = ():ThunkActionResult =>
  async(dispatch) => {
    try {
      const {data} = await axios.get<LoginUserDataSC>(`${BASE_URL}/refresh`, {withCredentials: true});
      const userData = adaptLoginUserDataToClient(data);
      storageUtils.setData(userData);
      dispatch(setUser(userData.user));
      toast.success('Auth Complete');
    } catch (err) {
      storageUtils.removeData();
      dispatch(setUser(null));
      toast.error('Auth Error');
      toast.error( JSON.stringify(err) );
      console.log(err);
    }
  };
