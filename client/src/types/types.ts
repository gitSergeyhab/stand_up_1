import { ContentName } from '../const';

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
  id: string;
  name: string;
  date: string;
  status: string | null;
  picture: string | null;
  titleName: string;
  extName: string | null;
  extId: string | null;
}
