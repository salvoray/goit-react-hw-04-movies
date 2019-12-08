import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import styledVar from '../variableStyle/styled-variables';

export const List = styled(styledVar.List)`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px;
  color: ${styledVar.mainTxtColor};
  font-weight: 500;
  text-decoration: none;

  :hover,
  :focus {
    color: #02a965;
  }
`;
