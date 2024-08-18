import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from '../services/api';
import { fetchFilms, fetchPromoFilm, fetchUserStatus } from './action';
import { history } from './middlewares/hisroty';

const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(history),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchPromoFilm());
store.dispatch(fetchFilms());
