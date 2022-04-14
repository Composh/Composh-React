import styled from 'styled-components/native';



interface IProps {
  borderTopWidth?: any;
  borderLeftWidth?: any;
  borderRightWidth?: any;
  borderBottomWidth?: any;
  borderColor?: any;
  width?: any;
  height?: any;
  flex?: any;
}


// Cell Styles

export const ViewCellStyled = styled.View`
  display: flex;
  flex-direction: column;
  flex: ${(props: IProps) => !props.width && !props.flex && !props.height ? 1 : (props.flex || 1)};
  justify-content: center;
  border-top-width: ${(props: IProps) => props.borderTopWidth || 0}px;
  border-right-width: ${(props: IProps) => props.borderRightWidth || 0}px;
  border-color: ${(props: IProps) => props.borderColor};
  ${(props: IProps) => props.width && `width: ${(props: IProps) => props.width || 0}px`};
  ${(props: IProps) => props.height && `height: ${(props: IProps) => props.height || 0}px`};
`;

export const TextCellStyled = styled.Text`
  background-color: transparent;
`;



// Col Styles

export const ViewColStyled = styled.View`
  display: flex;
  flex-direction: column;
  ${(props: IProps) => props.width && `width: ${(props: IProps) => props.width || 0}px`};
  flex: ${(props: IProps) => !props.width ? 1 : (props.flex || 1)};
`;

export const ViewColsStyled = styled.View`
  display: flex;
  flex-direction: row;
  ${(props: IProps) => props.width && `width: ${(props: IProps) => props.width || 0}px`};
`;



// Rows Styles

export const ViewRowStyled = styled.View`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  ${(props: IProps) => props.width && `width: ${(props: IProps) => props.width || 0}px`};
  ${(props: IProps) => props.height && `height: ${(props: IProps) => props.height || 0}px`};
`;

export const ViewRowsStyled = styled.View`
  display: flex;
  flex-direction: column;
  flex: ${(props: IProps) => !props.width ? 1 : (props.flex || 1)};
  ${(props: IProps) => props.width && `width: ${(props: IProps) => props.width || 0}px`};
`;



// Table Styles

export const ViewTableStyled = styled.View`
  display: flex;
  flex-direction: column;
  border-left-width: ${(props: IProps) => props.borderLeftWidth || 0}px;
  border-bottom-width: ${(props: IProps) => props.borderBottomWidth || 0}px;
  border-color: ${(props: IProps) => props.borderColor};
`;

export const ViewTableWrapperStyled = styled.View`
  display: flex;
  flex-direction: column;
`;
