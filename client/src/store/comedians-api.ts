import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {OneComedianTypeCC } from '../types/comedian-types';
import { EventsOfComedianCC, EventsOfComedianSC } from '../types/event-types';
import { ShowsOfComedianCC, ShowsOfComedianSC } from '../types/show-types';
import { SearchByIdType } from '../types/types';
import { adaptOneComedianToClient } from '../utils/adapters/comedian-adapters';
import { adaptEventsOfComedianToClient } from '../utils/adapters/event-adapters';
import { adaptShowsOfComedianToClient } from '../utils/adapters/show-adapters';

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
    getEventsOfComedian: build.query<EventsOfComedianCC[], SearchByIdType>({
      query: (queryParams) => `/${queryParams.id}/events${queryParams.search}`,
      transformResponse:  (events: EventsOfComedianSC[]) => events.map(adaptEventsOfComedianToClient)
    }),
    getShowsOfComedian: build.query<ShowsOfComedianCC[], SearchByIdType>({
      query: (queryParams) => `/${queryParams.id}/shows${queryParams.search}`,
      transformResponse:  (events: ShowsOfComedianSC[]) => events.map(adaptShowsOfComedianToClient)
    })
  })
});


export const { useGetComedianByIdQuery, useGetEventsOfComedianQuery, useGetShowsOfComedianQuery } = comediansApi;
