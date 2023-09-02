import styled from 'styled-components';



export interface IProps {
  backgroundColor?: string;
}



const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1;
  background-color: ${(props: IProps) => props.backgroundColor || 'transparent'};
`;



export default Content;
