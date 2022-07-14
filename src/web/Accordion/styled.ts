import styled from 'styled-components';



export interface IProps {
  backgroundColor?: string;
  color?: string;
}



// Accordion

export const AccordionStyled = styled.div`

`;



// AccordionItem


export const AccordionItemStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccordionItemTouchable = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const AccordionItemRenderView = styled.div`
  display: flex;
  flex-direction: column;
`;



// DefaultHeader


export const DefaultHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props: IProps) => props.backgroundColor};
`;

export const DefaultHeaderTitle = styled.p`
  color: ${(props: IProps) => props.color};
  font-size: 14px;
`;



// AccordionSubItem

export const AccordionSubItemTitle = styled.div`
  display: flex;
  flex-direction: column;
`;



// DefaultContent

export const DefaultContentTitle = styled.p`
  padding: 16px;
  background-color: ${(props: IProps) => props.backgroundColor};
  color: ${(props: IProps) => props.color};
  font-size: 14px;
`;

