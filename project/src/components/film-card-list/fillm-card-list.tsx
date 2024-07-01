import { useState } from 'react';
import FilmCard from '../../components/film-card/film-card';
import { Film } from '../../types/film';

type FilmCardListProps = {
  films: Film[];
}

function FilmCardList({films}: FilmCardListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const handleMouseMove = (id:number) => {
    setActiveFilm(id);
  };

  const handleMouseLeave = () => {
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          {...film}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
