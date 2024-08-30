import type { State } from '../../types/state';
import {StoreSlice } from '../../const';
import { Film, Review } from '../../types/film';

export const getIsFilmsLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFilmsLoading;
export const getFilms = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Film[] => SITE_DATA.films;

export const getIsFilmLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFilmLoading;
export const getFilm = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Film | null => SITE_DATA.film;

export const getPromoFilm = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Film | null => SITE_DATA.promoFilm;
export const getSimilarFims = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Film[] => SITE_DATA.similarFilms;
export const getReviews = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Review[] => SITE_DATA.reviews;
