import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cast from './Cast';
import Reviews from './Reviews';
import {
  Header,
  List,
  StyledLink,
} from '../../componentsStyled/DetailedlInfo.styled';

const MovieAdditionalInfo = ({ originPath, originUrl, location }) => (
  <section>
    <Header>
      <List>
        <li>
          <StyledLink
            to={{
              state: { from: location },
              pathname: `${originUrl}/cast`,
            }}
            activeStyle={{ color: '#02a965' }}
          >
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to={{
              state: { from: location },
              pathname: `${originUrl}/reviews`,
            }}
            activeStyle={{ color: '#02a965' }}
          >
            Reviews
          </StyledLink>
        </li>
      </List>
    </Header>
    <Route path={`${originPath}/cast`} component={Cast} />
    <Route path={`${originPath}/reviews`} component={Reviews} />
  </section>
);

MovieAdditionalInfo.propTypes = {
  originPath: PropTypes.string.isRequired,
  originUrl: PropTypes.string.isRequired,
  location: PropTypes.shape().isRequired,
};

export default MovieAdditionalInfo;
