import styled from 'styled-components';



export interface IProps {
  backgroundColor?: string;
  color?: string;
}



// AccordionItem

export const AccordionItemStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccordionItemRenderView = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;



// DefaultHeader

export const DefaultHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #a1a1a1;
`;

export const DefaultHeaderTitle = styled.p`
  color: #ffffff;
  font-size: 14px;
`;



// AccordionSubItem

export const AccordionSubItemTitle = styled.div`
  display: flex;
  flex-direction: column;
`;



// DefaultContent

export const DefaultContentTitle = styled.p<IProps>`
  padding: 16px;
  background-color: ${(props: IProps) => props.backgroundColor};
  color: ${(props: IProps) => props.color};
  font-size: 14px;
`;
