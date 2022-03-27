import styled from 'styled-components';



interface IProps {
  backgroundColor?: string;
}



const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${(props: IProps) => props.backgroundColor || 'gray'};
`;



export default Screen;
