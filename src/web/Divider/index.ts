import styled from 'styled-components';



export interface IProps {
  height?: number | string;
  width?: number | string;
  color?: string;
}



const Divider = styled.div`
  height: ${(props: IProps) => (typeof props.height === 'number' ? props.width + 'px' : props.width) || '0.5px'};
  width: ${(props: IProps) => (typeof props.width === 'number' ? props.width + 'px' : props.width) || '50%'};
  background-color: ${(props: IProps) => props.color || 'gray'};
`;


export default Divider;
