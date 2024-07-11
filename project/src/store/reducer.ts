import { createReducer } from '@reduxjs/toolkit';
import { genres } from '../const';
import { Film } from '../types/film';
import { Genre } from '../types/genre';
import { setFilms, setGenre } from './action';

type State = {
  films: Film[];
  genre: Genre;
}

const initialState: State = {
  films: [],
  genre: genres[0]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    });
});

export {reducer};
