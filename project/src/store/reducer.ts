import { createReducer } from '@reduxjs/toolkit';
import { COUNT_FILMS, COUNT_FILMS_INC, genres } from '../const';
import { Film } from '../types/film';
import { Genre } from '../types/genre';
import { incCountFilms, resetCountFilms, setFilms, setGenre } from './action';

type State = {
  films: Film[];
  genre: Genre;
  countFilms: number;
}

const initialState: State = {
  films: [],
  genre: genres[0],
  countFilms: COUNT_FILMS
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(incCountFilms, (state) => {
      state.countFilms = state.countFilms + COUNT_FILMS_INC;
    })
    .addCase(resetCountFilms, (state) => {
      state.countFilms = COUNT_FILMS;
    });
});

export {reducer};
