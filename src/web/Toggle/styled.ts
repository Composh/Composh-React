import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  disabled?: boolean;
  flexContent?: number;
  height?: any;
  width?: any;
  borderWidth?: any;
  borderRadius?: any;
  borderColor?: any;
  backgroundColor?: any;
  iconContent?: any;

  colorText?: string;
  marginLeftText?: number;
}



export const FlexToggle = css<IProps>`
  flex: ${(props: IProps) => props.flexContent};
`;

export const BorderToggle = css<IProps>`
  border-style: solid;
  border-width: ${(props: IProps) => props.borderWidth}px;
`;

export const ButtonIconPadding = css`
  padding-left: 10px;
  padding-right: 15px;
`;

export const ButtonNoIconPadding = css`
  padding-left: 15px;
  padding-right: 15px;
`;

export const ToggleButtonContent = styled.a<IProps>`
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 8px;

  ${(props: IProps) => Boolean(props.flexContent) && FlexToggle};
  align-self: ${(props: IProps) => props.flexContent ? 'auto' : 'flex-start'};
  ${(props: IProps) => props.width && `width: ${props.width || 0}px`};
  ${(props: IProps) => props.height && `height: ${props.height || 0}px`};
  border-color: ${(props: IProps) => props.borderColor};

  ${(props: IProps) => Boolean(props.borderWidth) && BorderToggle};

  border-radius: ${(props: IProps) => props.borderRadius || 0}px;
  background-color: ${(props: IProps) => props.backgroundColor};
  ${(props: IProps) => props.iconContent ? ButtonIconPadding : ButtonNoIconPadding};

  cursor: ${(props: IProps) => props.disabled ? 'default' : 'pointer'};
`;


export const ToggleIconLeftView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
`;



export const MarginTextToggle = css<IProps>`
  margin-left: ${(props: IProps) => props.marginLeftText}px;
`;

export const ToggleText = styled.p<IProps>`
  margin: 0;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;

  color: ${(props: IProps) => props.colorText || '#000000'};
  ${(props: IProps) => Boolean(props.marginLeftText) && MarginTextToggle};
`;


export const ToggleIconRightView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`;
