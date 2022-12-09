import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = '/api/users';

type PostUserType = {
    nik: string;
    email: string;
    password: string;
    passwordRepeat: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),

  endpoints: (build) => ({
    // getUserById: build.query<>
    postUser: build.mutation<PostUserType, PostUserType>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body
      })
    })
  })
});


export const {usePostUserMutation} = userApi;
