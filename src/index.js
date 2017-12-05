import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/js/bootstrap.min';
import 'font-awesome/css/font-awesome.min.css';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/timeline.css';
import './font-mfizz/font-mfizz.css';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
