import styled from 'styled-components';



interface IProps {
  backgroundColor?: string;
}



const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;
// background-color: ${(props: IProps) => props.backgroundColor || 'gray'};



export default Container;
