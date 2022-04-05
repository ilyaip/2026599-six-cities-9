import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Offer, Comment } from '../types/offer';

export const fillOfferList = createAction('city/fillOfferList');
export const changeCity = createAction('city/change', (value) => ({
  payload: value,
}));
export const changeSort = createAction('city/changeSort', (value) => ({
  payload: value,
}));
export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('game/setError');

export const loadActiveOffer = createAction<Offer>('data/loadActiveOffer');

export const loadComments = createAction<Comment[]>('data/loadComments');

export const loadFavorites = createAction<Offer[]>('data/loadFavorites');

export const addComment = createAction<any>('data/addComment');

export const setLoading = createAction<boolean>('data/setLoading');

export const toggleFavorite = createAction<Offer>('data/toggleFavorite');
