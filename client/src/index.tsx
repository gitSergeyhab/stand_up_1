import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app/app';
import { store } from './store/store';
import { storageUtils } from './utils/storage-utils';
import { setUser } from './store/actions';

import 'normalize.css';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const user = storageUtils.getUser();
store.dispatch(setUser(user));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
);
