import styled from 'styled-components';
import styledVar from '../variableStyle/styled-variables';

// ================== Cast================

export const Container = styled(styledVar.LightContainer)``;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 1400px;
`;
export const List = styled(styledVar.List)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
// =======================================================
export const ListItem = styled.li`
  width: 200px;
  padding: 10px;
  text-align: center;
`;

export const Img = styled.img`
  margin: 0 auto;
`;

export const Text = styled.p`
  margin: 0;
`;
