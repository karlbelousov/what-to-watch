import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, COUNT_FILMS, COUNT_FILMS_INC, genres } from '../const';
import { Film, Review } from '../types/film';
import { Genre } from '../types/genre';
import { fetchFilm, fetchFilms, fetchPromoFilm, fetchReviews, fetchSimilarFilms, fetchUserStatus, incCountFilms, loginUser, logoutUser, postReview, resetCountFilms, setGenre } from './action';
import { User } from '../types/user';

type State = {
  films: Film[];
  genre: Genre;
  countFilms: number;
  isFilmsLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User['avatarUrl'];
  film: Film | null;
  isFilmLoading: boolean;
  similarFilms: Film[];
  reviews: Review[];
  promoFilm: Film | null;
}

const initialState: State = {
  films: [],
  genre: genres[0],
  countFilms: COUNT_FILMS,
  isFilmsLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: '',
  film: null,
  isFilmLoading: false,
  similarFilms: [],
  reviews: [],
  promoFilm: null
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
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(fetchFilm.pending, (state) => {
      state.isFilmLoading = true;
    })
    .addCase(fetchFilm.fulfilled, (state, action) => {
      state.film = action.payload;
      state.isFilmLoading = false;
    })
    .addCase(fetchFilm.rejected, (state) => {
      state.isFilmLoading = false;
    })
    .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(fetchPromoFilm.fulfilled, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(postReview.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
});

export {reducer};
