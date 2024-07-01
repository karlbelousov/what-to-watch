import { Film } from '../../types/film';

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
        <a className="small-film-card__link" href="film-page.html">
          {name}
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;
