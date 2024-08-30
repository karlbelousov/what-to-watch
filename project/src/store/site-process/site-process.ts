import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { COUNT_FILMS, COUNT_FILMS_INC, StoreSlice, genres } from '../../const';
import { SiteProcess } from '../../types/state';
import { Genre } from '../../types/genre';

const initialState: SiteProcess = {
  genre: genres[0],
  countFilms: COUNT_FILMS
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<Genre>) => {
      state.genre = action.payload;
    },
    incCountFilms: (state) => {
      state.countFilms = state.countFilms + COUNT_FILMS_INC;
    },
    resetCountFilms: (state) => {
      state.countFilms = COUNT_FILMS;
    }
  },
});

export const { setGenre, incCountFilms, resetCountFilms } = siteProcess.actions;
