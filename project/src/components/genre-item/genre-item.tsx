import { Genre } from '../../types/genre';

type GenreItemProps = {
  name: Genre;
  isActive: boolean;
  onClick: (genre: Genre) => void;
}

function GenreItem({name, isActive, onClick}: GenreItemProps) {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <li className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`} onClick={handleClick}>
      <a className="catalog__genres-link">
        {name}
      </a>
    </li>
  );
}

export default GenreItem;
