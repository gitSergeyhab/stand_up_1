import { AnyAction } from '@reduxjs/toolkit';
import { ThunkActionResult } from '../types/types';
import { LoginUserDataSC } from '../types/user-types';
import { adaptLoginUserDataToClient } from '../utils/adapters/user-adapters';
import { storageUtils } from '../utils/storage-utils';
import { setUser } from './actions';
import axios, {AxiosError} from 'axios';


type LoginType = {email: string; password: string}
type ErrorData = {message: string; errors: string[]};


const serErrorMessage = (cb: (message: string[]) => void, err: Error | AxiosError) => {
  if(axios.isAxiosError(err)){
    const {errors} = err.response?.data as ErrorData;
    cb(errors);
    // toast.error(message);
  } else {
    cb(['Message.DefaultError']);
  }
};

export const postLogin = ({email, password} : LoginType, redirect: () => void, cbError: React.Dispatch<React.SetStateAction<string[]>>): ThunkActionResult =>
  async(dispatch, _getState, api) => {
    try {
      const {data} = await api.post<LoginUserDataSC>('/login', {email, password});
      const userData = adaptLoginUserDataToClient(data);

      dispatch(setUser(userData.user));
      storageUtils.setData(userData);
      redirect();
    } catch (err){
      console.log(err);
      serErrorMessage(cbError, err as Error | AxiosError);
    }
  };

export const loginAction = ( postLogin as unknown ) as ({email, password} : LoginType, redirect: () => void, cbError: React.Dispatch<React.SetStateAction<string[]>>) => AnyAction;
