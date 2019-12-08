import React from 'react';
import PropTypes from 'prop-types';
import routes from '../../routes';
import movieApi from '../../services/movies-api';
import {
  Wrapper,
  List,
  ListItem,
  StyledLink,
  Img,
} from '../../componentsStyled/MovieList.styled';

const MoviesList = ({ movies, location }) => {
  return (
    <Wrapper>
      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <StyledLink
              to={{
                state: { from: location },
                pathname: `${routes.MOVIES}/${movie.id}`,
              }}
            >
              <Img
                src={`${
                  movie.poster_path
                    ? movieApi.imgSource + movie.poster_path
                    : movieApi.MissingImg
                }`}
                alt={`${movie.title} movie poster`}
              />
              {movie.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
    .isRequired,
  location: PropTypes.shape().isRequired,
};

export default MoviesList;
