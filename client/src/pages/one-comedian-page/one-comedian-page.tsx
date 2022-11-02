import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Picture } from '../../components/picture/picture';
import { SocialLink } from '../../components/social-link/social-link';
import { DefaultPath, ResourceName } from '../../const';
import { OneComedianTypeCC, OneComedianTypeSC } from '../../types/comedian-types';
import { adaptOneComedianToClient } from '../../utils/adapters/comedian-adapters';


// import { Link } from 'react-router-dom';

export type SimpleDict = {[key: string] : string}


const BASE_URL = 'http://localhost:5000/api/comedians';


export const OneComedianPage = () => {

  const {id} = useParams();

  const [comedian, setComedian] = useState<OneComedianTypeCC | null>(null);


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


  if (!comedian) {return (<h1>Еще нет ...</h1>);}


  const {
    comedianId, countryId, userId,
    userNik,
    avgRate, numberOfRate, views, totalViews,
    comedianCity, comedianCityEn, countryName, countryNameEn,
    comedianDateAdded, comedianDateBirth, comedianDateDeath,
    comedianDescription,
    comedianFirstName, comedianFirstNameEn, comedianLastName, comedianLastNameEn,
    pictures, resources, comedianAvatar,
  } = comedian;

  // console.log(comedian);
  const pictureElement = pictures ? pictures.map((item) => <li key={item.id}><Picture item={item} name={`${comedianFirstName} ${comedianLastName || ''}`} /></li>) : null;
  const pictureElementList = pictures ? <ul>{pictureElement}</ul> : null;

  const resourceElement = resources ? resources.filter((item) => item.type !== ResourceName.Site).map((item) => <li key={item.id}><SocialLink item={item} /></li>) : null;
  const site = resources ? resources.find((item) => item.type === ResourceName.Site) : null;
  const siteElement = site ? <a href={site.href}>на сайт</a> : null;
  const resourceElementList = <ul>{resourceElement}</ul>;


  return (
    <main style={{ height: '100%' }}>
      <h2>Comedian</h2>
      <div>
        <h1>{userNik} {comedianFirstName} {comedianFirstNameEn} {comedianLastName} {comedianLastNameEn}</h1>
        {/* <img src={comedianAvatar || DefaultPath.ComedianAvatar} alt={comedianFirstName}/> */}
        <img src={DefaultPath.ComedianAvatar} alt={comedianFirstName} width={'50%'}/>

        <div>
          {comedianId}, {countryId}, {userId},
          {userNik},
          {avgRate}, {numberOfRate}, {views}, {totalViews},
          {comedianCity}, {comedianCityEn}, {countryName}, {countryNameEn},
          {comedianDateAdded}, {comedianDateBirth}, {comedianDateDeath},
          {comedianDescription},
          {comedianFirstName}, {comedianFirstNameEn}, {comedianLastName}, {comedianLastNameEn},
          {comedianAvatar},
            --
          {pictureElementList}

          --

          {resourceElementList}
          {siteElement}

        </div>

      </div>
    </main>
  );
};
