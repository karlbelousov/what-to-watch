import { createReducer } from '@reduxjs/toolkit';
import { COUNT_FILMS, COUNT_FILMS_INC, genres } from '../const';
import { Film } from '../types/film';
import { Genre } from '../types/genre';
import { incCountFilms, resetCountFilms, setGenre } from './action';
import { fetchFilms } from './api-actions';

type State = {
  films: Film[];
  genre: Genre;
  countFilms: number;
  isFilmsLoading: boolean;
}

const initialState: State = {
  films: [],
  genre: genres[0],
  countFilms: COUNT_FILMS,
  isFilmsLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(fetchFilms.pending, (state) => {
      state.isFilmsLoading = true;
    })
    .addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
      state.isFilmsLoading = false;
    })
    .addCase(fetchFilms.rejected, (state) => {
      state.isFilmsLoading = false;
    })
    .addCase(incCountFilms, (state) => {
      state.countFilms = state.countFilms + COUNT_FILMS_INC;
    })
    .addCase(resetCountFilms, (state) => {
      state.countFilms = COUNT_FILMS;
    });
});

export {reducer};
