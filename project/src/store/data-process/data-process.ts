import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, SortType} from '../../const';
import { Offer, Comment } from '../../types/offer';

type InitalState = {
  activeCity: string,
  activeSort: string,
  loadedOffers: Offer[],
  loadedOffersCopy: Offer[],
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
  isDataLoaded: false,
  activeOffer: null,
  isLoading: true,
  comments: [],
  favorites: [],
  nearbyOffers: [],
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeSort: (state, action) => {
      state.activeSort = action.payload;
      switch(action.payload) {
        case SortType.Default: state.loadedOffers = state.loadedOffersCopy.filter((item) => item.city.name === state.activeCity);
          break;
        case SortType.PriceLowToHigh: state.loadedOffers = state.loadedOffers.sort((a, b) => a.price - b.price);
          break;
        case SortType.PriceHighToLow: state.loadedOffers = state.loadedOffers.sort((a, b) => b.price - a.price);
          break;
        case SortType.TopRatedFirst: state.loadedOffers = state.loadedOffers.sort((a, b) => b.rating - a.rating);
          break;
      }
    },
    changeCity: (state, action) => {
      state.activeCity = action.payload;
      state.loadedOffers = state.loadedOffersCopy.filter((item) => item.city.name === action.payload);
    },
    loadOffers: (state, action) => {
      state.loadedOffers = action.payload;
      state.loadedOffers = state.loadedOffers.filter((item) => item.city.name === state.activeCity);
      state.loadedOffersCopy = action.payload;
      state.isDataLoaded = true;
    },
    loadActiveOffer: (state, action) => {
      state.activeOffer = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      state.comments = action.payload;
    },
    loadFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    toggleFavorite: (state, action) => {
      state.activeOffer = action.payload;
    },
    loadNearbyOffers: (state, action) => {
      state.nearbyOffers = action.payload;
    },
  },
});

export const {changeSort, changeCity, loadOffers, loadActiveOffer, setLoading, loadComments, addComment, loadFavorites, toggleFavorite, loadNearbyOffers} = dataProcess.actions;
