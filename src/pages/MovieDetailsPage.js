import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainInfo from '../components/mainInfo/MainInfo';
import DetailInfo from '../components/detailedInfo/DetailedInfo';
import movieApi from '../services/movies-api';
import routes from '../routes';
import { Container, Button } from '../componentsStyled/MovieDetails.styled';

export default class MovieDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
    match: PropTypes.shape().isRequired,
  };

  state = {
    movie: null,
    error: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchMovieDetails();
  }

  fetchMovieDetails = async () => {
    const { match } = this.props;
    const { movieId } = match.params;

    try {
      const movie = await movieApi.getMovieDetails(movieId);

      this.setState({ movie, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  handleGoBack = () => {
    const { history, location } = this.props;
    const { state } = location;

    if (state) {
      history.push(state.from);
      return;
    }

    history.push(routes.HOME);
  };

  render() {
    const { movie, error, loading } = this.state;
    const { match, location } = this.props;

    return (
      <Container>
        <Button type="button" onClick={this.handleGoBack}>
          <span role="img" aria-label="Left Arrow">
            &#x2B05;
          </span>
          <span> Go back</span>
        </Button>

        {error && <p>{error.message}</p>}

        {loading && <p>Loading...</p>}

        {movie && (
          <article>
            <MainInfo movie={movie} />

            <DetailInfo
              originPath={match.path}
              originUrl={match.url}
              location={location.state ? location.state.from : '/'}
            />
          </article>
        )}
      </Container>
    );
  }
}
