
import { useLocation } from 'react-router-dom';
import { CardContainer } from '../../../components/card-container/card-container';
import { useGetAllComediansQuery } from '../../../store/comedians-api';
import { adaptComediansToCard } from '../../../utils/adapters/card-adapters';

// import { Link } from 'react-router-dom';


// type ResultType = { comedians: ComedianTypeSC[]; count: number };

// const BASE_URL = 'http://localhost:5000/api/comedians';


// const ComedianCard = ({comedian} : {comedian : ComedianTypeCC}) => {

//   const { avgRate, comedianCity, comedianFirstName, comedianLastName, comedianId, countryName, numberOfRate, totalViews, comedianAvatar } = comedian;

//   return (

//     <Link to={`/comedians/${comedianId}/info`}>
//       <h3>{comedianFirstName} {comedianLastName}</h3>
//       {/* {comedian_avatar && <img src={comedian_avatar} alt={comedian_first_name} width='400' height='300'/>} */}
//       {/* <img src={comedianAvatar || DefaultPath.ComedianAvatar} alt={comedianFirstName} width='400' height='300'/> */}
//       {comedianAvatar}

//       <img src={DefaultPath.ComedianAvatar} alt={comedianFirstName} width='300'/>
//       <p>{countryName} {comedianCity ? `: ${comedianCity}` : null}</p>
//       <p>оценка: {avgRate} ({numberOfRate}); просмотров: {totalViews}</p>

//     </Link>

//   );
// };

export const ComediansPage = () => {

  // const [comedians, setComedians] = useState<ComedianTypeCC[]>([]);
  const { search } = useLocation();

  const {data, isError, isLoading } = useGetAllComediansQuery(search);


  // useEffect(() => {
  //   const fetchComedians = async() => {
  //     try {
  //       const {data: x} = await axios.get<ResultType>(BASE_URL);
  //       const comediansCC = x.comedians.map((item) => adaptComediansToClient(item));
  //       // console.log(data);
  //       setComedians(comediansCC);
  //     } catch (err) {
  //       // console.log(err);
  //     }
  //   };
  //   fetchComedians();
  // }, []);

  if (isError || isLoading || !data) {
    return <h2>Errrrr</h2>;
  }


  // console.log({comedians});
  // console.log({data, isError, isLoading });

  const cards = data.comedians.map(adaptComediansToCard);
  const comedianElements = data.comedians.length ? <CardContainer cards={cards}/> : null;


  // const comedianElements = data.map((item) => <li key={item.comedianId}><ComedianCard comedian={item}/></li>);

  return (
    <>
      <h1>Комики</h1>
      {comedianElements}
    </>

  );
};
