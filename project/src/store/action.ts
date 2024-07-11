import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genre';
import { Film } from '../types/film';

export const setGenre = createAction<Genre>('genre/set');
export const setFilms = createAction<Film[]>('films/set');
