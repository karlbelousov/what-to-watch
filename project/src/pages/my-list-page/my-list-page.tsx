import FilmLLst from '../../components/film-list/film-list';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/site-data/selectors';

function MyListPage(): JSX.Element {
  const films = useAppSelector(getFilms);

  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmLLst films={films} />
      </section>
      <footer className="page-footer">
        <Logo />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListPage;
