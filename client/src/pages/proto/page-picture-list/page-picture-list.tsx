import { useLocation, useParams } from 'react-router-dom';
import { ImgList } from '../../../components/img-list/img-list';
import { Titles } from '../../../components/titles/titles';
import { TopTabs } from '../../../components/top-tabs/top-tabs';
import { useGetPicturesQuery } from '../../../store/sub-api';
import { getTypes } from '../../../utils/utils';


export const PagePictureList = () => {

  const { id } = useParams();

  const { pathname, search } = useLocation();


  const {isError, isLoading, data: res} = useGetPicturesQuery(pathname + search);

  if (isError || isLoading || !res) {
    return (
      <h1>Err</h1>
    );
  }

  const {count, data, titles} = res;

  const { mainType } = getTypes(pathname);

  const tabProps = {id, type: mainType, pathname};


  return (
    <>
      <Titles
        first={titles.native}
        second={titles.en}
      />

      <TopTabs tabProps={tabProps}/>


      <ImgList pictures={data} handleImgClick={() => null} />

      {count}

    </>
  );
};

