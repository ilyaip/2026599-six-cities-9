import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSort } from './action';
import { cities } from '../mocks/offers';


const initialState = {
  activeCity: 'Paris',
  activeCityObj: cities[0],
  activeCityObjCopy: cities[0],
  activeSort: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
      state.activeCityObj = cities.filter((item) => item.city === action.payload)[0];
      state.activeCityObjCopy = cities.filter((item) => item.city === action.payload)[0];
    })
    .addCase(changeSort, (state, action) => {
      state.activeSort = action.payload;
      switch(action.payload) {
        case 'Popular': state.activeCityObj.offers = state.activeCityObjCopy.offers;
          break;
        case 'Price: low to high': state.activeCityObj.offers = state.activeCityObj.offers.sort((a, b) => a.price - b.price);
          break;
        case 'Price: high to low': state.activeCityObj.offers = state.activeCityObj.offers.sort((a, b) => b.price - a.price);
          break;
        case 'Top rated first': state.activeCityObj.offers = state.activeCityObj.offers.sort((a, b) => b.rating - a.rating);
          break;
      }
    });
});

export {reducer};

