import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Spinner from '../../components/spinner/spinner';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchFilm, fetchReviews, fetchSimilarFilms } from '../../store/action';
import FilmLLst from '../../components/film-list/film-list';
import { Tab } from '../../types/tabs';
import Overview from '../../components/overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';
import Tabs from '../../components/tabs/tabs';
import { AppRoute, AuthorizationStatus } from '../../const';
import Header from '../../components/header/header';

function FilmPage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const isFilmLoading = useAppSelector((state) => state.isFilmLoading);
  const film = useAppSelector((store) => store.film);
  const similarFilms = useAppSelector((store) => store.similarFilms);
  const reviews = useAppSelector((store) => store.reviews);
  const authorisationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    const { id } = params;
    if (id) {
      const parseId = Number(id);
      dispatch(fetchFilm(parseId));
      dispatch(fetchSimilarFilms(parseId));
      dispatch(fetchReviews(parseId));
    }
  }, [params, dispatch]);

  if (isFilmLoading) {
    return <Spinner />;
  }

  if (!film) {
    return null;
  }

  const { name, genre, released, backgroundImage, posterImage, id } = film;

  const tabs: Tab[] = [
    {
      title: 'Overview',
      content: <Overview {...film} />,
    },
    {
      title: 'Details',
      content: <Details {...film} />,
    },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} />,
    },
  ];

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
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
                {authorisationStatus === AuthorizationStatus.Auth && (
                  <Link to={`${AppRoute.Film}/${id}${AppRoute.AddReview}`} className="btn film-card__button">
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={posterImage}
                alt="The Grand Budapest Hotel poster"
                width={218}
                height={327}
              />
            </div>
            <Tabs tabs={tabs} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmLLst films={similarFilms} />
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

export default FilmPage;
