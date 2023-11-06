import styled from 'styled-components';



export interface IProps {
  backgroundColor?: string;
}



export const HeaderContainer = styled.div`
  display: flex;
  background-color: ${(props: IProps) => props.backgroundColor || 'gray'};
  padding: 10px;
  min-height: 40px; // TODO: Fazer parametrizavel
  color: white;
  font-weight: bold;
`;
