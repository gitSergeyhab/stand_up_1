import { Box, List, ListItem, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';


import { Link, useParams, useLocation } from 'react-router-dom';
import { AboutBlock } from '../../components/about-block/about-block';
import { ImageModal } from '../../components/image-modal/image-modal';
import { ImgList } from '../../components/img-list/img-list';
import { MainPic } from '../../components/main-pic/main-pic';
import { Rating } from '../../components/rating/rating';
import { ResourceBlock } from '../../components/resource-block/resource-block';
import { OneComedianTypeCC, OneComedianTypeSC } from '../../types/comedian-types';
import { PictureType } from '../../types/types';
import { adaptOneComedianToClient } from '../../utils/adapters/comedian-adapters';

import VisibilityIcon from '@mui/icons-material/Visibility';

import './tabs.css';
import { Titles } from '../../components/titles/titles';


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


const TABS = [
  {name: 'Информация', path: 'info' },
  {name: 'Выступления', path: 'shows' },
  {name: 'События', path: 'events' },
  {name: 'Фото', path: 'photos' },
  {name: 'Оценки', path: 'ratings' },
];

const getTabs = (tabs: {name: string; path: string}[], type: string, id: string) => tabs.map(({name, path}) => ({name, path, loc: `/${type}/${id}/${path}`}));

export type SimpleDict = {[key: string] : string}


const BASE_URL = 'http://localhost:5000/api/comedians';

type TabType = {name: string; path: string; loc: string}

const Tab = ({tab, pathName} : {tab: TabType; pathName: string }) => {

  const className = tab.loc === pathName ? 'active' : '';

  return (
    <ListItem sx={{ display: 'flex', justifyContent:'center', pb: '16px', pt: '16px'}} className={className}>
      <Link to={tab.loc}>{tab.name}</Link>
    </ListItem>
  );
};


export const OneComedianPage = () => {

  const {id} = useParams();
  const location = useLocation();


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

  const tabs = id ? getTabs(TABS, 'comedians', id) : getTabs(TABS, 'comedians', 'id');

  const tabsElements = tabs.map((item) => <Tab key={item.path} tab={item} pathName={location.pathname}/>);

  const {
    comedianId, countryId, userId,
    userNik,
    avgRate, numberOfRate, views, totalViews,
    comedianCity, comedianCityEn, countryName, countryNameEn,
    comedianDateAdded, comedianDateBirth, comedianDateDeath,
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

  // const


  return (
    <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', pt: '70px', background: '#0d0101' }} >
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: '#ffffff'}}>


        <Titles
          first={`${comedianFirstName} ${comedianLastName || ''}`}
          second={`${comedianFirstNameEn || ''} ${comedianLastNameEn || ''}`}
        />

        <List className={'tab-panel'} sx={{ mb: '30px', pb: 0, pt: 0 }}>
          {tabsElements}
        </List>
        <MainPic src={comedianAvatar} alt={`${comedianFirstName} ${comedianLastName || ''}`}/>

        <Rating defaultValue={Math.round((avgRate || 0) * 10) / 10 } num={numberOfRate || '0'}/>

        <Box sx={{ display: 'flex' }}>

          <VisibilityIcon/>
          <Typography component={'p'} fontSize={13} fontWeight={'400'}>
            {views} (за неделю);   {totalViews} (за вме время)
          </Typography>
        </Box>

        <AboutBlock about={goodAbout}/>

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
