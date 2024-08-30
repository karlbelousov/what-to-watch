import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { fetchFilms, fetchPromoFilm, fetchUserStatus } from './action';
import { history } from './middlewares/hisroty';
import { rootReducer } from './root-reducer';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
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
