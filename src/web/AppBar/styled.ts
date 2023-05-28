import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  absolute?: boolean;
  transparent?: boolean;
  backgroundColor?: string;
  borderBottomColor?: string;
}



export const ShadowToolbar = css`
  box-shadow: 0 2px 30px 2px rgb(0 0 0 / 10%) !important;
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


export const HeaderAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  z-index: 40;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${(props: IProps) => props.absolute && AbsoluteToolbar};
  ${(props: IProps) => !props.transparent && ShadowToolbar};
  ${(props: IProps) => props.borderBottomColor && BorderBottomToolbar};
  background-color: ${(props: IProps) => props.transparent ? 'transparent' : props.backgroundColor};
`;
