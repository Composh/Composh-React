import styled from 'styled-components';



export interface IProps {
  color?: string;
}



const SubTitle = styled.h2`
  margin-top: 1px;
  color: ${(props: IProps) => props.color || 'gray'};
  font-size: 13.5px;
  font-weight: 500;
`;



export default SubTitle;
