import { StoreSlice } from '../../const';
import { Genre } from '../../types/genre';
import { State } from '../../types/state';

export const getGenre = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): Genre => SITE_PROCESS.genre;
export const getCountFilms = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): number => SITE_PROCESS.countFilms;
