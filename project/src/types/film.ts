import { User } from "./user";

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User
}

export type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type ReviewAuth = Pick<Review, 'comment' | 'rating'> & Pick<Film, 'id'>;
