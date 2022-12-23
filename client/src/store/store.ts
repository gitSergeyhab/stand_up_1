import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './axios-api';

import { comediansApi } from './comedians-api';
import { eventsApi } from './events-api';
// import { mainReducer } from './main-reducer/main-reducer';
import { subApi } from './sub-api';
import { userApi } from './user-api';
import { userReducer } from './user-reducer/user-reducer';

export const enum ReducerName {
    // Main = 'Main',
    User = 'User'

}


export const reducer = combineReducers({
  [comediansApi.reducerPath]: comediansApi.reducer,
  [eventsApi.reducerPath]: eventsApi.reducer,
  [subApi.reducerPath]: subApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [ReducerName.User]: userReducer,

  // [ReducerName.Main]: mainReducer
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: api}}).concat(comediansApi.middleware)
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(comediansApi.middleware)

});


export type ReducerType = ReturnType<typeof reducer>;
