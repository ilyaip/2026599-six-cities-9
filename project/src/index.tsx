import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  RENTAL_OFFERS: 123,
};
ReactDOM.render(
  <React.StrictMode>
    <App rentalOffers = {Settings.RENTAL_OFFERS} />
  </React.StrictMode>,
  document.getElementById('root'));
