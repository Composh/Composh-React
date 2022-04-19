import styled from 'styled-components/native';



interface IProps {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: number;
}



export const ChipContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  height: 35px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 4px;
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 4px;
  background-color: ${(props: IProps) => props.backgroundColor};
  border-color: ${(props: IProps) => props.borderColor};
  border-width: 1px;
  border-radius: ${(props: IProps) => props.borderRadius || 0}px;
`;

export const ChipContent = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const ChipThumb = styled.View`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`;


export const ChipText = styled.Text`
  font-size: 14px;
  color: ${(props: IProps) => props.color};
`;

export const ChipIcon = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-right: -2px;
  padding-top: 4px;
  padding-bottom: 4px;
`;



export const ChipAvatar = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export const ChipAvatarWrapper = styled.View`
  margin-right: 4px;
`;

export const ChipAvatarSelected = styled.View`
  position: absolute;
  top: 4px;
  left: 4px;
  background-color: rgba(0, 0, 0, .29);
`;
