import { Box, Typography } from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';

import { Titles } from '../../../components/titles/titles';
import { TopTabs } from '../../../components/top-tabs/top-tabs';
import { ContentName, Language } from '../../../const/const';
import { CardContainer } from '../../../components/card-container/card-container';

import { SearchByIdType, UseGetQueryType } from '../../../types/types';
import { Filter } from '../../../components/filters/filter';

import { adaptEventsToCard, adaptShowsToCard } from '../../../utils/adapters/card-adapters';
import { EventsOfComedianCC } from '../../../types/event-types';
import { ShowsOfComedianCC } from '../../../types/show-types';
import { getTitle } from '../../../utils/utils';


/**
 * в зависимости от типа выбирает адаптер для данных с сервера и возвращает массив переведенных в CamelCase данных
 * @param data массив данных с сервера
 * @param type Тип - к чему относится страница (событие/шоу/комик и тд)
 * @returns массив переведенных в CamelCase данных
 */

const getCardData = (data: EventsOfComedianCC[] | ShowsOfComedianCC[], type: ContentName) => {
  switch (type) {
    case ContentName.Events:
      return data.map((item) => adaptEventsToCard(item as EventsOfComedianCC));
    case ContentName.Shows:
      return data.map((item) => adaptShowsToCard(item as ShowsOfComedianCC));

    default: return data.map((item) => adaptShowsToCard(item as ShowsOfComedianCC));
  }
};

type PageCardFilterListProps = {

  filters: string[];
  mainType: ContentName;
  listType: ContentName;
  useGetQuery: UseGetQueryType;
};

/**
 *  возвращает JSXElement - страницу с набором карточек
 * @param param0 {filters, mainType, listType, useGetQuery }:
 * filters - массив фильтров [year, languages  и тд] ;
 * mainType - к чему относится страница (событие/шоу/комик и тд) ;
 * listType - к чему относится карточка (событие/шоу/комик и тд) ;
 * useGetQuery - ф-ция RTK-query, возвращающая {isError, isLoading, data}.
 * @returns JSXElement - страницу с набором карточек
 */

export const PageCardFilterList = ({filters, mainType, listType, useGetQuery }: PageCardFilterListProps) => {

  const { id } = useParams();

  const {pathname, search} = useLocation();

  const queryParams = {id, search} as SearchByIdType;

  const {isError, isLoading, data} = useGetQuery(queryParams);


  if (isError) {
    return (
      <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', pt: '70px', background: '#0d0101' }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: '#ffffff', width: '60%'}}>
          <Typography sx={{ minWidth: 100, fontSize:'51px', textAlign: 'center' }}>
          Error !
          </Typography>
        </Box>
      </Box>

    );
  }

  if (isLoading || !data) {

    return (

      <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', pt: '70px', background: '#0d0101' }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: '#ffffff', width: '60%'}}>
          <Typography sx={{ minWidth: 100, fontSize:'51px', textAlign: 'center' }}>
          Loading ...
          </Typography>
        </Box>
      </Box>

    );
  }

  if (!data.length) {
    return (
      <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', pt: '70px', background: '#0d0101' }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: '#ffffff', width: '60%'}}>
          <Typography sx={{ minWidth: 100, fontSize:'21px', textAlign: 'center' }}>
          Sorry... can not find events
          </Typography>
        </Box>
      </Box>
    );
  }


  const cardData = getCardData(data, listType);


  const title = getTitle(cardData[0], mainType, Language.Native);
  const titleEn = getTitle(cardData[0], mainType, Language.En);

  const tabProps = {id, type: mainType, pathname};


  return (
    <>
      <Titles
        first={title}
        second={titleEn}
      />

      <TopTabs tabProps={tabProps}/>
      <Filter filters={filters}/>


      <CardContainer cards={cardData} />

    </>
  );
};

