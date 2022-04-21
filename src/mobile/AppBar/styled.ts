import styled,
{
  css,
} from 'styled-components/native';



export interface IProps {
  absolute?: boolean;
  transparent?: boolean;
  backgroundColor?: string;
  borderBottomColor?: string;
}



export const ShadowToolbar = css`
  elevation: 12;

  shadow-offset: 0 0;
  shadow-color: black;
  shadow-opacity: 0.6;
  shadow-radius: 8px;
`;

export const AbsoluteToolbar = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

export const BorderBottomToolbar = css`
  border-bottom-color: ${(props: IProps) => props.borderBottomColor || 'transparent'};
  border-bottom-width: 1;
`;


export const HeaderAppContainer = styled.View`
  background-color: transparent;
  z-index: 40;
`;

export const HeaderContainer = styled.View`
  ${(props: IProps) => props.absolute && AbsoluteToolbar};
  ${(props: IProps) => !props.transparent && ShadowToolbar};
  ${(props: IProps) => props.borderBottomColor && BorderBottomToolbar};
  background-color: ${(props: IProps) => props.transparent ? 'transparent' : props.backgroundColor};
`;
