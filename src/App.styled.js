import styled from 'styled-components';
import styledVar from './variableStyle/styled-variables';

const Header = styled.header`
  padding: 10px 20px 12px;
  box-shadow: ${styledVar.shadow};
  background: radial-gradient(
    circle,
    rgba(2, 169, 101, 1) 0%,
    rgba(8, 28, 36, 1) 70%
  );
`;

export default Header;
