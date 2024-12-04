import styled,
{
  css,
} from 'styled-components';

import Color from 'color';

import LinearGradient from '../../LinearGradient';



export interface IProps {
  disabled?: boolean;
  size?: number;
  backgroundColor?: string;
  disablePointer?: string;
}



export const ShadowFab = css`
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.14), 0 3px 5px -1px rgba(0, 0, 0, 0.14);
`;

export const FabButtonStyle = css<IProps>`
  overflow: hidden;

  position: absolute;
  bottom: 16px;
  right: 16px;

  width: ${(props: IProps) => props.size}px;
  height: ${(props: IProps) => props.size}px;
  padding: 0px;
  border-radius: ${(props: IProps) => props.size
    ? props.size / 2
    : 0
  }px;
  z-index: 1050;
  
  opacity: ${(props: IProps) => props.disabled ? 0.4 : 1};
  cursor: ${(props: IProps) => props.disabled ? 'default' : 'pointer'};

  pointer-events: all !important;

  ${ShadowFab};
`;

export const FabLinearContainer = styled.a<IProps>`
  ${FabButtonStyle};

  display: flex;
  flex-direction: column;
`;



export const FabLinearGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;



export const FabSimpleButton = styled.a<IProps>`
  ${FabButtonStyle};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props: IProps) => props.backgroundColor};

  ${ShadowFab};


  :hover {
    background-color: ${(props: IProps) => Color(props.backgroundColor).darken(0.2).toString()};
  }
`;
