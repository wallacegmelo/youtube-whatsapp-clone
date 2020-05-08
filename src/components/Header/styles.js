import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 72px;

  background: #075e54;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
  margin-left: 10px;
  color: #FFF;
`;

export const Options = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 65px;
  margin: 0 10px;
`;