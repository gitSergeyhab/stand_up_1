import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {OneComedianTypeCC } from '../types/comedian-types';
import { EventsOfComedianCC, EventsOfComedianSC } from '../types/event-types';
import { EventComedianQueryType } from '../types/types';
import { adaptOneComedianToClient } from '../utils/adapters/comedian-adapters';
import { adaptEventsOfComedianToClient } from '../utils/adapters/event-adapters';

const BASE_URL = 'http://localhost:5000/api/comedians';


export const comediansApi = createApi({
  reducerPath: 'comediansApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),

  endpoints: (build) => ({
    getComedianById: build.query<OneComedianTypeCC, string>({
      query: (id) => `/${id}`,
      transformResponse:  adaptOneComedianToClient
    }),
    getEventsOfComedian:build.query<EventsOfComedianCC[], EventComedianQueryType>({
      query: (queryParams) => `/${queryParams.id}/events${queryParams.search}`,
      transformResponse:  (events: EventsOfComedianSC[]) => events.map(adaptEventsOfComedianToClient)
    })
  })
});


export const { useGetComedianByIdQuery, useGetEventsOfComedianQuery } = comediansApi;
