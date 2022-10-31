import { ResourceType } from './types';

export type ReviewType = {
  comedianFirstName: string | null;
  comedianFirstNameEn: string | null;
  comedianLastName: string | null;
  comedianLastNameEn: string | null;
  reviewDate: string;
  reviewId: string | number;
  showId: string | number;
  showName: string;
  text: string;
  title: string;
  }

export type ShowRatingType = {
  comedianFirstName: string;
  comedianFirstNameEn: string | null;
  comedianLastName: string | null;
  comedianLastNameEn: string | null;
  dateRate: string;
  showId: string;
  showName: string;
  showRate: number;
};

export type ComedianRatingType = {
  comedianFirstName: string;
  comedianFirstNameEn: string | null;
  comedianId: string | number;
  comedianLastName: string | null;
  comedianLastNameEn: string | null;
  comedianRate: number;
  dateRate: string;
};
//date-id -> data-id
export type ViewType = {
  dataId: string | number;
  id: string | number;
  picture: string | null;
  type: string | null;
  viewDate: string;
}

export type OneUserTypeSC = {
  avg_rate: number | null;
  comedian_ratings: ComedianRatingType[] | null;
  country_id: number | null;
  country_name: string | null;
  country_name_en: string | null;
  latest_views: ViewType[] | null;
  picture_path: string | null;
  resources: ResourceType[] | null;
  reviews: ReviewType[] | null;
  show_ratings: ShowRatingType[] | null;
  user_avatar: string | null;
  user_city: string | null;
  user_date_birth: string | null;
  user_date_registration: string;
  user_description: string | null;
  user_email: string;
  user_first_name: string | null;
  user_id: string;
  user_last_name: string | null;
  user_nik: string;
  // user_password: string;
};

export type OneUserTypeCC = {
  avgRate: number | null;
  comedianRatings: ComedianRatingType[] | null;
  countryId: number | null;
  countryName: string | null;
  countryNameEn: string | null;
  latestViews: ViewType[] | null;
  picturePath: string | null;
  resources: ResourceType[] | null;
  reviews: ReviewType[] | null;
  showRatings: ShowRatingType[] | null;
  userAvatar: string | null;
  userCity: string | null;
  userDateBirth: string | null;
  userDateRegistration: string;
  userDescription: string | null;
  userEmail: string;
  userFirstName: string | null;
  userId: string;
  userLastName: string | null;
  userNik: string;
};
