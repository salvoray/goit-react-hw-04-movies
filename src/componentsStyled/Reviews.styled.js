import styled from 'styled-components';
import styledVar from '../variableStyle/styled-variables';

// =========================== Rewievs ============================

export const Container = styled(styledVar.LightContainer)``;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 1000px;
`;

export const List = styled(styledVar.List)`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Name = styled.h4`
  margin: 0 0 10px;
`;

export const FadedWrapper = styled.div`
  position: relative;
  margin: 0 0 10px;
  height: 3.6em;
  line-height: 1.2em;
  overflow: hidden;

  :after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: linear-gradient(
      to right,
      rgba(114, 108, 110, 0),
      rgba(114, 108, 110, 1) 50%
    );
  }
`;

export const Text = styled.p`
  margin: 0 0 10px;
  line-height: 1.2em;
`;
