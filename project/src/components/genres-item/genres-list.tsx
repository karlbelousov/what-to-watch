import { genres } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setGenre } from '../../store/action';
import { Genre } from '../../types/genre';
import GenreItem from '../genre-item/genre-item';

function GenresList() {
  const activeGenre = useAppSelector((state) => state.genre);
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
