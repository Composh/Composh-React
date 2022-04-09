import styled from 'styled-components';



interface IProps {
  angle?: any;
  colors?: any;
}



const LinearGradient = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props: IProps) => props.colors[0]};
  background: ${(props: IProps) => `linear-gradient(${props.angle}deg, ${props.colors[0]} 0%, ${props.colors[1]} 100%)`};
`;



export default LinearGradient;
