import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {Offer, Comment} from '../types/offer';
import { addComment, loadActiveOffer, loadComments, loadOffers, requireAuthorization, setError, setLoading} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { errorHandle } from '../services/error-handle';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    } finally {
      store.dispatch(setLoading(false));
    }
  },
);

export const fetchActiveOfferAction = createAsyncThunk(
  'data/fetchActiveOffers',
  async (id: string | undefined) => {
    try {
      store.dispatch(setLoading(true));
      const {data} = await api.get<Offer>(`/hotels/${id}`);
      store.dispatch(loadActiveOffer(data));
    } catch (error) {
      errorHandle(error);
    } finally {
      store.dispatch(setLoading(false));
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (id: string | undefined) => {
    try {
      const {data} = await api.get<Comment[]>(`/comments/${id}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const addCommentAction = createAsyncThunk(
  'data/addComment',
  async ({comment, rating, hotelId}: any) => {
    try {
      const {data} = await api.post<any>(`/comments/${hotelId}`, {comment, rating});
      store.dispatch(addComment(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
