import styled from 'styled-components';



export interface IProps {
  color?: string;
}



export const ReactTotalStyle = styled.p<IProps>`
  color: ${(props: IProps) => props.color || '#000'};
`;
