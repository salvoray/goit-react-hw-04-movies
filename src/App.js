import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import GlobalStyle from './variableStyle/globalStyle';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Navigation from './components/mainInfo/Navigation';
import routes from './routes';
import Header from './App.styled';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header>
        <Navigation />
      </Header>
      <Switch>
        <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
        <Route path={routes.MOVIES} component={MoviesPage} />
        <Route path={routes.HOME} component={HomePage} />
        <Redirect to={routes.HOME} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
