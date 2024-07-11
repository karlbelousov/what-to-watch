import FilmCard from '../../components/film-card/film-card';
import { SIMILAR_FILMS_COUNT } from '../../const';
import { useAppSelector } from '../../hooks';

type FilmCardListProps = {
  isLikeThis?: boolean;
}

function FilmCardList({isLikeThis = false}: FilmCardListProps) {
  const films = useAppSelector((state) => state.films);
  const activeGenre = useAppSelector((state) => state.genre);

  let filtersFilm = films;
  if (activeGenre !== ' All genres') {
    filtersFilm = films.filter((film) => film.genre === activeGenre);
  }

  return (
    <div className="catalog__films-list">
      {isLikeThis ? films.slice(0, SIMILAR_FILMS_COUNT).map((film) => (
        <FilmCard
          key={film.id}
          {...film}
        />
      )) : filtersFilm.map((film) => (
        <FilmCard
          key={film.id}
          {...film}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
