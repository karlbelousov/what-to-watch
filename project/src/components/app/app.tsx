import MainPage from '../../pages/main-page/main-page';


type AppProps = {
  filmsCount: number;
  film: {
    title: string;
    genre: string;
    year: number;
  };
}

function App({filmsCount, film}: AppProps): JSX.Element {
  return (
    <MainPage filmsCount={filmsCount} film={film} />
  );
}

export default App;
