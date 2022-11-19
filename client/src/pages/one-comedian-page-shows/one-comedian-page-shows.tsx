import { Box, Typography } from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';

import { Titles } from '../../components/titles/titles';
import { TopTabs } from '../../components/top-tabs/top-tabs';
import { ContentName, FilterName } from '../../const/const';
import { TabData } from '../../const/data';
import { CardContainer } from '../../components/card-container/card-container';
import { useGetShowsOfComedianQuery } from '../../store/comedians-api';
import { SearchByIdType } from '../../types/types';
import { Filter } from '../../components/filters/filter';
import { adaptShowsToCard } from '../../utils/adapters/card-adapters';


export const OneComedianPageShows = () => {

  const { id } = useParams();

  const {pathname, search} = useLocation();

  const queryParams = {id, search} as SearchByIdType;

  const {isError, isLoading, data} = useGetShowsOfComedianQuery(queryParams);


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


  const cardData = data.map(adaptShowsToCard);

  const {comedianFirstName, comedianFirstNameEn, comedianLastName, comedianLastNameEn} = data[0];

  const tabProps = {id, type: ContentName.Comedians, pathname, tabData: TabData[ContentName.Comedians]};


  return (
    <>
      <Titles
        first={`${comedianFirstName || ''} ${comedianLastName || ''}`}
        second={`${comedianFirstNameEn || ''} ${comedianLastNameEn || ''}`}
      />

      <TopTabs tabProps={tabProps}/>
      <Filter filters={[FilterName.Year]}/>


      <CardContainer cards={cardData} />

    </>
  );
};

