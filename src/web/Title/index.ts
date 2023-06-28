import styled from 'styled-components';



export interface IProps {
  color?: string;
}



const Title = styled.h1`
  margin-top: 1px;
  color: ${(props: IProps) => props.color || 'white'};
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
`;



export default Title;
