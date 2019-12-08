import styled from 'styled-components';
import styledVar from '../variableStyle/styled-variables';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(8, 28, 36, 1) 50%,
    rgba(2, 169, 101, 1) 100%
  );
  box-shadow: ${styledVar.shadow};
`;

export const Wrapper = styled.div`
  padding-left: 20px;
  max-width: 700px;
`;

export const PercentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PercentContainer = styled.div`
  width: 56px;
  height: 56px;
  margin-left: 10px;
`;

export const Text = styled.span`
  top: 8px;
  position: relative;
  font-size: 16px;
`;

export const Circle = styled.div`
  position: relative;
  top: 8px;
  left: 8px;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${styledVar.mainThemeColor};
`;

export const activeColor = '#61d161';
export const bgColor = '#fff';

function getGradient({ percent }) {
  const deg = (percent * 360) / 100;

  if (deg <= 180) {
    return `${90 + deg}deg, transparent 50%, ${bgColor} 50%`;
  }

  return `${deg - 90}deg, transparent 50%, ${activeColor} 50%`;
}

export const ActiveBorder = styled.div`
  position: relative;
  text-align: center;
  width: 56px;
  height: 56px;
  border-radius: 100%;

  background-color: ${activeColor};
  background-image: linear-gradient(${getGradient}),
    linear-gradient(90deg, ${bgColor} 50%, transparent 50%);
`;
