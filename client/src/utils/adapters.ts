import { ComedianTypeCC, ComedianTypeSC, OneComedianTypeCC, OneComedianTypeSC } from '../types/types';

export const adaptComediansToClient = (comedian: ComedianTypeSC): ComedianTypeCC => (
  {
    avgRate: comedian['avg_rate'],
    comedianCity: comedian['comedian_city'],
    comedianFirstName:  comedian['comedian_first_name'],
    comedianFirstNameEn: comedian['comedian_first_name_en'],
    comedianId:  comedian['comedian_id'],
    comedianLastName:  comedian['comedian_last_name'],
    comedianLastNameEn:   comedian['comedian_last_name_en'],
    countryId:  comedian['country_id'],
    countryName:  comedian['country_name'],
    countryNameEn: comedian['country_name_en'],
    comedianDateAdded: comedian['comedian_date_added'],
    numberOfRate: comedian['number_of_rate'],
    totalViews: comedian['total_views'],
    views: comedian['views'],
    comedianAvatar: comedian['comedian_avatar'],
  }
);


export const adaptOneComedianToClient = (comedian: OneComedianTypeSC): OneComedianTypeCC => (
  {
    avgRate: comedian['avg_rate'],
    comedianCity: comedian['comedian_city'],
    comedianCityEn: comedian['comedian_city_en'],
    comedianFirstName: comedian['comedian_first_name'],
    comedianFirstNameEn: comedian['comedian_first_name_en'],
    comedianId: comedian['comedian_id'],
    comedianLastName: comedian['comedian_last_name'],
    comedianLastNameEn: comedian['comedian_last_name_en'],
    countryId: comedian['country_id'],
    countryName: comedian['country_name'],
    countryNameEn: comedian['country_name_en'],
    comedianDateAdded: comedian['comedian_date_added'],
    numberOfRate: comedian['number_of_rate'],
    totalViews: comedian['total_views'],
    views: comedian['views'],
    comedianAvatar: comedian['comedian_avatar'],
    userNik: comedian['user_nik'],
    userId: comedian['user_id'],
    resources: comedian.resources,
    picturePaths: comedian['picture_paths'],
    comedianDescription: comedian['comedian_description'],
    comedianDateBirth: comedian['comedian_date_birth'],
    comedianDateDeath: comedian['comedian_date_death'],
  }
);
