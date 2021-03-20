// React Components Import
import styled from 'styled-components/native';



interface IProps {
  backgroundColor?: string;
}



const Screen = styled.View`
  flex: 1;
  background-color: ${(props: IProps) => props.backgroundColor || 'gray'};
`;



export default Screen;
