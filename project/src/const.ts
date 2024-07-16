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

export const STARS_COUNT = 10;

export const genres = [' All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'] as const;
