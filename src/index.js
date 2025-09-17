import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './body/index'
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Body />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
