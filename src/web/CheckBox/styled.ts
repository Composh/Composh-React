import styled from 'styled-components';



export interface IProps {
  backgroundColor?: string;
  border?: boolean;
  borderColor?: string;
}



export const CheckBoxButton = styled.a`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  cursor: pointer;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CheckboxFlexText = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const CheckboxText = styled.p`
  display: flex;
  font-size: 14px;
`;
