import FilmLLst from '../../components/film-list/film-list';
import GenresList from '../../components/genres-list/genres-list';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import ShowMore from '../../components/show-more/show-more';
import { useAppSelector } from '../../hooks';

function MainPage() {
  const activeGenre = useAppSelector((state) => state.genre);
  const countFilms = useAppSelector((state) => state.countFilms);
  let films = useAppSelector((state) => state.films);

  if (activeGenre !== 'All genres') {
    films = films.filter((film) => film.genre === activeGenre);
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">Title</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Genre</span>
                <span className="film-card__year">1920</span>
              </p>
              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList activeGenre={activeGenre} />
          <FilmLLst films={films.slice(0, countFilms)} />
          {(films.length > countFilms) && <ShowMore />}
        </section>
        <footer className="page-footer">
          <Logo />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
