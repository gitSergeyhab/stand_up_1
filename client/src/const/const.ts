export const enum ResourceName {
    Site = 'Site',
    Facebook = 'Facebook',
    YouTube = 'YouTube',
    WhatsApp = 'WhatsApp',
    Instagram = 'Instagram',
    VKontakte = 'VKontakte',
    Telegram = 'Telegram',
  }

export const enum ContentName {
  Users = 'users',
  Comedians = 'comedians',
  Events = 'events',
  Shows = 'shows',
  Places = 'places',
  Countries = 'countries',
  Pictures = 'pictures'
}
// export const enum ContentName {
//   users = 'users',
//   comedians = 'comedians',
//   events = 'events',
//   shows = 'shows',
//   places = 'places',
//   countries = 'countries',
//   pictures = 'pictures'
// }

export const DefaultPath = {
  UserAvatar: '/img/default/place.jpg',
  ComedianAvatar: '/img/default/comedian.jpg',
  ShowPoster: '/img/default/show.jpg',
  EventPicture: '/img/default/event.jpg',
  PlacePromoPicture: '/img/default/event.jpg',
  Any: '/img/default/any.jpg'
};

export const KeyNext = ['ArrowRight', 'Numpad6', 'ArrowDown'];
export const KeyPrev = ['ArrowLeft', 'Numpad4', 'ArrowUp'];

export const Color = {
  Gold: '#ff9b05',
  GoldD: '#ee7b27',
  BrownMain: '#300606'
};

export const EventStatus = {
  Planned: 'planned',
  Ended: 'ended',
  Canceled: 'canceled',
  All: 'all'
} as const;

export const FilterName = {
  Year: 'year',
  Days: 'days',
  EventStatus: 'status',
  CountryId: 'country_id',
  ComedianId: 'comedian_id',
  PlaceId: 'place_id',
  LanguageId: 'language_id',
  City: 'city',
  Rate: 'rate',
  Limit: 'limit',
  Offset: 'offset',
  Order: 'order',
  Direction: 'direction',
} as const;

export const enum Language {
  En = 'english',
  Native = 'native'
}
