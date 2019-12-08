import styled from 'styled-components';
import styledVar from '../variableStyle/styled-variables';

export const Container = styled.section`
  margin: 0 auto;
  padding: 20px 40px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  height: 40px;
  min-width: 250px;
  border-radius: 3px 0 0 3px;
  border-width: 1px;
  border-color: #544545;
  text-indent: 0.4rem;
  outline-color: #6aaf6a;
  font-size: 16px;

  ::placeholder {
    font-size: 14px;
  }
`;

export const SearchBtn = styled(styledVar.Button)`
  border-radius: 0 3px 3px 0;
`;
