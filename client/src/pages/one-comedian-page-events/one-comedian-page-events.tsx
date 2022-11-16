import { Box, Typography } from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';

import { Titles } from '../../components/titles/titles';
import { TopTabs } from '../../components/top-tabs/top-tabs';
import { ContentName } from '../../const/const';
import { TabData } from '../../const/data';
import { adaptEventToCard } from '../../utils/adapters/event-adapters';
import { CardContainer } from '../../components/card-container/card-container';
import { useGetEventsOfComedianQuery } from '../../store/comedians-api';
import { EventComedianQueryType } from '../../types/types';


export const OneComedianPageEvents = () => {

  const { id } = useParams();

  const {pathname, search} = useLocation();

  const queryParams = {id, search} as EventComedianQueryType;

  const {isError, isLoading, data: events} = useGetEventsOfComedianQuery(queryParams);


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

  if (isLoading || !events) {

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

  if (!events.length) {
    return (
      <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', pt: '70px', background: '#0d0101' }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: '#ffffff', width: '60%'}}>
          <Typography sx={{ minWidth: 100, fontSize:'21px', textAlign: 'center' }}>
          Sorry... can not find contacts with: {'debounceSearch'}
          </Typography>
        </Box>
      </Box>
    );
  }

  console.log(events);

  const cardData = events.map(adaptEventToCard);

  const {comedianFirstName, comedianFirstNameEn, comedianLastName, comedianLastNameEn} = events[0];

  const tabProps = {id, type: ContentName.Comedians, pathname, tabData: TabData[ContentName.Comedians]};


  return (
    <>
      <Titles
        first={`${comedianFirstName || ''} ${comedianLastName || ''}`}
        second={`${comedianFirstNameEn || ''} ${comedianLastNameEn || ''}`}
      />

      <TopTabs tabProps={tabProps}/>


      <CardContainer cards={cardData} />
    </>
  );
};

