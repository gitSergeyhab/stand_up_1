import { ComedianTypeCC, ComedianTypeSC } from '../types/types';

export const adaptComediansClient = (comedian: ComedianTypeSC): ComedianTypeCC => (
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
    dateAdded: comedian['date_added'],
    numberOfRate: comedian['number_of_rate'],
    totalViews: comedian['total_views'],
    views: comedian['views'],
    comedianAvatar: comedian['comedian_avatar'],
  }
);
