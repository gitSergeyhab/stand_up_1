import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { OneComedianTypeCC, OneComedianTypeSC } from '../../types/types';
import { adaptOneComedianToClient } from '../../utils/adapters';

// import { Link } from 'react-router-dom';


const BASE_URL = 'http://localhost:5000/api/comedians';


export const OneComedianPage = () => {

  const {id} = useParams();

  const [comedian, setComedian] = useState<OneComedianTypeCC | null>(null);


  useEffect(() => {
    const fetchComedian = async() => {
      if (id) {
        // console.log('fetchComedian');
        try {
          const {data} = await axios.get<{comedian: OneComedianTypeSC}>(`${BASE_URL}/${id}`);
          const comediansCC = adaptOneComedianToClient(data.comedian);
          setComedian(comediansCC);
          // console.log(data, comediansCC);

          // console.log(comediansCC, data);
        } catch (err) {
          // console.log(err);
        }

      }

    };
    fetchComedian();
  }, [id]);

  // useEffect(() => {
  //   const fetchComedians = async() => {
  //     try {
  //       const {data} = await axios.get<ComedianTypeSC>(`${BASE_URL}/2`);
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchComedians();
  // }, []);

  // console.log(comedians);

  if (!comedian) {return (<h1>Еще нет ...</h1>);}


  const {
    comedianId, countryId, userId,
    userNik,
    avgRate, numberOfRate, views, totalViews,
    comedianCity, comedianCityEn, countryName, countryNameEn,
    comedianDateAdded, comedianDateBirth, comedianDateDeath,
    comedianDescription,
    comedianFirstName, comedianFirstNameEn, comedianLastName, comedianLastNameEn,
    picturePaths, resources, comedianAvatar,
  } = comedian;

  // console.log(comedian);
  const picturePathsElement = picturePaths ? picturePaths.map((item) => <li key={item}>{item}</li>) : null;


  return (
    <main>
      <h2>Comedian</h2>
      <div>
        <h1>{userNik} {comedianFirstName} {comedianFirstNameEn} {comedianLastName} {comedianLastNameEn}</h1>
        <img src={comedianAvatar || '/comedian-no-avatar'} alt={comedianFirstName}/>
        <div>
          {comedianId}, {countryId}, {userId},
          {userNik},
          {avgRate}, {numberOfRate}, {views}, {totalViews},
          {comedianCity}, {comedianCityEn}, {countryName}, {countryNameEn},
          {comedianDateAdded}, {comedianDateBirth}, {comedianDateDeath},
          {comedianDescription},
          {comedianFirstName}, {comedianFirstNameEn}, {comedianLastName}, {comedianLastNameEn},
          {comedianAvatar},

        </div>

      </div>
    </main>
  );
};
