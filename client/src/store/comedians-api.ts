import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { OneComedianTypeCC, SubComedianCC, SubComedianSC } from '../types/comedian-types';
import { adaptOneComedianToClient, adaptComediansToClient } from '../utils/adapters/comedian-adapters';


const BASE_URL = 'http://localhost:5000/api/comedians';

type DateAllComediansSC = {comedians: SubComedianSC[]; count: string}
type DateAllComediansCC = {comedians: SubComedianCC[]; count: string}


export const comediansApi = createApi({
  reducerPath: 'comediansApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),

  endpoints: (build) => ({
    getAllComedians: build.query<DateAllComediansCC, string>({
      query: (queryParams) => `/${queryParams}`,
      transformResponse: ({comedians, count}: DateAllComediansSC) => ({comedians: comedians.map(adaptComediansToClient), count})
    }),
    getComedianById: build.query<OneComedianTypeCC, string>({
      query: (id) => `/${id}`,
      transformResponse:  adaptOneComedianToClient
    }),
  })
});


export const { useGetAllComediansQuery, useGetComedianByIdQuery} = comediansApi;
