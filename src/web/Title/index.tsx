import styled from 'styled-components';

interface IProps {
  color?: string;
}


const Title = styled.h1`
  color: ${(props: IProps) => props.color || 'whitegray'};
  font-size: 20px;
  font-weight: bold;
`;

export default Title;
