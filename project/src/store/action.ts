import { createAction } from '@reduxjs/toolkit';

export const fillOfferList = createAction('city/fillOfferList');
export const changeCity = createAction('city/change', (value) => ({
  payload: value,
}));
