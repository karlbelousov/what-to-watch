import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Genre } from '../types/genre';
import { Film } from '../types/film';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute } from '../const';
import { User, UserAuth } from '../types/user';
import { saveToken } from '../services/token';
import { AppDispatch } from '../types/state';

export const Action = {
  SET_GENRE: 'genre/set',
  FETCH_FILMS: 'films/fetch',
  INC_COUNT_FILM: 'count-films/inc',
  RESET_COUNT_FILM: 'count-films/reset',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login',
  REDIRECT_TO_ROUTE: 'user/redirect-to-route'
};

export const setGenre = createAction<Genre>(Action.SET_GENRE);
export const incCountFilms = createAction(Action.INC_COUNT_FILM);
export const resetCountFilms = createAction(Action.RESET_COUNT_FILM);
export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);

export const fetchFilms = createAsyncThunk<Film[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_FILMS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Film[]>(ApiRoute.Films);

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
