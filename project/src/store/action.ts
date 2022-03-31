import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';

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

