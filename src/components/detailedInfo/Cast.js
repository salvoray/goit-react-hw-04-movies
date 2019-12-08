import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import movieApi from '../../services/movies-api';
import {
  Container,
  Wrapper,
  List,
  ListItem,
  Img,
  Text,
} from '../../componentsStyled/Cast.styled';

export default class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = {
    actors: [],
    error: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchMovieCredits();
  }

  fetchMovieCredits = async () => {
    const { match } = this.props;
    const { movieId } = match.params;

    try {
      const actors = await movieApi.getMovieCredits(movieId);

      this.setState({ actors, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    const { actors, error, loading } = this.state;

    return (
      <Container>
        <Wrapper>
          {error && <p>{error.message}</p>}

          {loading && <p>Loading...</p>}

          {actors.length > 0 && (
            <List>
              {actors.map(actor => {
                const actorImg = actor.profile_path
                  ? movieApi.imgSource + actor.profile_path
                  : movieApi.MissingImg;

                return (
                  <ListItem key={uuidv1()}>
                    <Img src={actorImg} alt={actor.name} width="100" />
                    <Text>{actor.name}</Text>
                    <Text>Character: {actor.character}</Text>
                  </ListItem>
                );
              })}
            </List>
          )}
        </Wrapper>
      </Container>
    );
  }
}
