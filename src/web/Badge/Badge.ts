import styled from 'styled-components';



export interface IProps {
  backgroundColor?: string;
  color?: string;
}



export const BadgeView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 16px;
  min-width: 16px;
  background-color: ${(props: IProps) => props.backgroundColor || 'red'};
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;
`;



export const BadgeText = styled.span`
  padding-left: 4px;
  padding-right: 4px;
  color: ${(props: IProps) => props.color || 'white'};
  text-align: center;
  font-size: 10.5px;
  font-weight: 700;
`;
