import { OneShowTypeCC, OneShowTypeSC, SubShowCC, SubShowSC } from '../../types/show-types';

// export const adaptShowsToClient = (data: ShowTypeSC): ShowTypeCC => (
//   {
//     avgRate: data['avg_rate'],
//     comedianFirstName: data['comedian_first_name'],
//     comedianFirstNameEn: data['comedian_first_name_en'],
//     comedianId: data['comedian_id'],
//     comedianLastName: data['comedian_last_name'],
//     comedianLastNameEn: data['comedian_last_name_en'],
//     countryId: data['country_id'],
//     countryName: data['country_name'],
//     countryNameEn: data['country_name_en'],
//     dateAdded: data['date_added'],
//     languageId: data['language_id'],
//     languageName: data['language_name'],
//     languageNameEn: data['language_name_en'],
//     numberOfRate: data['number_of_rate'],
//     placeId: data['place_id'],
//     placeName: data['place_name'],
//     placeNameEn: data['place_name_en'],
//     showDate: data['show_date'],
//     showId: data['show_id'],
//     showName: data['show_name'],
//     showPoster: data['show_poster'],
//     totalViews: data['total_views'],
//     views: data['views'],
//   }
// );


export const adaptOneShowToClient = (data: OneShowTypeSC): OneShowTypeCC => (
  {
    avgRate: data['avg_rate'],
    comedianAvatar: data['comedian_avatar'],
    comedianFirstName: data['comedian_first_name'],
    comedianFirstNameEn: data['comedian_first_name_en'],
    comedianId: data['comedian_id'],
    comedianLastName: data['comedian_last_name'],
    comedianLastNameEn: data['comedian_last_name_en'],
    countryId: data['country_id'],
    countryName: data['country_name'],
    countryNameEn: data['country_name_en'],
    pictures: data['pictures'],
    languageId: data['language_id'],
    languageName: data['language_name'],
    languageNameEn: data['language_name_en'],
    numberOfRate: data['number_of_rate'],
    placeId: data['place_id'],
    placeName: data['place_name'],
    placeNameEn: data['place_name_en'],
    showDate: data['show_date'],
    showDateAdded: data['show_date_added'],
    showDescription: data['show_description'],
    showId: data['show_id'],
    showName: data['show_name'],
    showPoster: data['show_poster'],
    totalViews: data['total_views'],
    userShowAddedId: data['user_show_added_id'],
    userDhowAddedNik: data['user_show_added_nik'],
    videos: data['videos'],
    views: data['views'],
  }
);


export const adaptShowsToClient = (data: SubShowSC): SubShowCC => (
  {
    showId: data['show_id'],
    showName: data['show_name'],
    showDateAdded: data['show_date_added'],
    showPoster: data['show_poster'],

    comedianId: data['comedian_id'],
    comedianName: data['comedian_name'],
    comedianNameEn: data['comedian_name_en'],
    avgRate: data['avg_rate'],
    numberOfRate: data['number_of_rate']


  }
);
