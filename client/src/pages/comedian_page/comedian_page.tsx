import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ComedianTypeSC } from '../../types/types';

// import { Link } from 'react-router-dom';


const BASE_URL = 'http://localhost:5000/api/comedians';


export const OneComedianPage = () => {

  const {id} = useParams();


  useEffect(() => {
    const fetchComedians = async() => {
      try {
        const {data} = await axios.get<ComedianTypeSC>(`${BASE_URL}/${id || 1}`);
        // const comediansCC = adaptComediansClient(data)
        console.log(data);
        // setComedian(comediansCC);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchComedians();
  }, []);

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


  return (
    <main>
      <h2>Comedian</h2>
    </main>
  );
};
