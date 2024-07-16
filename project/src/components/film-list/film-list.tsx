import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function FilmLLst({films}: FilmListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} {...film} />
      ))}
    </div>
  );
}

export default FilmLLst;
