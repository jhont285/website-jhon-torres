import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';


// css
import 'bootswatch/cosmo/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'font-mfizz/dist/font-mfizz.css';
import './css/main.css';
import './css/timeline.css';

// test
import registerServiceWorker from './registerServiceWorker';

// Main Component
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
