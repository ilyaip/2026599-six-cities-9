import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { cities } from '../mocks/offers';


const initialState = {
  activeCity: 'Paris',
  activeCityObj: cities[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
      state.activeCityObj = cities.filter((item) => item.city === action.payload)[0];
    });
});

export {reducer};

