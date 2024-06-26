import styled from 'styled-components/native';



export interface IProps {
  style?: any;
  backgroundColor?: string;
}



const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${(props: IProps) => props.backgroundColor || 'transparent'};
`;



export default Content;
