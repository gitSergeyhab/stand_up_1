import { Box, List, ListItem, Tab, Tabs, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { AboutBlock } from '../../components/about-block/about-block';
import { ImageModal } from '../../components/image-modal/image-modal';
import { ImgList } from '../../components/img-list/img-list';
import { MainPic } from '../../components/main-pic/main-pic';
import { Picture } from '../../components/picture/picture';
import { Rating } from '../../components/rating/rating';
import { ResourceBlock } from '../../components/recource-block/recource-block';
import { SocialLink } from '../../components/social-link/social-link';
import { Color, DefaultPath, ResourceName } from '../../const';
import { OneComedianTypeCC, OneComedianTypeSC } from '../../types/comedian-types';
import { PictureType } from '../../types/types';
import { adaptOneComedianToClient } from '../../utils/adapters/comedian-adapters';

import VisibilityIcon from '@mui/icons-material/Visibility';


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


export type SimpleDict = {[key: string] : string}


const BASE_URL = 'http://localhost:5000/api/comedians';


export const OneComedianPage = () => {

  const {id} = useParams();

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
    <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', pt: '100px' }} >
      <Typography component={'h1'} fontSize={30} fontWeight={'700'}>
        {comedianFirstName} {comedianLastName}
      </Typography>
      <Typography component={'h2'} fontSize={27} fontWeight={'400'}>
        {comedianFirstNameEn} {comedianLastNameEn}
      </Typography>


      <List sx={{ display: 'flex', justifyContent:'center', minWidth: '320px', bgcolor: Color.BrownMain, width: '100%' }}>
        <ListItem sx={{ display: 'flex', justifyContent:'center'}}>
          <Link className='social-link' to={`/comedians/${comedianId}`}>Информация</Link>
        </ListItem>

        <ListItem>
          <Link to={`/comedians/${comedianId}/shows`}>Выступления</Link>
        </ListItem>

        {/* <ListItem>
          <Link to={`/comedians/${comedianId}/events`}>События</Link>
        </ListItem>

        <ListItem>
          <Link to={`/comedians/${comedianId}/photos`}>Фото</Link>
        </ListItem>

        <ListItem>
          <Link to={`/comedians/${comedianId}/ratings`}>Оценки</Link>
        </ListItem> */}
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
  );
};
