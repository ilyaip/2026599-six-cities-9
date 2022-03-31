import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
// import { offers } from './mocks/offers';
import { store } from './store';
import { checkAuthAction, fetchOfferAction } from './store/api-actions';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

const Settings = {
  RENTAL_OFFERS: 123,
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App
        rentalOffers = {Settings.RENTAL_OFFERS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
