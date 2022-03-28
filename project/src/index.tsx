import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { store } from './store';

const Settings = {
  RENTAL_OFFERS: 123,
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentalOffers = {Settings.RENTAL_OFFERS}
        offers = {offers}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
