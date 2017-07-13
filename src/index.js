import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureApi } from "./lib/api-client.js";
import store from './store.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

configureApi(store);

const AppWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(AppWithStore, document.getElementById('root'));
registerServiceWorker();
