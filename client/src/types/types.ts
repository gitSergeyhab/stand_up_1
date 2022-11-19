import { ContentName } from '../const/const';
import { useGetEventsOfComedianQuery, useGetShowsOfComedianQuery } from '../store/comedians-api';


export type ResourceType = {
  id: number;
  type: string;
  href: string;
}

export type PictureType = {
  id: number;
  src: string;
}

export type GridCardType = {
  type: ContentName;
  extType: ContentName | null;
  id: string;
  name: string;
  date: string | null;
  status: string | null;
  picture: string | null;
  extName: string | null;
  extId: string | null;

  comedianTitle: string;
  comedianTitleEn: string;
  eventTitle: string;
  eventTitleEn: string;
  placeTitle: string;
  placeTitleEn: string;
  showTitle: string;
};


export type SimpleDict = {[key: string] : string};

export type SearchByIdType = {id: string; search: string};


export type UseGetQueryType =
  typeof useGetEventsOfComedianQuery |
  typeof useGetShowsOfComedianQuery;


export const enum DataType {
  EventsOfComedianCC = 'EventsOfComedianCC',
  ShowsOfComedianCC= 'ShowsOfComedianCC'
}
