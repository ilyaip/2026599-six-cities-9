import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOfferList } from './action';
import { offers } from '../mocks/offers';


const initialState = {
  city: 'Paris',
  offerList: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOfferList, (state) => {
      state.offerList = [];
    });
});

export {reducer};

