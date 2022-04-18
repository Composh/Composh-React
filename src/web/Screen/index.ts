import styled from 'styled-components';



export interface IProps {
  backgroundColor?: string;
}



const Screen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props: IProps) => props.backgroundColor || 'gray'};
`;



export default Screen;
