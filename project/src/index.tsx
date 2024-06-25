import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const FILMS_COUNT = 20;

const film = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmsCount={FILMS_COUNT} film={film} />
  </React.StrictMode>,
);
