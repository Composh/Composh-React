import styled from 'styled-components/native';


export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  min-height: 55px;
  margin-left: 8px;
  margin-right: 4px;
  margin-top: 6px;
  margin-bottom: 6px;
  padding-horizontal: 5px;
  padding-bottom: 4px;
`;



export const IconContent = styled.View`
  min-width: 35px;
  min-height: 40px;
  margin-right: 17px;
  align-items: center;
  justify-content: center;
`;



export const InfoContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ItemTitle = styled.Text`
  margin-bottom: 2px;
  font-size: 15px;
`;

export const ItemSubtitle = styled.Text`
  font-size: 12px;
`;

export const ItemLastTitle = styled.Text`
  margin-top: 4px;
  font-size: 12px;
`;



export const InfoOptions = styled.View`
  min-height: 50px;
  align-items: center;
  justify-content: center;
`;
