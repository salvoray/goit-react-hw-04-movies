import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../components/mainInfo/MoviesList';
import movieApi from '../services/movies-api';
import {
  Container,
  Form,
  Input,
  SearchBtn,
} from '../componentsStyled/MoviesPage.styled';

export default class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
  };

  state = {
    query: '',
    movies: [],
    error: null,
    loading: false,
    noMatch: false,
  };

  componentDidMount() {
    const { location } = this.props;

    const query = new URLSearchParams(location.search).get('query');

    if (query) {
      this.setState({ query }, this.fetchMoviesByQuery);
    }
  }

  handleInput = e => {
    this.setState({ query: e.target.value });
  };

  handleSearch = e => {
    e.preventDefault();

    const { history, location } = this.props;
    const { query } = this.state;

    history.push({
      ...location,
      search: `query=${query}`,
    });

    this.setState({ loading: true }, this.fetchMoviesByQuery);
  };

  fetchMoviesByQuery = async () => {
    const { query } = this.state;

    try {
      const movies = await movieApi.searchMovies(query);

      if (movies.length > 0) {
        this.setState({ movies, query: '', loading: false, noMatch: false });
      } else {
        this.setState({ movies, loading: false, noMatch: true });
      }
    } catch (error) {
      this.setState({ error, loading: false, noMatch: false });
    }
  };

  render() {
    const { query, movies, error, loading, noMatch } = this.state;
    const { location } = this.props;
    return (
      <Container>
        <Form onSubmit={this.handleSearch}>
          <Input
            type="text"
            value={query}
            onChange={this.handleInput}
            placeholder="Search movies by name..."
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </Form>

        {error && <p>{error.message}</p>}

        {loading && <p>Loading...</p>}

        {movies.length > 0 && (
          <MoviesList movies={movies} location={location} />
        )}

        {noMatch && <p>Your search did not match any movies.</p>}
      </Container>
    );
  }
}
