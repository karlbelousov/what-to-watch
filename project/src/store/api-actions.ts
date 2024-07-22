import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AxiosInstance } from 'axios';
import { Action } from './action';
import { ApiRoute } from '../const';

export const fetchFilms = createAsyncThunk<Film[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_FILMS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Film[]>(ApiRoute.Films);

    return data;
  });
