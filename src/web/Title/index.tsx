import styled from 'styled-components';



interface IProps {
  color?: string;
}



const Title = styled.h1`
  margin-top: 1px;
  color: ${(props: IProps) => props.color || 'white'};
  font-size: 20px;
  font-weight: bold;
`;



export default Title;
