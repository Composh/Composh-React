// React Components Import
import styled from 'styled-components/native';



export interface IProps {
  backgroundColor?: string;
}



const Container = styled.View`
  flex: 1;
  background-color: ${(props: IProps) => props.backgroundColor || 'transparent'};
`;



export default Container;
