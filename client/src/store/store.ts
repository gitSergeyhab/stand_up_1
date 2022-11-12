import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { comediansApi } from './comedians-api';

// export const enum ReducerName {
//     Comedians = comediansApi.reducerPath.
// }


export const reducer = combineReducers({
  [comediansApi.reducerPath]: comediansApi.reducer
});

export const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: api}}).concat(contactsApi.middleware)
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(comediansApi.middleware)

});


export type ReducerType = ReturnType<typeof reducer>;
