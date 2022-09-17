import styled from 'styled-components';



export interface IProps {
  color?: string;
  size?: number;
}



const Dot = styled.div`
  width: ${(props: IProps) => (props.size ? props.size : 10)}px;
  height: ${(props: IProps) => (props.size ? props.size : 10)}px;
  background-color: ${(props: IProps) => (props.color ? props.color : '#B9B9B9')};
  border-radius: 50%;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;



export default Dot;
