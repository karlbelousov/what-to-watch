import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Film, Review } from './film';
import { Genre } from './genre';
import { User } from './user';

export type SiteData = {
  films: Film[];
  isFilmsLoading: boolean;
  film: Film | null;
  isFilmLoading: boolean;
  similarFilms: Film[];
  reviews: Review[];
  promoFilm: Film | null;
}

export type SiteProcess = {
  genre: Genre;
  countFilms: number;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User['avatarUrl'];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
