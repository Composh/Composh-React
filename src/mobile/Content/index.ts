import styled from 'styled-components/native';



export interface IProps {
  backgroundColor?: string;
}



const Content = styled.ScrollView`
  flex: 1;
  background-color: ${(props: IProps) => props.backgroundColor || 'transparent'};
`;



export default Content;
