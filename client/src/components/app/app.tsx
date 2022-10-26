import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComediansPage } from '../../pages/comedians-page/comedians-page';
import { OneComedianPage } from '../../pages/comedian_page/comedian_page';


export const App = () => {

  const AppRoute = {
    Comedian: '/comedians/:id',
    Comedians: '/comedians'
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Comedians} element={<ComediansPage/>}/>
        <Route path={AppRoute.Comedian} element={<OneComedianPage/>}/>
      </Routes>


    </BrowserRouter>
  );
};
