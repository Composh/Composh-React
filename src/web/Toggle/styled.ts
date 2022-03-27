import styled,
{
  css,
} from 'styled-components';



interface IButtonProps {
  flexContent?: number;
  alignSelf?: string;
  height?: any;
  width?: any;
  borderWidth?: any;
  borderRadius?: any;
  borderColor?: any;
  backgroundColor?: any;
  iconContent?: any;
}

interface ITextProps {
  colorText?: any;
  marginLeftText?: number;
}



export const ToggleButtonStyle = styled.a`
`;


export const ButtonIconPadding = css`
  padding-left: 10px;
  padding-right: 15px;
`;

export const ButtonNoIconPadding = css`
  padding-left: 15px;
  padding-right: 15px;
`;

export const ToggleButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 6px;
  padding-top: 8px;
  padding-bottom: 8px;

  flex: ${(props: IButtonProps) => props.flexContent};
  align-self: ${(props: IButtonProps) => props.alignSelf};
  width: ${(props: IButtonProps) => props.width}px;
  height: ${(props: IButtonProps) => props.height}px;
  border-color: ${(props: IButtonProps) => props.borderColor};
  border-style: ${(props: IButtonProps) => props.borderWidth ? 'solid' : 'none'};
  border-width: ${(props: IButtonProps) => props.borderWidth}px;
  border-radius: ${(props: IButtonProps) => props.borderRadius}px;
  background-color: ${(props: IButtonProps) => props.backgroundColor};
  ${(props: IButtonProps) => props.iconContent ? ButtonIconPadding : ButtonNoIconPadding}
`;


export const ToggleIconView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 2px;
`;


export const ToggleText = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;

  color: ${(props: ITextProps) => props.colorText};
  margin-left: ${(props: ITextProps) => props.marginLeftText}px;
`;
