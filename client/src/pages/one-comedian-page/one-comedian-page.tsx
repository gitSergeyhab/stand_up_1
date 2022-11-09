import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';


import { useParams, useLocation } from 'react-router-dom';
import { AboutBlock } from '../../components/about-block/about-block';
import { ImageModal } from '../../components/image-modal/image-modal';
import { ImgList } from '../../components/img-list/img-list';
import { MainPic } from '../../components/main-pic/main-pic';
import { Rating } from '../../components/rating/rating';
import { ResourceBlock } from '../../components/resource-block/resource-block';
import { OneComedianTypeCC, OneComedianTypeSC } from '../../types/comedian-types';
import { PictureType } from '../../types/types';
import { adaptOneComedianToClient } from '../../utils/adapters/comedian-adapters';


import { Titles } from '../../components/titles/titles';
import { TopTabs } from '../../components/top-tabs/top-tabs';
import { ContentName } from '../../const/const';
import { ViewsBlock } from '../../components/views-block/views-block';
import { TabData } from '../../const/data';


const pictures = [
  {id: 19, src: '/img/test/xz.jpg'},
  {id: 13, src: '/img/test/girl.webp'},
  {id: 12, src: '/img/test/kom.jpg'},
  {id: 10, src: '/img/test/white.jpg'},
  {id: 7, src: '/img/test/xz-2.jpg'},
  {id: 3, src: '/img/test/black.jpg'},
  {id: 2, src: '/img/test/abr.jpg'},
  {id: 1, src: '/img/test/d-r.jpeg'},
];


const BASE_URL = 'http://localhost:5000/api/comedians';


export const OneComedianPage = () => {

  const { id } = useParams();
  const { pathname } = useLocation();


  const [comedian, setComedian] = useState<OneComedianTypeCC | null>(null);

  const [open, setOpen] = useState< 'center' | 'fullscreen' | undefined>(undefined);
  const [currentPic, setPic] = useState<PictureType | null>(null);

  const handleClick = (pic: PictureType) => {
    setOpen('fullscreen');
    setPic(pic);
  };


  useEffect(() => {
    const fetchComedian = async() => {
      if (id) {
        try {
          const {data} = await axios.get<{comedian: OneComedianTypeSC}>(`${BASE_URL}/${id}`);
          const comediansCC = adaptOneComedianToClient(data.comedian);
          setComedian(comediansCC);
        } catch (err) {
          // console.log(err);
        }
      }
    };
    fetchComedian();
  }, [id]);


  if (!comedian) {
    return (<h1>Еще нет ...</h1>);
  }


  const {

    avgRate, numberOfRate, views, totalViews,
    comedianCity, countryName,
    comedianDateBirth, comedianDateDeath,
    comedianDescription,
    comedianFirstName, comedianFirstNameEn, comedianLastName, comedianLastNameEn,
    // pictures,
    resources, comedianAvatar,
  } = comedian;


  const about = [
    {point: 'Имя', value: comedianFirstName},
    {point: 'Фамилия', value: comedianLastName || comedianLastName || ''},
    {point: 'Страна рождения', value: countryName || ''},
    {point: 'Город рождения', value: comedianCity || ''},
    {point: 'Дата рождения', value: comedianDateBirth || ''},
    {point: comedianDateDeath ? 'Дата смерти' : '', value: comedianDateBirth || ''},
  ];

  const goodAbout = about.filter((item) => item.point);


  const tabProps = {id, type: ContentName.Comedians, pathname, tabData: TabData[ContentName.Comedians]};


  return (
    <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', pt: '70px', background: '#0d0101' }} >
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: '#ffffff'}}> */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: '#ffffff', width: '60%'}}>


        <Titles
          first={`${comedianFirstName} ${comedianLastName || ''}`}
          second={`${comedianFirstNameEn || ''} ${comedianLastNameEn || ''}`}
        />

        <TopTabs tabProps={tabProps}/>

        <MainPic src={comedianAvatar} alt={`${comedianFirstName} ${comedianLastName || ''}`}/>

        <Rating avgRate={avgRate} numberOfRate={numberOfRate}/>

        <ViewsBlock totalViews={totalViews} views={views}/>

        <AboutBlock about={goodAbout}/>
        <Typography my={2} variant='body1'>
          {comedianDescription}
        </Typography>

        <ResourceBlock resources={resources}/>

        <ImgList handleImgClick={handleClick} pictures={pictures.slice(0,3)}/>
        <ImageModal
          pictures={pictures}
          open={open}
          onClose={() => setOpen(undefined)}
          currentImg={currentPic || pictures[0]}
          setImg={setPic}
        />
      </Box>
    </Box>
  );
};
