import { createSlice } from '@reduxjs/toolkit';
import { SiteData } from '../../types/state';
import { StoreSlice } from '../../const';
import { fetchFilm, fetchFilms, fetchPromoFilm, fetchReviews, fetchSimilarFilms, postReview } from '../action';

const initialState: SiteData = {
  films: [],
  isFilmsLoading: false,
  film: null,
  isFilmLoading: false,
  similarFilms: [],
  reviews: [],
  promoFilm: null
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchPromoFilm.fulfilled, (state, action) => {
      state.promoFilm = action.payload;
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
    .addCase(postReview.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
  },
});
