import { EventTypeCC, EventTypeSC, OneEventTypeCC, OneEventTypeSC } from '../../types/event-types';

export const adaptEventsToClient = (event: EventTypeSC): EventTypeCC => (
  {
    countryId: event['country_id'],
    countryName: event['country_name'],
    countryNameEn: event['country_name_en'],
    eventDate: event['event_date'],
    eventDateAdded: event['event_date_added'],
    eventId: event['event_id'],
    eventName: event['event_name'],
    eventNameEn: event['event_name_en'],
    eventPicture: event['event_picture'],
    eventStatus: event['event_status'],
    placeCity: event['place_city'],
    placeCityEn: event['place_city_en'],
    totalViews: event['total_views'],
    upcoming: event['upcoming'],
    views: event['views'],
  }
);


export const adaptOneEventToClient = (event: OneEventTypeSC): OneEventTypeCC => (
  {
    countryId: event['country_id'],
    countryName: event['country_name'],
    countryNameEn: event['country_name_en'],
    eventComedians: event['event_comedians'],
    eventDate: event['event_date'],
    eventDateAdded: event['event_date_added'],
    eventDescription: event['event_description'],
    eventId: event['event_id'],
    eventName: event['event_name'],
    eventNameEn: event['event_name_en'],
    eventPicture: event['event_picture'],
    eventResources: event['event_resources'],
    eventShows: event['event_shows'],
    eventStatus: event['event_status'],
    placeId: event['place_id'],
    placeName: event['place_name'],
    placeNameEn: event['place_name_en'],
    placePicture: event['place_picture'],
    totalViews: event['total_views'],
    userAvatar: event['user_avatar'],
    userId: event['user_id'],
    userNik: event['user_nik'],
    views: event['views']
  }
);
