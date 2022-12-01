import { ContentName, Language } from '../const/const';
import { GridCardType } from '../types/types';


/**
 * возвращает  заголовок страницы
 * @param data Данные
 * @param type Тип - к чему относится страница (событие/шоу/комик и тд)
 * @param language язык
 * @returns заголовок страницы
 */

export const getTitle = (data: GridCardType, type: ContentName, language: Language ) => {

  switch (type) {
    case ContentName.Comedians:
      return language === Language.Native ? data.comedianTitle : data.comedianTitleEn;
    case ContentName.Events:
      return language === Language.Native ? data.eventTitle : data.eventTitleEn;
    case ContentName.Places:
      return language === Language.Native ? data.placeTitle : data.placeTitleEn;

    default: return '';
  }
};
