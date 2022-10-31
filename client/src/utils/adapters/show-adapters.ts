import { OneShowTypeCC, OneShowTypeSC, ShowTypeCC, ShowTypeSC } from '../../types/show-types';

export const adaptShowsToClient = (show: ShowTypeSC): ShowTypeCC => (
  {
    avgRate :show['avg_rate'],
    comedianFirstName :show['comedian_first_name'],
    comedianFirstNameEn :show['comedian_first_name_en'],
    comedianId :show['comedian_id'],
    comedianLastName :show['comedian_last_name'],
    comedianLastNameEn :show['comedian_last_name_en'],
    countryId :show['country_id'],
    countryName :show['country_name'],
    countryNameEn :show['country_name_en'],
    dateAdded :show['date_added'],
    languageId :show['language_id'],
    languageName :show['language_name'],
    languageNameEn :show['language_name_en'],
    numberOfRate :show['number_of_rate'],
    placeId :show['place_id'],
    placeName :show['place_name'],
    placeNameEn :show['place_name_en'],
    showDate :show['show_date'],
    showId :show['show_id'],
    showName :show['show_name'],
    showPoster :show['show_poster'],
    totalViews :show['total_views'],
    views :show['views'],
  }
);


export const adaptOneShowToClient = (show: OneShowTypeSC): OneShowTypeCC => (
  {
    avgRate :show['avg_rate'],
    comedianAvatar :show['comedian_avatar'],
    comedianFirstName :show['comedian_first_name'],
    comedianFirstNameEn :show['comedian_first_name_en'],
    comedianId :show['comedian_id'],
    comedianLastName :show['comedian_last_name'],
    comedianLastNameEn :show['comedian_last_name_en'],
    countryId :show['country_id'],
    countryName :show['country_name'],
    countryNameEn :show['country_name_en'],
    pictures :show['pictures'],
    languageId :show['language_id'],
    languageName :show['language_name'],
    languageNameEn :show['language_name_en'],
    numberOfRate :show['number_of_rate'],
    placeId :show['place_id'],
    placeName :show['place_name'],
    placeNameEn :show['place_name_en'],
    showDate :show['show_date'],
    showDateAdded :show['show_date_added'],
    showDescription :show['show_description'],
    showId :show['show_id'],
    showName :show['show_name'],
    showPoster :show['show_poster'],
    totalViews :show['total_views'],
    userShowAddedId :show['user_show_added_id'],
    userDhowAddedNik :show['user_show_added_nik'],
    videos :show['videos'],
    views :show['views'],
  }
);
