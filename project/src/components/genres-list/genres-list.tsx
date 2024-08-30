import { genres } from '../../const';
import { useAppDispatch} from '../../hooks';
import { setGenre } from '../../store/site-process/site-process';

import { Genre } from '../../types/genre';
import GenreItem from '../genre-item/genre-item';

type GenresListProps = {
  activeGenre: Genre;
}

function GenresList({activeGenre}: GenresListProps) {
  const dispatch = useAppDispatch();

  const handleClick = (genre: Genre) => {
    dispatch(setGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <GenreItem key={genre} name={genre} isActive={genre === activeGenre} onClick={handleClick} />
      ))}
    </ul>
  );
}

export default GenresList;
