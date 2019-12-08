import React from 'react';
import routes from '../../routes';
import { List, StyledLink } from '../../componentsStyled/Navigation.styled';

const Navigation = () => (
  <nav>
    <List>
      <li>
        <StyledLink exact to={routes.HOME} activeStyle={{ color: '#02a965' }}>
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to={routes.MOVIES} activeStyle={{ color: '#02a965' }}>
          Movies
        </StyledLink>
      </li>
    </List>
  </nav>
);

export default Navigation;
