import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ComedianTypeCC, ComedianTypeSC } from '../../types/comedian-types';
import { adaptComediansToClient } from '../../utils/adapters/comedian-adapters';


type ResultType = { comedians: ComedianTypeSC[]; count: number };

const BASE_URL = 'http://localhost:5000/api/place/2';


const EventCard = ({event} : {event : ComedianTypeCC}) => {

  const { avgRate, comedianCity, comedianFirstName, comedianLastName, comedianId, countryName, numberOfRate, totalViews, comedianAvatar } = event;

  return (

    <Link to={`/comedians/${comedianId}`}>
      <h3>{comedianFirstName} {comedianLastName}</h3>
      {/* {comedian_avatar && <img src={comedian_avatar} alt={comedian_first_name} width='400' height='300'/>} */}
      <img src={comedianAvatar || '/no-avatar'} alt={comedianFirstName} width='400' height='300'/>
      <p>{countryName} {comedianCity ? `: ${comedianCity}` : null}</p>
      <p>оценка: {avgRate} ({numberOfRate}); просмотров: {totalViews}</p>

    </Link>

  );
};

export const EventsPage = () => {

  const [events, setEvents] = useState<ComedianTypeCC[]>([]);


  useEffect(() => {
    const fetchEvents = async() => {
      try {
        const {data} = await axios.get<ResultType>(BASE_URL);
        // const comediansCC = data.comedians.map((item) => adaptComediansToClient(item));
        console.log(data);
        // setEvents(comediansCC);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);


  const comedianElements = events.length ? events.map((item) => <li key={item.comedianId}><EventCard event={item}/></li>) : null;

  return (
    <main>
      <h2>Events</h2>
      <ul>{comedianElements}</ul>
    </main>
  );
};
