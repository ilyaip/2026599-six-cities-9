import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';

type InitalState = {
  authorizationStatus: AuthorizationStatus,
  error: string,
}

const initialState: InitalState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {requireAuthorization, setError} = userProcess.actions;
