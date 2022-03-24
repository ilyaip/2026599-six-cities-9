import { createAction } from '@reduxjs/toolkit';

export const incrementStep = createAction('game/incrementStep');

// export const changeCity = createAction('city/change');
export const fillOfferList = createAction('city/fillOfferList');
export const changeCity = createAction('city/change', (value) => ({
  payload: value,
}));
