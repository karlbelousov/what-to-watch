import FilmCard from '../../components/film-card/film-card';
import { SIMILAR_FILMS_COUNT } from '../../const';
import { Film } from '../../types/film';

type FilmCardListProps = {
  films: Film[];
  isLikeThis?: boolean;
}

function FilmCardList({films, isLikeThis = false}: FilmCardListProps) {
  return (
    <div className="catalog__films-list">
      {isLikeThis ? films.slice(0, SIMILAR_FILMS_COUNT).map((film) => (
        <FilmCard
          key={film.id}
          {...film}
        />
      )) : films.map((film) => (
        <FilmCard
          key={film.id}
          {...film}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
