import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './reducers/index.js'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'; 

// const store = createStore(() => [], {}, applyMiddleware());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  1235
    <App />
  </Provider>
);

