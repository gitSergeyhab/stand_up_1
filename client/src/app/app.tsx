import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComediansPage } from '../pages/comedians-page/comedians-page';
import { EventsPage } from '../pages/events-page/events-page';
import { MainPage } from '../pages/main-page/main-page';
import { OneComedianPage } from '../pages/one-comedian-page/one-comedian-page';
import { Container, Typography, MenuItem, AppBar } from '@mui/material';
import { Header } from '../components/header/header';
import Footer from '../components/footer/footer';


export const App = () => {

  const AppRoute = {
    Main: '/',
    Comedian: '/comedians/:id',
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
    <BrowserRouter>
      <div style={{ background: '#0d0101', minHeight: '100vh' }} >
        <Header/>
        <Container sx={{ background: 'white' }}>
          <Routes>

            <Route path={AppRoute.Main} element={<MainPage/>}/>

            <Route path={AppRoute.Comedians} element={<ComediansPage/>}/>
            <Route path={AppRoute.Comedian} element={<OneComedianPage/>}/>
            <Route path={AppRoute.Events} element={<EventsPage/>}/>


          </Routes>
        </Container>

        <Footer/>

      </div>


    </BrowserRouter>
  );
};
