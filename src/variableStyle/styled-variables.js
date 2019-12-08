import styled from 'styled-components';

const mainTxtColor = '#fff';

const mainThemeColor = '#081c24';

const shadow = '0px 2px 4px 0px rgba(148, 148, 148, 0.6)';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LightContainer = styled.div`
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(2, 169, 101, 1) 0%,
    rgba(8, 28, 36, 1) 50%
  );
`;

const Button = styled.button`
  display: inline-block;
  min-width: 130px;
  height: 40px;
  padding: 0px 8px 2px;
  border: 0;
  background-color: ${mainThemeColor};
  border-radius: 2px;
  transition: all 200ms ease;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #02a965;
  }
`;

const LightButton = styled(Button)`
  min-width: 80px;
  height: 20px;
  padding-bottom: 4px;
  background-color: #081c24;
  font-size: 14px;
  color: ${mainTxtColor};
  outline: none;

  :hover,
  :focus {
    background-color: #02a965;
  }
`;

export default {
  Button,
  LightButton,
  LightContainer,
  List,
  mainTxtColor,
  mainThemeColor,
  shadow,
};
