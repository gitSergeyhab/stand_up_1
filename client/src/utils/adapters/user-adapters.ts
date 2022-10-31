import { OneUserTypeCC, OneUserTypeSC } from '../../types/user-types';


export const adaptOneUserToClient = (user: OneUserTypeSC): OneUserTypeCC => (
  {
    avgRate: user['avg_rate'],
    comedianRatings: user['comedian_ratings'],
    countryId: user['country_id'],
    countryName: user['country_name'],
    countryNameEn: user['country_name_en'],
    latestViews: user['latest_views'],
    picturePath: user['picture_path'],
    resources: user['resources'],
    reviews: user['reviews'],
    showRatings: user['show_ratings'],
    userAvatar: user['user_avatar'],
    userCity: user['user_city'],
    userDateBirth: user['user_date_birth'],
    userDateRegistration: user['user_date_registration'],
    userDescription: user['user_description'],
    userEmail: user['user_email'],
    userFirstName: user['user_first_name'],
    userId: user['user_id'],
    userLastName: user['user_last_name'],
    userNik: user['user_nik'],
  }
);
