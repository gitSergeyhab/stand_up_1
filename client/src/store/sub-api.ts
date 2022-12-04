import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SubComedianCC, SubComedianSC } from '../types/comedian-types';
import { SubEventCC, SubEventSC } from '../types/event-types';
import { PictureCC, PictureSC } from '../types/pic-types';
import { SubShowCC, SubShowSC } from '../types/show-types';
import { adaptComediansToClient } from '../utils/adapters/comedian-adapters';
import { adaptEventsToClient } from '../utils/adapters/event-adapters';
import { adaptPictureToClient } from '../utils/adapters/pic-adapter';
import { adaptShowsToClient } from '../utils/adapters/show-adapters';

const SUB_API_URL = 'http://localhost:5000/api/sub';


type SupApiType<Sub> = {
  data: Sub[];
  titles: {en: string; native: string};
  count: string;
}


export const subApi = createApi({
  reducerPath: 'subApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SUB_API_URL
  }),

  endpoints: (build) => ({
    getEvents: build.query<SupApiType<SubEventCC>, string>({
      query: (queryParams) => queryParams,
      transformResponse:  ({data, count, titles}: SupApiType<SubEventSC>) => ({ data: data.map(adaptEventsToClient), count, titles })
    }),
    getShows: build.query<SupApiType<SubShowCC>, string>({
      query: (queryParams) => queryParams,
      transformResponse:  ({data, count, titles}: SupApiType<SubShowSC>) => ({ data: data.map(adaptShowsToClient), count, titles })
    }),
    getComedians: build.query<SupApiType<SubComedianCC>, string>({
      query: (queryParams) => queryParams,
      transformResponse:  ({data, count, titles}: SupApiType<SubComedianSC>) => ({ data: data.map(adaptComediansToClient), count, titles })
    }),
    getPictures: build.query<SupApiType<PictureCC>, string>({
      query: (queryParams) => queryParams,
      transformResponse:  ({data, count, titles}: SupApiType<PictureSC>) => ({ data: data.map(adaptPictureToClient), count, titles })
    })
  })

});


export const { useGetEventsQuery, useGetShowsQuery, useGetComediansQuery, useGetPicturesQuery } = subApi;
