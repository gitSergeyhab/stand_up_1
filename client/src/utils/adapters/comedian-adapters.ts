import { ComedianTypeCC, ComedianTypeSC, OneComedianTypeCC, OneComedianTypeSC } from '../../types/comedian-types';

export const adaptComediansToClient = (data: ComedianTypeSC): ComedianTypeCC => (
  {
    avgRate: data['avg_rate'],
    comedianCity: data['comedian_city'],
    comedianFirstName: data['comedian_first_name'],
    comedianFirstNameEn: data['comedian_first_name_en'],
    comedianId: data['comedian_id'],
    comedianLastName: data['comedian_last_name'],
    comedianLastNameEn: data['comedian_last_name_en'],
    countryId: data['country_id'],
    countryName: data['country_name'],
    countryNameEn: data['country_name_en'],
    comedianDateAdded: data['comedian_date_added'],
    numberOfRate: data['number_of_rate'],
    totalViews: data['total_views'],
    views: data['views'],
    comedianAvatar: data['comedian_avatar'],
  }
);


export const adaptOneComedianToClient = (data: OneComedianTypeSC): OneComedianTypeCC => (
  {
    avgRate: data['avg_rate'],
    comedianCity: data['comedian_city'],
    comedianCityEn: data['comedian_city_en'],
    comedianFirstName: data['comedian_first_name'],
    comedianFirstNameEn: data['comedian_first_name_en'],
    comedianId: data['comedian_id'],
    comedianLastName: data['comedian_last_name'],
    comedianLastNameEn: data['comedian_last_name_en'],
    countryId: data['country_id'],
    countryName: data['country_name'],
    countryNameEn: data['country_name_en'],
    comedianDateAdded: data['comedian_date_added'],
    numberOfRate: data['number_of_rate'],
    totalViews: data['total_views'],
    views: data['views'],
    comedianAvatar: data['comedian_avatar'],
    userNik: data['user_nik'],
    userId: data['user_id'],
    resources: data['resources'],
    pictures: data['pictures'],
    comedianDescription: data['comedian_description'],
    comedianDateBirth: data['comedian_date_birth'],
    comedianDateDeath: data['comedian_date_death'],
  }
);
