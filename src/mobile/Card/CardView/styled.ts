import styled,
{
  css,
} from 'styled-components/native';



export interface IProps {
  shadow?: boolean;
  backgroundColor?: string;
  borderLeftColor?: string;
  borderLeftStyle?: string;
  borderLeftWidth?: number;
  borderRadius?: number;
}



export const CardLeftBorder = css`
  border-left-color: ${(props: IProps) => props.borderLeftColor};
  border-left-style: ${(props: IProps) => props.borderLeftStyle || 'solid'};
  border-left-width: ${(props: IProps) => props.borderLeftWidth || 4}px;
`;

export const CardShadow = css`
  box-shadow: 0 2px 18px 1px rgb(49 53 72 / 10%);
`;

export const CardStyle = css`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props: IProps) => props.backgroundColor};
  border-radius: ${(props: IProps) => props.borderRadius}px;

  ${(props: IProps) => props.borderLeftColor && CardLeftBorder};

  ${(props: IProps) => props.shadow && CardShadow};
`;



export const CardButton = styled.TouchableOpacity`
  ${CardStyle};
  cursor: pointer;
`;

export const CardView = styled.View`
  ${CardStyle};
`;
