import styled from 'styled-components';



export interface IProps {
  color?: string;
}



export const LabelViewStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 7px;
  padding-left: 3px;
  padding-right: 3px;
`;


export const LabelStyle = styled.p`
  color: ${(props: IProps) => props.color || '#000'};
  font-weight: 500;
  font-size: 14px;
`;


export const LabelRequiredStyle = styled.p`
  color: ${(props: IProps) => props.color || '#ff0000'};
  font-size: 12px;
`;
