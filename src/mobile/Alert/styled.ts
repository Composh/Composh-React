import styled from 'styled-components/native';



export interface IProps {
  center?: boolean;
  color?: string;
  fontWeight?: boolean;
}



export const ContainerModal = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AlertContent = styled.View`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 16px;
  padding: 16px;
  background-color: #FFFFFF;
  min-width: 300px;
  min-height: 50px;
  border-radius: 3px;
`;

export const AlertHeaderContent = styled.View`
  display: flex;
  flex-direction: column;
`;
// margin: 12px;

export const BlurModal = styled.View`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #FFFFFF;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const ButtonSeparator = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #A9ADAE;
  width: 1px;
`;



// Button

export const ButtonComponent = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  cursor: pointer;

  ${(props: IProps) => props.center && `
    flex: 1;
  `}
`;

export const ButtonComponentText = styled.Text`
  color: ${(props: IProps) => props.color || '#000000'};
  font-size: 14px;
  font-weight: ${(props: IProps) => props.fontWeight ? '600' : 'normal'};
  text-align: center;
`;
