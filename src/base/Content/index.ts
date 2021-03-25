// React Components Import
import styled from 'styled-components/native';



interface IProps {
  backgroundColor?: string;
}



const Content = styled.ScrollView`
  flex: 1;
  background-color: ${(props: IProps) => props.backgroundColor || 'transparent'};
`;



export default Content;
