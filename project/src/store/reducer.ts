import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setLoading, changeSort, loadActiveOffer, loadOffers, requireAuthorization, setError, loadComments, addComment, loadFavorites, toggleFavorite, loadNearbyOffers } from './action';
import { AuthorizationStatus } from '../const';
import { Offer, Comment } from '../types/offer';

type InitalState = {
  activeCity: string,
  activeSort: string,
  loadedOffers: Offer[],
  loadedOffersCopy: Offer[],
  authorizationStatus: AuthorizationStatus,
  error: string,
  isDataLoaded: boolean,
  activeOffer: Offer | null,
  isLoading: boolean,
  comments: Comment[],
  favorites: Offer[],
  nearbyOffers: Offer[],
}

const initialState: InitalState = {
  activeCity: 'Paris',
  activeSort: 'Popular',
  loadedOffers: [],
  loadedOffersCopy: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isDataLoaded: false,
  activeOffer: null,
  isLoading: true,
  comments: [],
  favorites: [],
  nearbyOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
      state.loadedOffers = state.loadedOffersCopy.filter((item) => item.city.name === action.payload);
    })
    .addCase(changeSort, (state, action) => {
      state.activeSort = action.payload;
      switch(action.payload) {
        case 'Popular': state.loadedOffers = state.loadedOffersCopy.filter((item) => item.city.name === state.activeCity);
          break;
        case 'Price: low to high': state.loadedOffers = state.loadedOffers.sort((a, b) => a.price - b.price);
          break;
        case 'Price: high to low': state.loadedOffers = state.loadedOffers.sort((a, b) => b.price - a.price);
          break;
        case 'Top rated first': state.loadedOffers = state.loadedOffers.sort((a, b) => b.rating - a.rating);
          break;
      }
    })
    .addCase(loadOffers, (state, action) => {
      state.loadedOffers = action.payload;
      state.loadedOffers = state.loadedOffers.filter((item) => item.city.name === 'Paris');
      state.loadedOffersCopy = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(toggleFavorite, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    });
});

export {reducer};

