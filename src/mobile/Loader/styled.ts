import styled,
{
  css,
} from 'styled-components/native';



export interface IProps {
  flexDirection?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
}



export const ActivityIndicatorWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${(props: IProps) => props.width || 95}px;
  height: ${(props: IProps) => props.height || 95}px;
  background-color: ${(props: IProps) => props.backgroundColor || '#ffffff'};
  border-radius: ${(props: IProps) => props.borderRadius || 5}px;

  shadow-offset: 5px 5px;
  shadow-color: gray;
  shadow-opacity: 0.7;
  shadow-radius: 10px;
  elevation: 5;
`;



export const DirectionRow = css`
  flex-direction: row;
  align-items: center;
`;

export const DirectionColumn = css`
  flex-direction: column;
  justify-content: center;
`;

export const LoaderContent = styled.View`
  display: flex;

  ${(props: IProps) => props.flexDirection === 'row' && DirectionRow};
  ${(props: IProps) => props.flexDirection === 'column' && DirectionColumn};
`;


export const TextWait = styled.Text`
  margin-top: ${(props: IProps) => props.flexDirection === 'row' ? 0 : 15}px;
  margin-left: ${(props: IProps) => props.flexDirection === 'row' ? 10 : 0}px;
  color: ${(props: IProps) => props.color || '#000000'};
  font-size: 12.5px;
  text-align: ${(props: IProps) => props.flexDirection === 'row' ? 'left' : 'center'};
`;
