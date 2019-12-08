import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import movieApi from '../../services/movies-api';
import styledVar from '../../variableStyle/styled-variables';
import {
  Container,
  Wrapper,
  List,
  ListItem,
  Name,
  FadedWrapper,
  Text,
} from '../../componentsStyled/Reviews.styled';

const TextDisplayBtn = styled(styledVar.LightButton)``;

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = {
    reviews: [],
    error: null,
    loading: true,
    reviewsToOpen: [],
  };

  componentDidMount() {
    this.fetchMovieReviews();
  }

  fetchMovieReviews = async () => {
    const { match } = this.props;
    const { movieId } = match.params;

    try {
      const reviews = await movieApi.getMovieReviews(movieId);

      this.setState({ reviews, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  openText = id => {
    this.setState(prev => ({
      reviewsToOpen: [...prev.reviewsToOpen, id],
    }));
  };

  hideText = id => {
    this.setState(prev => ({
      reviewsToOpen: prev.reviewsToOpen.filter(reviewId => reviewId !== id),
    }));
  };

  render() {
    const { reviews, error, loading, reviewsToOpen } = this.state;

    return (
      <Container>
        <Wrapper>
          {error && <p>{error.message}</p>}

          {loading && <p>Loading...</p>}

          {reviews.length === 0 && (
            <p>We don`t have any reviews for this movie yet</p>
          )}

          {reviews.length > 0 && (
            <List>
              {reviews.map(review => (
                <ListItem key={review.id}>
                  <Name>Author: {review.author}</Name>

                  {review.content.length <= 400 && (
                    <Text>{review.content}</Text>
                  )}

                  {review.content.length > 400 &&
                    reviewsToOpen.includes(review.id) && (
                      <>
                        <Text>{review.content}</Text>

                        <TextDisplayBtn
                          type="button"
                          onClick={() => this.hideText(review.id)}
                        >
                          Less
                        </TextDisplayBtn>
                      </>
                    )}

                  {review.content.length > 400 &&
                    !reviewsToOpen.includes(review.id) && (
                      <>
                        <FadedWrapper>
                          <Text>{review.content}</Text>
                        </FadedWrapper>

                        <TextDisplayBtn
                          type="button"
                          onClick={() => this.openText(review.id)}
                        >
                          More
                        </TextDisplayBtn>
                      </>
                    )}
                </ListItem>
              ))}
            </List>
          )}
        </Wrapper>
      </Container>
    );
  }
}
