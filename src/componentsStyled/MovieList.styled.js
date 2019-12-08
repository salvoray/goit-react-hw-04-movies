import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styledVar from '../variableStyle/styled-variables';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 1600px;
`;

export const List = styled(styledVar.List)`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 300px;
  padding: 10px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  font-weight: bold;
  color: #081c24;
  text-decoration: none;

  :hover,
  :focus {
    color: #02a965;
  }
`;

export const Img = styled.img`
  margin: 0 auto;
  width: 250px;
`;
