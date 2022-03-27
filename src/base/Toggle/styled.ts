import styled,
{
  css,
} from 'styled-components/native';



interface IProps {
  iconContent?: any;
}



export const ToggleButtonStyle = styled.TouchableWithoutFeedback`
`;


export const ButtonIconPadding = css`
  paddingLeft: 10,
  paddingRight: 15,
`;

export const ButtonNoIconPadding = css`
  paddingLeft: 15,
  paddingRight: 15,
`;

export const ToggleButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 6px;
  padding-top: 8px;
  padding-bottom: 8px;

  ${(props: IProps) => props.iconContent ? ButtonIconPadding : ButtonNoIconPadding}
`;


export const ToggleIconView = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 2px;
`;


export const ToggleText = styled.Text`
  font-size: 14px;
  text-align: center;
`;
