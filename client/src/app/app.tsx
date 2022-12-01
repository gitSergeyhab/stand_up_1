import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EventsPage } from '../pages/events-page/events-page';
import { MainPage } from '../pages/main-page/main-page';
import { Header } from '../components/header/header';
import Footer from '../components/footer/footer';

import { MainContainer, MainWrapper, PageWrapper } from './app-style';
import { PageCardFilterList } from '../pages/proto/page-card-filter-list/page-card-filter-list';
import { ContentName, FilterName } from '../const/const';
import { useGetEventsOfComedianQuery, useGetShowsOfComedianQuery } from '../store/comedians-api';
import { ComediansPage } from '../pages/comedians/comedians-page/comedians-page';
import { ComedianPageInfo } from '../pages/comedians/comedian-page-info/comedian-page-info';

const AppRoute = {
  Main: '/',

  Comedian: '/comedians/:id/info',
  ComedianShows: '/comedians/:id/shows',
  ComedianEvents: '/comedians/:id/events',
  ComedianPhotos: '/comedians/:id/photos',
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


export const App = () => {

  const x = 'x';


  return (
    <BrowserRouter>
      <PageWrapper>
        <Header/>
        <main>
          <MainWrapper>
            <MainContainer>
              <Routes>


                <Route path={AppRoute.Main} element={<MainPage/>}/>

                <Route path={AppRoute.Comedians} element={<ComediansPage/>}/>
                <Route path={AppRoute.Comedian} element={<ComedianPageInfo/>}/>

                <Route path={AppRoute.ComedianEvents} element={
                  <PageCardFilterList
                    filters={[FilterName.EventStatus, FilterName.Year]}
                    listType={ContentName.Events}
                    mainType={ContentName.Comedians}
                    useGetQuery={useGetEventsOfComedianQuery}
                  />
                }
                />

                <Route path={AppRoute.ComedianShows} element={
                  <PageCardFilterList
                    filters={[FilterName.Year]}
                    listType={ContentName.Shows}
                    mainType={ContentName.Comedians}
                    useGetQuery={useGetShowsOfComedianQuery}
                  />
                }
                />


                <Route path={AppRoute.Events} element={<EventsPage/>}/>


              </Routes>
            </MainContainer>
          </MainWrapper>
        </main>

        <Footer/>
      </PageWrapper>

    </BrowserRouter>

  );
};
