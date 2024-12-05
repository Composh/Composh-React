import styled from 'styled-components';



export interface IProps {
  backgroundColor?: string;
  color?: string;
}



export const BadgeView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  padding-top: 3px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 3px;
  background-color: ${(props: IProps) => props.backgroundColor || '#ff0000'};
  border-radius: 15px;
`;



export const BadgeText = styled.span`
  padding-left: 4px;
  padding-right: 4px;
  color: ${(props: IProps) => props.color || '#ffffff'};
  text-align: center;
  font-size: 10.5px;
  font-weight: 700;
`;
