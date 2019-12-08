import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import styledVar from '../variableStyle/styled-variables';

// ================== MovieAdditionalInfo================
export const Header = styled.header`
  padding: 10px 20px 12px;
  box-shadow: ${styledVar.shadow};
`;

export const List = styled(styledVar.List)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px;
  color: #081c24;
  font-weight: 500;
  text-decoration: none;

  :hover,
  :focus {
    color: #02a965;
  }
`;
