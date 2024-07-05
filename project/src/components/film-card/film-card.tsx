import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';


function FilmCard({
  name,
  previewImage,
  id,
  previewVideoLink,
}: Film) {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const handleMouseMove = (filmId: number) => {
    setActiveFilm(filmId);
  };

  const handleMouseLeave = () => {
    setActiveFilm(null);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseMove={() => handleMouseMove(id)}
      onMouseLeave={handleMouseLeave}
    >
      {(activeFilm !== id) ? (
        <div className="small-film-card__image">
          <img
            src={previewImage}
            alt={name}
            width={280}
            height={175}
          />
        </div>
      ) : (
        <VideoPlayer
          previewImage={previewImage}
          previewVideoLink={previewVideoLink}
          activeFilm={activeFilm}
        />
      )}
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
