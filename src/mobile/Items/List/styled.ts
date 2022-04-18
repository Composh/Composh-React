import styled from 'styled-components/native';



export interface IProps {
  borderBottomColor?: string;
  borderBottomWidth?: number;
}


export const ItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 55px;
  margin-top: 6px;
  margin-left: 8px;
  margin-right: 4px;
  margin-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 4px;
  border-bottom-color: ${(props: IProps) => props.borderBottomColor};
  border-bottom-width: ${(props: IProps) => props.borderBottomColor ? props.borderBottomWidth : 0}px;
`;



export const IconContent = styled.View`
  min-width: 35px;
  min-height: 40px;
  margin-right: 17px;
  align-items: center;
  justify-content: center;
`;



export const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
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
  display: flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
`;
