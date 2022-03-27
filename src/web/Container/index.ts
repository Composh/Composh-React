import styled from 'styled-components';



interface IProps {
  backgroundColor?: string;
}



const Container = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${(props: IProps) => props.backgroundColor || 'transparent'};
`;



export default Container;
