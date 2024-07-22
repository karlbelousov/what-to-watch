export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList ='/mylist',
  Film = '/films',
  AddReview ='/review',
  Player = '/player',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum ApiRoute {
  Films = '/films'
}

export const STARS_COUNT = 10;
export const COUNT_FILMS = 8;
export const COUNT_FILMS_INC = 8;

export const genres = ['All genres', 'Comedy', 'Action', 'Crime', 'Adventure', 'Thriller', 'Fantasy', 'Drama'] as const;
