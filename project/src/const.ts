export enum AppRoute {
  Main = '/',
  Login = '/login',
  Logout = '/logout',
  MyList ='/mylist',
  Film = '/films',
  AddReview ='/review',
  Player = '/player',
  NotFound = '/404'
}

export enum HttpCode {
  NotFound = 404
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum ApiRoute {
  Films = '/films',
  Login = '/login',
  Comments = '/comments',
  Promo = '/promo'
}

export enum StoreSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
  UserProcess = 'USER_PROCESS',
}

export const STARS_COUNT = 10;
export const COUNT_FILMS = 8;
export const COUNT_FILMS_INC = 8;

export const genres = ['All genres', 'Comedy', 'Action', 'Crime', 'Adventure', 'Thriller', 'Fantasy', 'Drama'] as const;
