import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Film, Review, ReviewAuth } from '../types/film';
import { AxiosError, AxiosInstance } from 'axios';
import { ApiRoute, AppRoute, HttpCode } from '../const';
import { User, UserAuth } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { AppDispatch } from '../types/state';

export const Action = {
  FETCH_PROMO_FILM: 'films/tetch-promo-film',
  FETCH_FILMS: 'films/fetch',
  FETCH_FILM: 'film/fetch',
  FETCH_SIMILAR_FILMS: 'films/fetch-similar',
  FETCH_REWIEWS: 'film/fetch-rewiews',
  POST_REVIEW: 'review/post-review',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirect-to-route',
};

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);
export const fetchFilms = createAsyncThunk<Film[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_FILMS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Film[]>(ApiRoute.Films);

    return data;
  });

export const fetchFilm = createAsyncThunk<Film, Film['id'], {dispatch: AppDispatch; extra: AxiosInstance}>(
  Action.FETCH_FILM,
  async (id, {dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Film>(`${ApiRoute.Films}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }

      return Promise.reject(error);
    }
  });

export const fetchSimilarFilms = createAsyncThunk<Film[], Film['id'], { extra: AxiosInstance }>(
  Action.FETCH_SIMILAR_FILMS,
  async (id, { extra: api }) => {
    const { data } = await api.get<Film[]>(`${ApiRoute.Films}/${id}/similar`);

    return data;
  });

export const fetchReviews = createAsyncThunk<Review[], Film['id'], { extra: AxiosInstance }>(
  Action.FETCH_REWIEWS,
  async (id, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${ApiRoute.Comments}/${id}`);

    return data;
  });

export const postReview = createAsyncThunk<Review[], ReviewAuth, { extra: AxiosInstance }>(
  Action.POST_REVIEW,
  async ({ id, comment, rating }, { extra: api }) => {
    const { data } = await api.post<Review[]>(`${ApiRoute.Comments}/${id}`, { comment, rating });

    return data;
  });

export const fetchPromoFilm = createAsyncThunk<Film, undefined, {extra: AxiosInstance}>(
  Action.FETCH_PROMO_FILM,
  async (_, { extra: api }) => {
    const { data } = await api.get<Film>(ApiRoute.Promo);

    return data;
  });

export const fetchUserStatus = createAsyncThunk<User, undefined, { extra: AxiosInstance }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra: api }) => {
    const { data } = await api.get<User>(ApiRoute.Login);

    return data;
  });

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, { extra: AxiosInstance; dispatch: AppDispatch }>(
  Action.LOGIN_USER,
  async ({ email, password }, {dispatch, extra: api }) => {
    const { data } = await api.post<User>(ApiRoute.Login, { email, password });
    const {token, avatarUrl} = data;
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
    return avatarUrl;
  });

export const logoutUser = createAsyncThunk<void, undefined, { extra: AxiosInstance}>(
  Action.LOGOUT_USER,
  async (_arg, {extra: api}) => {
    await api.delete(AppRoute.Logout);
    dropToken();
  });
