import styled from 'styled-components';



interface IProps {
  height?: any; // number or string
  width?: any; // number or string
  color?: string;
}



const Divider = styled.div`
  height: ${(props: IProps) => props.height || 0.5};
  width: ${(props: IProps) => props.width || '50%'};
  background-color: ${(props: IProps) => props.color || 'gray'};
`;


export default Divider;
