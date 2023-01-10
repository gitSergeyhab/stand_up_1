import { LoginUserDataCC } from '../types/user-types';

const STORAGE_KEY = 'su-auth-user-token';


class StorageUtils {
  _getData() {
    const dataString = localStorage.getItem(STORAGE_KEY);
    const data = dataString ? JSON.parse(dataString) as LoginUserDataCC : null;
    return data;
  }

  // setData(data: LoginUserDataCC) {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  // }

  setData(data: LoginUserDataCC) {
    const {accessToken, user} = data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(({accessToken, user})));
  }

  getUser() {
    const data = this._getData();
    const user = data ? data.user : null;
    return user;
  }

  // getToken(tokenType: TokenType, bearer = true) {
  //   const data = this._getData();
  //   if (!data) {
  //     return '' ;
  //   }
  //   const token = tokenType === TokenType.Access ? data.accessToken : data.refreshToken;
  //   return bearer ? `Bearer ${token}` : token;
  // }

  getToken(bearer = true) {
    const token = this._getData()?.accessToken;
    if (!token) {
      return '';
    }
    return bearer ? `Bearer ${token}` : token;
  }

  removeData() {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export const storageUtils = new StorageUtils();
