import styled from 'styled-components';



interface IProps {
  backgroundColor?: string;
}



const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props: IProps) => props.backgroundColor || 'transparent'};
`;



export default Content;
