import React from 'react';
import PropTypes from 'prop-types';
import movieApi from '../../services/movies-api';
import {
  Section,
  Wrapper,
  PercentWrapper,
  PercentContainer,
  Text,
  Circle,
  ActiveBorder,
} from '../../componentsStyled/MainMovieInfo.styled';

const MovieMainInfo = ({ movie }) => {
  const releaseYear = movie.release_date.slice(0, 4);
  const score = movie.vote_average * 10;

  const posterImg = movie.poster_path
    ? movieApi.imgSource + movie.poster_path
    : movieApi.MissingImg;

  return (
    <Section>
      <img src={posterImg} alt={`${movie.title} movie poster`} width="300" />

      <Wrapper>
        <div>
          <h2>{`${movie.title} (${releaseYear})`}</h2>
          <PercentWrapper>
            <p>User score</p>
            <PercentContainer>
              <ActiveBorder percent={score}>
                <Circle>
                  <Text>{score}%</Text>
                </Circle>
              </ActiveBorder>
            </PercentContainer>
          </PercentWrapper>
        </div>

        <div>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>

        <div>
          <h4>Genres</h4>
          <p>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </Wrapper>
    </Section>
  );
};

MovieMainInfo.propTypes = {
  movie: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }),
    ),
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};

export default MovieMainInfo;
