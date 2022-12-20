import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthUserTypeCC, AuthUserTypeSC } from '../types/user-types';
import { adaptAuthUserToClient } from '../utils/adapters/user-adapters';

const BASE_URL = 'http://localhost:5000/api/users';

type LoginUserType = {
    email: string;
    password: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  headers: {'Content-type': 'application/json; charset=UTF-8',}
});

type RegUserType = LoginUserType & { nik: string; passwordRepeat: string}


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,

  endpoints: (build) => ({
    authUser: build.query<AuthUserTypeCC | null, null>({
      query: () => '/auth',
      transformResponse: (data: {user: AuthUserTypeSC | null}) => data.user ? adaptAuthUserToClient(data.user) : null,
    }),

    loginUser: build.mutation<LoginUserType, LoginUserType>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body
      })
    }),
    logoutUser: build.mutation<null, null>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      })
    }),
    registerUser: build.mutation<RegUserType, RegUserType>({
      query: (body) => ({
        url: '/registration',
        method: 'POST',
        body
      })
    })
  })
});


export const {useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation, useAuthUserQuery} = userApi;
