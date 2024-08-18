type Level = 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome';

export const getFilmLevel = (rating: number):string => {
  let level: Level = 'Awesome';

  if (rating >= 0 && rating < 3) {
    level = 'Bad';
  }

  if (rating >= 3 && rating < 5 ) {
    level = 'Normal';
  }

  if (rating >= 5 && rating < 8 ) {
    level = 'Good';
  }

  if (rating >= 8 && rating < 10 ) {
    level = 'Very good';
  }

  return level;
};
