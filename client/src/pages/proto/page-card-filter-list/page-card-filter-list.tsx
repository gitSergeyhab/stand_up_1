import { Box, Typography } from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';

import { Titles } from '../../../components/titles/titles';
import { TopTabs } from '../../../components/top-tabs/top-tabs';
// import { ContentName } from '../../../const/const';
import { CardContainer } from '../../../components/card-container/card-container';

import { UseGetQueryType } from '../../../types/types';
import { Filter } from '../../../components/filters/filter';
import { getCardData, getTypes } from '../../../utils/utils';


type PageCardFilterListProps = {

  filters: string[];
  // mainType: ContentName;
  // listType: ContentName;
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

export const PageCardFilterList = ({filters, useGetQuery }: PageCardFilterListProps) => {

  const {id} = useParams();

  const {pathname, search} = useLocation();

  const {isError, isLoading, data: result} = useGetQuery(pathname + search);


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

  if (isLoading || !result) {

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

  if (!result.data.length) {
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


  const { data, count, titles } = result;
  const { listType, mainType } = getTypes(pathname);

  const cardData = getCardData(data, listType);


  const title = titles.native;
  const titleEn = titles.en;


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
      count: {count}

    </>
  );
};

