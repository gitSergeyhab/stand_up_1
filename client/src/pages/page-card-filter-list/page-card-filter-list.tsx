import { Box, Typography } from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';

import { Titles } from '../../components/titles/titles';
import { TopTabs } from '../../components/top-tabs/top-tabs';
import { ContentName } from '../../const/const';
import { CardContainer } from '../../components/card-container/card-container';

import { DataType, GridCardType, SearchByIdType, UseGetQueryType } from '../../types/types';
import { Filter } from '../../components/filters/filter';

import { AdapterCardType, adaptEventsToCard, adaptShowsToCard } from '../../utils/adapters/card-adapters';
import { EventsOfComedianCC } from '../../types/event-types';
import { ShowsOfComedianCC } from '../../types/show-types';


const enum Language {
  En = 'english',
  Native = 'native'
}

const getTitle = (data: GridCardType, type: ContentName, language: Language ) => {

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

const choseAdapter = (data: EventsOfComedianCC | ShowsOfComedianCC) => {
  switch (data.dataType) {

    case DataType.EventsOfComedianCC:
      return adaptEventsToCard;
    case DataType.ShowsOfComedianCC:
      return adaptShowsToCard;

    default: return adaptEventsToCard;
  }
};
// AdapterCardType<EventsOfComedianCC> | AdapterCardType<ShowsOfComedianCC> |

type PageCardFilterListProps = {
  // adapter: AdapterCardType<EventsOfComedianCC | ShowsOfComedianCC>;
  // adapter: (x: EventsOfComedianCC | ShowsOfComedianCC ) => GridCardType;

  filters: string[];
  mainType: ContentName;
  listType: ContentName;
  useGetQuery: UseGetQueryType;
};


export const PageCardFilterList = (
  {filters, mainType, listType, useGetQuery }: PageCardFilterListProps
) => {

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


  // const adapter = choseAdapter(data[0]);

  let adapter: typeof adaptEventsToCard | typeof adaptShowsToCard | null = null;

  if (data[0].dataType === DataType.EventsOfComedianCC) {
    adapter = adaptEventsToCard;
  } else {
    adapter = adaptShowsToCard;
  }

  const cardData = data.map(adapter);


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

