import styled from 'styled-components';

interface Props {
  color?: string;
  size?: number;
}

const Dot = styled.div`
  width: ${(props: Props) => (props.size ? props.size : 10)}px;
  height: ${(props: Props) => (props.size ? props.size : 10)}px;
  background-color: ${(props: Props) => (props.color ? props.color : '#B9B9B9')};
  border-radius: 50%;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export default Dot;
