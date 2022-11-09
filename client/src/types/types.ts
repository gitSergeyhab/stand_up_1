import { ContentName } from '../const/const';

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
  extType: ContentName;
  id: string;
  name: string;
  date: string;
  status: string | null;
  picture: string | null;
  extName: string | null;
  extId: string | null;
}

export type SimpleDict = {[key: string] : string}
