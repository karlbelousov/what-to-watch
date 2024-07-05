import FilmCard from '../../components/film-card/film-card';
import { Film } from '../../types/film';

type FilmCardListProps = {
  films: Film[];
}

function FilmCardList({films}: FilmCardListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          {...film}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
