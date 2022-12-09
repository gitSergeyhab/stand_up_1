import { useLocation, useParams } from 'react-router-dom';
import { GraphRound } from '../../../components/graph-round/graph-round';

import { Titles } from '../../../components/titles/titles';
import { TopTabs } from '../../../components/top-tabs/top-tabs';
import { Vote } from '../../../components/vote/vote';
import { useGetRatingsQuery } from '../../../store/sub-api';
import { getTypes } from '../../../utils/utils';
import { VotesUl } from './page-rate-list-style';


export const PageRatingList = () => {

  const { id } = useParams();

  const { pathname, search } = useLocation();


  const {isError, isLoading, data: res} = useGetRatingsQuery(pathname + search);

  if (isError || isLoading || !res) {
    return (
      <h1>Err</h1>
    );
  }

  const {count, rates, stats, titles} = res;


  const { mainType } = getTypes(pathname);

  const tabProps = {id, type: mainType, pathname};

  const ratingElements = rates.map((item) => <Vote key={item.rateId} vote={item}/>);
  const rateList = rates.length ? <VotesUl>{ratingElements}</VotesUl> : null;


  return (
    <>
      <Titles
        native={titles.native}
        en={titles.en}
      />

      <TopTabs tabProps={tabProps}/>

      <GraphRound stats={stats} />

      {rateList}


      {count}

    </>
  );
};

