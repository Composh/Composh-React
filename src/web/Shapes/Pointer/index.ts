import styled from 'styled-components';

interface Props {
  color?: string;

  left?: number;
  top?: number;

  width?: number;
  height?: number;
}

const Pointer = styled.div`
  background-color: ${(props: Props) => (props.color ? props.color : '#04a9f5')};
  position: absolute;
  left: ${(props: Props) => (props.left ? props.left : 0)}px;
  top: ${(props: Props) => (props.top ? props.top : 0)}px;
  width: ${(props: Props) => (props.width ? props.width : 5)}px;
  height: ${(props: Props) => (props.height ? props.height : 20)}px;
`;

export default Pointer;
