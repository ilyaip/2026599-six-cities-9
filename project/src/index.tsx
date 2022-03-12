import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';

const Settings = {
  RENTAL_OFFERS: 123,
};
ReactDOM.render(
  <React.StrictMode>
    <App
      rentalOffers = {Settings.RENTAL_OFFERS}
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
