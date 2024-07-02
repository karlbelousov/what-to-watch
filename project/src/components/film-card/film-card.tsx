import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { AppRoute } from '../../const';

type FilmCardProps = Film & {
  onMouseMove: (id: number) => void;
  onMouseLeave: () => void;
}

function FilmCard({
  name,
  previewImage,
  id,
  onMouseMove,
  onMouseLeave
}: FilmCardProps) {
  const handleMouseMove = () => {
    onMouseMove(id);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img
          src={previewImage}
          alt={name}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
