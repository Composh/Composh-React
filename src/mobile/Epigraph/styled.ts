import styled,
{
  css,
} from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';



export interface IProps {
  textSize?: number;
  textColor?: string;
  backgroundColor?: string;

  noBorderBottom?: boolean;
  borderBottomColor?: string;
  borderBottomWidth?: number;
}



export const ContainerLinearHeader = styled(LinearGradient)`
  flex-direction: column;
  min-height: 40px;
  margin-top: 3px;
  margin-bottom: 3px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ContainerBackgroundHeader = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 40px;
  margin-top: 3px;
  margin-bottom: 3px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${(props: IProps) => props.backgroundColor};
`;

export const ContentFlexComponent = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;


export const ContainerBorderHaveStyle = css`
  border-bottom-color: ${(props: IProps) => props.borderBottomColor || 'green'};
  border-bottom-width: ${(props: IProps) => props.borderBottomWidth || 2}px;
`;

export const ContainerBorderNoHaveStyle = css`
  border-bottom-color: transparent;
  border-bottom-width: 0;
`;

export const ContainerSection = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 40px;
  margin-top: 5px;
  margin-bottom: 7px;
  padding-top: 5px;
  padding-left: 7px;
  padding-right: 5px;
  padding-bottom: 5px;

  ${(props: IProps) => !props.noBorderBottom && ContainerBorderHaveStyle};
  ${(props: IProps) => props.noBorderBottom && ContainerBorderNoHaveStyle};
`;


export const TitleSectionView = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const IconView = styled.View`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

export const TitleComponent = styled.Text`
  display: flex;
  flex: 1;
  color: ${(props: IProps) => props.textColor || 'green'};
  font-size: ${(props: IProps) => props.textSize || 15}px;
  font-weight: 200;
  letter-spacing: 0.5px;
`;

export const IconContentView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 25px;
  min-width: 25px;
  margin-left: 5px;
`;
