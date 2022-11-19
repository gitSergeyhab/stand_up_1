import { ContentName } from '../../const/const';
import { EventsOfComedianCC } from '../../types/event-types';
import { ShowsOfComedianCC } from '../../types/show-types';
import { GridCardType } from '../../types/types';

export type AdapterCardType<D> = (data: D) => GridCardType;


// type AnyDate = EventsOfComedianCC | ShowsOfComedianCC;

export const adaptEventsToCard: AdapterCardType<EventsOfComedianCC> = (data) => ({

  date: data.eventDate || '',
  extId: data.placeId || '',
  extName: data.placeName,
  id: data.eventId || '',
  name: data.eventName || '',
  picture: data.eventPromoPicture || '',
  status: data.eventStatus || '',
  type: ContentName.Events,
  extType: ContentName.Places,

  comedianTitle: `${data.comedianFirstName || ''} ${data.comedianLastName || ''}`,
  comedianTitleEn: `${data.comedianFirstNameEn || ''} ${data.comedianLastNameEn || ''}`,
  eventTitle: data.eventName || '',
  eventTitleEn: data.eventNameEn || '',
  placeTitle: data.placeName || '',
  placeTitleEn: data.placeNameEn || '',
  showTitle: data.showName || ''

});

export const adaptShowsToCard: AdapterCardType<ShowsOfComedianCC> = (data) => ({
  date: data.showDateAdded || '',
  extId: data.comedianId || '',
  extName: `${data.comedianFirstName || ''} ${data.comedianLastName || ''}`,
  id: data.showId || '',
  name: data.showName || '',
  picture: data.showPoster || '',
  status: null,
  type: ContentName.Shows,
  extType: ContentName.Comedians,

  comedianTitle: `${data.comedianFirstName || ''} ${data.comedianLastName || ''}`,
  comedianTitleEn: `${data.comedianFirstNameEn || ''} ${data.comedianLastNameEn || ''}`,
  eventTitle: data.eventName || '',
  eventTitleEn: data.eventNameEn || '',
  placeTitle: data.placeName || '',
  placeTitleEn: data.placeNameEn || '',
  showTitle: data.showName || '',

});


