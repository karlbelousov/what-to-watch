import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';
import { useAppDispatch } from '../../hooks';
import { resetCountFilms } from '../../store/site-process/site-process';


function SmallFilmCard({
  name,
  previewImage,
  id,
  previewVideoLink,
}: Film) {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const handleMouseMove = (filmId: number) => {
    setActiveFilm(filmId);
  };

  const handleMouseLeave = () => {
    setActiveFilm(null);
  };

  const handleCardTitleClick = () => {
    dispatch(resetCountFilms());
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseMove={() => handleMouseMove(id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        {(activeFilm !== id) ? (
          <img
            src={previewImage}
            alt={name}
            width={280}
            height={175}
          />
        ) : (
          <VideoPlayer
            previewImage={previewImage}
            previewVideoLink={previewVideoLink}
          />
        )}
      </div>
      <h3 className="small-film-card__title" onClick={handleCardTitleClick}>
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
