import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, COUNT_FILMS, COUNT_FILMS_INC, genres } from '../const';
import { Film } from '../types/film';
import { Genre } from '../types/genre';
import { fetchFilms, fetchUserStatus, incCountFilms, loginUser, resetCountFilms, setGenre } from './action';
import { User } from '../types/user';

type State = {
  films: Film[];
  genre: Genre;
  countFilms: number;
  isFilmsLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User['avatarUrl'];
}

const initialState: State = {
  films: [],
  genre: genres[0],
  countFilms: COUNT_FILMS,
  isFilmsLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: ''
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
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload.avatarUrl;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});

export {reducer};
