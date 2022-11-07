import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComediansPage } from '../pages/comedians-page/comedians-page';
import { EventsPage } from '../pages/events-page/events-page';
import { MainPage } from '../pages/main-page/main-page';
import { OneComedianPage } from '../pages/one-comedian-page/one-comedian-page';
import { Container } from '@mui/material';
import { Header } from '../components/header/header';
import Footer from '../components/footer/footer';
import { Box } from '@mui/joy';
import CssBaseline from '@mui/material/CssBaseline';


export const App = () => {

  const AppRoute = {
    Main: '/',

    Comedian: '/comedians/:id/info',
    ComedianShow: '/comedians/:id/show',
    ComedianEvent: '/comedians/:id/event',
    ComedianPhoto: '/comedians/:id/photo',
    ComedianRatings: '/comedians/:id/ratings',

    Comedians: '/comedians',
    Show: '/shows/:id',
    Shows: '/shows',
    Event: '/events/:id',
    Events: '/events',
    Place: '/places/:id',
    Places: '/places',
    User: '/users/:id',
    Users: '/users'
  };


  return (
    <CssBaseline>
      <BrowserRouter>
        <Box sx={{ background: '#0d0101', minHeight: '100vh', paddingBottom: '30px' }} >
          {/* <div style={{ background: '#0d0101', minHeight: '100vh', paddingBottom: '30px' }} > */}
          <Header/>
          <Box sx={{ background: 'white', paddingLeft: 0, paddingRight: 0}}>
            <Routes>

              <Route path={AppRoute.Main} element={<MainPage/>}/>

              <Route path={AppRoute.Comedians} element={<ComediansPage/>}/>
              <Route path={AppRoute.Comedian} element={<OneComedianPage/>}/>
              <Route path={AppRoute.Events} element={<EventsPage/>}/>


            </Routes>
          </Box>

          <Footer/>
        </Box>

        {/* </div> */}


      </BrowserRouter>
    </CssBaseline>

  );
};
