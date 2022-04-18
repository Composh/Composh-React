import styled from 'styled-components';

export interface IProps {
  color?: string;

  left?: number;
  top?: number;

  width?: number;
  height?: number;
}

const Pointer = styled.div`
  background-color: ${(props: IProps) => (props.color ? props.color : '#04a9f5')};
  position: absolute;
  left: ${(props: IProps) => (props.left ? props.left : 0)}px;
  top: ${(props: IProps) => (props.top ? props.top : 0)}px;
  width: ${(props: IProps) => (props.width ? props.width : 5)}px;
  height: ${(props: IProps) => (props.height ? props.height : 20)}px;
`;

export default Pointer;
