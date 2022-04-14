import styled,
{
  css,
} from 'styled-components/native';



interface IButtonProps {
  flexContent?: number;
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



export const ToggleButtonStyle = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
`;


export const ButtonIconPadding = css`
  padding-left: 10px;
  padding-right: 15px;
`;

export const ButtonNoIconPadding = css`
  padding-left: 15px;
  padding-right: 15px;
`;

export const ToggleButtonContent = styled.View`
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

  ${(props: IButtonProps) => props.flexContent && `flex: ${props.flexContent ? props.flexContent : 0}`};
  align-self: ${(props: IButtonProps) => props.flexContent ? 'auto' : 'flex-start'};
  ${(props: IButtonProps) => props.width && `width: ${props.width || 0}px`};
  ${(props: IButtonProps) => props.height && `height: ${props.height || 0}px`};
  border-color: ${(props: IButtonProps) => props.borderColor};
  ${(props: IButtonProps) => props.borderWidth && `border-width: ${props.borderWidth || 0}px`};
  ${(props: IButtonProps) => props.borderRadius && `border-radius: ${props.borderRadius || 0}px`};
  background-color: ${(props: IButtonProps) => props.backgroundColor};
  ${(props: IButtonProps) => props.iconContent ? ButtonIconPadding : ButtonNoIconPadding};
`;


export const ToggleIconView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
`;


export const ToggleText = styled.Text`
  margin: 0;
  font-size: 14px;
  text-align: center;

  color: ${(props: ITextProps) => props.colorText};
  ${(props: ITextProps) => props.marginLeftText && `margin-left: ${props.marginLeftText || 0}px`};
`;
