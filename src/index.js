import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import getFirestoreApp from './firebase/config';
import reportWebVitals from './reportWebVitals';

getFirestoreApp()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
