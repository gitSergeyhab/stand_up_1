import { OnePlaceTypeCC, OnePlaceTypeSC, PlaceTypeCC, PlaceTypeSC } from '../../types/place-types';

export const adaptEventsToClient = (place: PlaceTypeSC): PlaceTypeCC => (
  {
    countryId: place['country_id'],
    countryName: place['country_name'],
    countryNameEn: place['country_name_en'],
    placeCity: place['place_city'],
    placeCityEn: place['place_city_en'],
    placeId: place['place_id'],
    placeName: place['place_name'],
    placeNameEn: place['place_name_en'],
    placePromoPicture: place['place_promo_picture'],
    totalViews: place['total_views'],
    views: place['views'],
  }
);


export const adaptOneEventToClient = (place: OnePlaceTypeSC): OnePlaceTypeCC => (
  {
    countryId: place['country_id'],
    countryName: place['country_name'],
    countryNameEn: place['country_name_en'],
    datePlaceAdded: place['date_place_added'],
    pictures: place['pictures'],
    placeCity: place['place_city'],
    placeCityEn: place['place_city_en'],
    placeDateFounded: place['place_date_founded'],
    placeDescription: place['place_description'],
    placeId: place['place_id'],
    placeName: place['place_name'],
    placeNameEn: place['place_name_en'],
    placePromoPicture: place['place_promo_picture'],
    resources: place['resources'],
    totalViews: place['total_views'],
    userId: place['user_id'],
    userNik: place['user_nik'],
    views: place['views'],
  }
);
