import { ContentName } from '../const/const';
import { useGetComediansQuery, useGetEventsQuery, useGetShowsQuery } from '../store/sub-api';


export type ResourceType = {
  id: number;
  type: string;
  href: string;
}

export type PictureType = {
  id: string;
  src: string;
}

// export type GridCardType = {
//   type: ContentName;
//   extType: ContentName | null;
//   id: string;
//   name: string;
//   date: string | null;
//   status: string | null;
//   picture: string | null;
//   extName: string | null;
//   extId: string | null;
//   rate: number | null | undefined;
//   numberOfRate: number | null | undefined;
// };

export type GridCardType = {
  type: ContentName;
  id: string;
  name: string;
  nameEn: string | null;
  picture: string | null;
  extType: ContentName | null;
  extId: string | null;
  extName: string | null;
  extNameEn: string | null;


  date: string | null;
  rate: number | null | undefined;
  numberOfRate: number | null | undefined;
  status: string | null;
};


export type SimpleDict = {[key: string] : string};

export type SearchByIdType = {id: string; search: string};


export type UseGetQueryType = typeof useGetComediansQuery | typeof useGetEventsQuery | typeof useGetShowsQuery;


export const enum DataType {
  EventsOfComedianCC = 'EventsOfComedianCC',
  ShowsOfComedianCC= 'ShowsOfComedianCC'
}

export type Titles = {
  first: string;
  second: string;
}
export type TabsContent = {
  name: string;
  path: string;
}
