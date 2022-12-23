import { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EventPageInfo } from '../pages/event-page-info/event-page-info';
import { MainPage } from '../pages/main-page/main-page';
import { Header } from '../components/header/header';
import Footer from '../components/footer/footer';

import { MainContainer, MainMain, MainWrapper, PageWrapper } from './app-style';
import { PageCardFilterList } from '../pages/proto/page-card-filter-list/page-card-filter-list';
import { FilterName } from '../const/const';
import { ComediansPage } from '../pages/comedians/comedians-page/comedians-page';
import { ComedianPageInfo } from '../pages/comedians/comedian-page-info/comedian-page-info';
import { useGetEventsQuery, useGetShowsQuery } from '../store/sub-api';
import { PagePictureList } from '../pages/proto/page-picture-list/page-picture-list';
import { PageRatingList } from '../pages/proto/page-rate-list/page-rate-list';
import { RegistrationPage } from '../pages/registration-page/registration-page';
import { LoginPage } from '../pages/login-page/login-page';
import { useAuthUserQuery } from '../store/user-api';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions';
import { ErrorPage } from '../pages/error-page/error-page';
import { UsersPage } from '../pages/users-page/users-page';

const AppRoute = {
  Main: '/',

  Comedian: '/comedians/:id/info',
  ComedianShows: '/comedians/:id/shows',
  ComedianEvents: '/comedians/:id/events',
  // ComedianPhotos: '/comedians/:id/photos',
  ComedianRatings: '/comedians/:id/ratings',

  Pictures: '/:mainType/:id/pictures',
  Ratings: '/:mainType/:id/ratings',

  Comedians: '/comedians',
  Show: '/shows/:id',
  Shows: '/shows',
  Event: '/events/:id/info',
  Events: '/events',
  Place: '/places/:id',
  Places: '/places',
  User: '/users/:id',
  Users: '/users',

  Registration: '/registration',
  Login: '/login'

};


export const App = () => {

  // const cashless = Date.now();

  // const { isError, isLoading, data } = useAuthUserQuery(null);

  // console.log('app', isError, isLoading, data, cashless);
  const dispatch = useDispatch();


  // useEffect(() => {
  //   if (!isLoading) {
  //     // console.log('useEffect', {isError, isLoading, data});
  //     if (data) {
  //       dispatch(setUser(data));
  //     }

  //     if (isError) {
  //       dispatch(setUser(null));
  //     }
  //   }
  // }, [isError, isLoading, data, dispatch]);


  return (
    <BrowserRouter>
      <PageWrapper>
        <Header/>
        <MainMain>
          <MainWrapper>
            <MainContainer>
              <Routes>


                <Route path={AppRoute.Main} element={<MainPage/>}/>

                <Route path={AppRoute.Comedians} element={<ComediansPage/>}/>
                <Route path={AppRoute.Comedian} element={<ComedianPageInfo/>}/>

                <Route path={AppRoute.ComedianEvents} element={
                  <PageCardFilterList
                    filters={[FilterName.EventStatus, FilterName.Year]}
                    useGetQuery={useGetEventsQuery}
                  />
                }
                />

                <Route path={AppRoute.ComedianShows} element={
                  <PageCardFilterList
                    filters={[FilterName.Year]}
                    useGetQuery={useGetShowsQuery}
                  />
                }
                />

                <Route path={AppRoute.Pictures} element={<PagePictureList/>}/>
                <Route path={AppRoute.Ratings} element={<PageRatingList/>}/>


                {/* <Route path={AppRoute.Events} element={<EventsPage/>}/> */}
                <Route path={AppRoute.Event} element={<EventPageInfo/>}/>


                <Route path={AppRoute.Users} element={<UsersPage/>}/>

                <Route path={AppRoute.Registration} element={<RegistrationPage/>}/>
                <Route path={AppRoute.Login} element={<LoginPage/>}/>


                <Route path='*' element={<ErrorPage/>}/>


              </Routes>
            </MainContainer>
          </MainWrapper>
        </MainMain>

        <Footer/>
      </PageWrapper>

    </BrowserRouter>

  );
};
