import { useAppDispatch } from '../../hooks';
import { incCountFilms } from '../../store/action';

function ShowMore() {
  const dispatch = useAppDispatch();

  const handleShowMoreButtonClick = () => {
    dispatch(incCountFilms());
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleShowMoreButtonClick}>
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
