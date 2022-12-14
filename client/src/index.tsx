import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app/app';
import { store } from './store/store';
import { storageUtils } from './utils/storage-utils';
import { setUser } from './store/actions';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'normalize.css';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const user = storageUtils.getUser();
store.dispatch(setUser(user));

// Стрикт мод убивает проверку авторизации
// - дважды отправляет на сервер запрос с одними и теми же куками,
// но первый запрос МЕНЯУТ куки,
// а потому второй вызывает ошибку, что "куки уже не те"

// root.render(
//   <React.StrictMode>
//     <ToastContainer/>
//     <Provider store={store}>
//       <App />
//     </Provider>

//   </React.StrictMode>,
// );

root.render(
  <Provider store={store}>
    <ToastContainer/>
    <App />
  </Provider>
);
