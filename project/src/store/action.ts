import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genre';

export const Action = {
  SET_GENRE: 'genre/set',
  FETCH_FILMS: 'films/fetch',
  INC_COUNT_FILM: 'count-films/inc',
  RESET_COUNT_FILM: 'count-films/reset'
};

export const setGenre = createAction<Genre>(Action.SET_GENRE);
export const incCountFilms = createAction(Action.INC_COUNT_FILM);
export const resetCountFilms = createAction(Action.RESET_COUNT_FILM);
