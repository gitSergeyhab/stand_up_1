import { OneUserTypeCC, OneUserTypeSC } from '../../types/user-types';


export const adaptOneUserToClient = (data: OneUserTypeSC): OneUserTypeCC => (
  {
    avgRate: data['avg_rate'],
    comedianRatings: data['comedian_ratings'],
    countryId: data['country_id'],
    countryName: data['country_name'],
    countryNameEn: data['country_name_en'],
    latestViews: data['latest_views'],
    picturePath: data['picture_path'],
    resources: data['resources'],
    reviews: data['reviews'],
    showRatings: data['show_ratings'],
    userAvatar: data['user_avatar'],
    userCity: data['user_city'],
    userDateBirth: data['user_date_birth'],
    userDateRegistration: data['user_date_registration'],
    userDescription: data['user_description'],
    userEmail: data['user_email'],
    userFirstName: data['user_first_name'],
    userId: data['user_id'],
    userLastName: data['user_last_name'],
    userNik: data['user_nik'],
  }
);
