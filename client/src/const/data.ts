import { ContentName } from './const';


export const TabData = {
  [ContentName.Comedians]: [
    {name: 'Информация', path: 'info' },
    {name: 'Выступления', path: 'shows' },
    {name: 'События', path: 'events' },
    {name: 'Фото', path: 'photos' },
    {name: 'Оценки', path: 'ratings' },
  ],
  [ContentName.Events]: [
    {name: 'Информация', path: 'info' },
    {name: 'Выступления', path: 'shows' },
    {name: 'Комики', path: 'comedians' },
    // {name: 'Видео', path: 'movies' },
    {name: 'Оценки', path: 'ratings' },
  ],
  [ContentName.Places]: [
    {name: 'Информация', path: 'info' },
    {name: 'Выступления', path: 'shows' },
    {name: 'События', path: 'events' },
    // {name: 'Видео', path: 'movies' },
    {name: 'Оценки', path: 'ratings' },
  ],
  [ContentName.Shows]: [
    {name: 'Информация', path: 'info' },
    {name: 'Комики', path: 'comedians' },
    {name: 'Видео', path: 'movies' },
    {name: 'Оценки', path: 'ratings' },
    {name: 'Отзывы', path: 'reviews' },
  ],

  [ContentName.Users]: [
    {name: 'Информация', path: 'info' },
    {name: 'Фото', path: 'photos' },
    {name: 'Оценки', path: 'ratings' },
    {name: 'Отзывы', path: 'reviews' },
  ],
};

export type TabDataType = typeof TabData;
