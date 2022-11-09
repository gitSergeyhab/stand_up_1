import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';


import { useParams, useLocation } from 'react-router-dom';


import { Titles } from '../../components/titles/titles';
import { TopTabs } from '../../components/top-tabs/top-tabs';
import { ContentName } from '../../const/const';
import { TabData } from '../../const/data';
import { EventsOfComedianCC, EventsOfComedianSC } from '../../types/event-types';
import { adaptEventsOfComedianToClient, adaptEventToCard } from '../../utils/adapters/event-adapters';
import { CardContainer } from '../../components/card-container/card-container';
import { ImageModal } from '../../components/image-modal/image-modal';
import { ResourceBlock } from '../../components/resource-block/resource-block';
import { AboutBlock } from '../../components/about-block/about-block';
import { ViewsBlock } from '../../components/views-block/views-block';
import { Rating } from '../../components/rating/rating';
import { MainPic } from '../../components/main-pic/main-pic';
import { ImgList } from '../../components/img-list/img-list';


// const pictures = [
//   {id: 19, src: '/img/test/xz.jpg'},
//   {id: 13, src: '/img/test/girl.webp'},
//   {id: 12, src: '/img/test/kom.jpg'},
//   {id: 10, src: '/img/test/white.jpg'},
//   {id: 7, src: '/img/test/xz-2.jpg'},
//   {id: 3, src: '/img/test/black.jpg'},
//   {id: 2, src: '/img/test/abr.jpg'},
//   {id: 1, src: '/img/test/d-r.jpeg'},
// ];


const BASE_URL = 'http://localhost:5000/api/comedians';


export const OneComedianPageEvents = () => {

  const { id } = useParams();
  const { pathname } = useLocation();

  const [events, setEvents] = useState<EventsOfComedianCC[]>([]);


  useEffect(() => {
    const fetchEvents = async() => {
      if (id) {
        try {
          const {data} = await axios.get<EventsOfComedianSC[]>(`${BASE_URL}/${id}/events`);


          const eventsCC = data.map(adaptEventsOfComedianToClient);
          setEvents(eventsCC);

        } catch (err) {
          console.log('eventsCC', err);

          // setEvents(eventsCC);

        }
      }
    };
    fetchEvents();
  }, [id]);


  if (!events.length) {
    console.log('no events');

    return (<h1>Еще нет ...</h1>);
  }


  console.log(events);
  const cardData = events.map(adaptEventToCard);

  const {comedianFirstName, comedianFirstNameEn, comedianLastName, comedianLastNameEn} = events[0];

  const tabProps = {id, type: ContentName.Comedians, pathname, tabData: TabData[ContentName.Comedians]};


  return (
    <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', pt: '70px', background: '#0d0101' }} >
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: '#ffffff', width: '60%'}}>


        <Titles
          first={`${comedianFirstName || ''} ${comedianLastName || ''}`}
          second={`${comedianFirstNameEn || ''} ${comedianLastNameEn || ''}`}
        />

        <TopTabs tabProps={tabProps}/>


        <CardContainer cards={cardData} />


      </Box>
    </Box>
  );
};

