import styled from 'styled-components';



interface IProps {
  backgroundColor?: string;
}



const Content = styled.div`
  overflow: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${(props: IProps) => props.backgroundColor || 'transparent'};
`;



export default Content;
