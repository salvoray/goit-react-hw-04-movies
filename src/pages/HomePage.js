import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../components/mainInfo/MoviesList';
import movieApi from '../services/movies-api';
import { Container, H2 } from '../componentsStyled/HomePage.styled';

export default class HomePage extends Component {
  static propTypes = {
    location: PropTypes.shape().isRequired,
  };

  state = {
    trendingMovies: [],
    error: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies = async () => {
    try {
      const trendingMovies = await movieApi.getTrending();

      this.setState({ trendingMovies, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    const { trendingMovies, error, loading } = this.state;
    const { location } = this.props;

    return (
      <Container>
        <H2>Trending today</H2>

        {error && <p>{error.message}</p>}

        {loading && <p>Loading...</p>}

        {trendingMovies.length > 0 && (
          <MoviesList movies={trendingMovies} location={location} />
        )}
      </Container>
    );
  }
}
