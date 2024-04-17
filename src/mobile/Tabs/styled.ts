import styled from 'styled-components/native';



export interface IProps {
  height?: number | string;
  backgroundColor?: string;
  color?: string;
}



// Tab Styles

export const TabContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const TabIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
`;

export const TabText = styled.Text`
  margin: 0;
  font-size: 14px;
  color: ${(props: IProps) => props.color || '#000000'};
`;



// TabBar Styles

export const TabBarContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: ${(props: IProps) => props.height || 10}px;
  background-color: ${(props: IProps) => props.backgroundColor || '#636363'};
`;

export const TabBarContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;



// TabIndicator Styles

export const TabIndicatorContainer = styled.View`
`;
