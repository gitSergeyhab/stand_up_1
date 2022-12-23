import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthUserTypeCC, AuthUserTypeSC, LoginUserDataCC } from '../types/user-types';
import { adaptAuthUserToClient, adaptLoginUserDataToClient } from '../utils/adapters/user-adapters';

const BASE_URL = 'http://localhost:5000/api/users';

export type LoginSendType = {
    email: string;
    password: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  headers: {'Content-type': 'application/json; charset=UTF-8',}
});

type RegSendType = LoginSendType & { nik: string; passwordRepeat: string}


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,

  endpoints: (build) => ({
    authUser: build.query<AuthUserTypeCC | null, null>({
      query: () => '/auth',
      transformResponse: (data: {user: AuthUserTypeSC | null}) => data.user ? adaptAuthUserToClient(data.user) : null,
    }),

    loginUser: build.mutation<LoginUserDataCC, LoginSendType>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body
      }),
      transformResponse: adaptLoginUserDataToClient
    }),
    logoutUser: build.mutation<null, null>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      })
    }),
    registerUser: build.mutation<RegSendType, RegSendType>({
      query: (body) => ({
        url: '/registration',
        method: 'POST',
        body
      })
    })
  })
});


export const {useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation, useAuthUserQuery} = userApi;
