import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComediansPage } from '../pages/comedians-page/comedians-page';
import { EventsPage } from '../pages/events-page/events-page';
import { OneComedianPage } from '../pages/one-comedian-page/one-comedian-page';


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
      <Routes>
        <Route path={AppRoute.Comedians} element={<ComediansPage/>}/>
        <Route path={AppRoute.Comedian} element={<OneComedianPage/>}/>
        <Route path={AppRoute.Events} element={<EventsPage/>}/>

      </Routes>


    </BrowserRouter>
  );
};
