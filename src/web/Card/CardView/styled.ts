import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  shadow?: boolean;
  backgroundColor?: string;
  borderLeftColor?: string;
  borderLeftStyle?: string;
  borderLeftWidth?: number;
  borderRadius?: number;
}



export const ShadowCard = css`
  box-shadow: 0 2px 18px 1px rgba(0, 0, 0, 0.1);
`;

export const CardLeftBorder = css<IProps>`
  border-left-color: ${(props: IProps) => props.borderLeftColor};
  border-left-style: ${(props: IProps) => props.borderLeftStyle || 'solid'};
  border-left-width: ${(props: IProps) => props.borderLeftWidth || 4}px;
`;

export const CardStyle = css<IProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props: IProps) => props.backgroundColor};
  border-radius: ${(props: IProps) => props.borderRadius}px;

  ${(props: IProps) => props.borderLeftColor && CardLeftBorder};

  ${(props: IProps) => props.shadow && ShadowCard};
`;



export const CardButton = styled.a<IProps>`
  ${CardStyle};
  cursor: pointer;
`;

export const CardView = styled.div<IProps>`
  ${CardStyle};
`;
