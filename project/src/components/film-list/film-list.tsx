import { useAppSelector } from '../../hooks';
import { getIsFilmsLoading } from '../../store/site-data/selectors';
import { Film } from '../../types/film';
import FilmCard from '../small-film-card/small-film-card';
import Spinner from '../spinner/spinner';

type FilmListProps = {
  films: Film[];
}

function FilmLLst({films}: FilmListProps) {
  const isFilmsLoading = useAppSelector(getIsFilmsLoading);

  if (isFilmsLoading) {
    return <Spinner />;
  }

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} {...film} />
      ))}
    </div>
  );
}

export default FilmLLst;
