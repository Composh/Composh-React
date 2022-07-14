import styled from 'styled-components/native';



export interface IProps {
  backgroundColor?: string;
  color?: string;
}



// Accordion

export const AccordionStyled = styled.FlatList`

`;



// AccordionItem


export const AccordionItemStyled = styled.View`
  display: flex;
  flex-direction: column;
`;

export const AccordionItemTouchable = styled.TouchableWithoutFeedback`
  display: flex;
  flex-direction: column;
`;

export const AccordionItemRenderView = styled.View`
  display: flex;
  flex-direction: column;
`;



// DefaultHeader


export const DefaultHeaderStyled = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props: IProps) => props.backgroundColor};
`;

export const DefaultHeaderTitle = styled.Text`
  color: ${(props: IProps) => props.color};
  font-size: 14px;
`;



// AccordionSubItem

export const AccordionSubItemTitle = styled.View`
  display: flex;
  flex-direction: column;
`;



// DefaultContent

export const DefaultContentTitle = styled.Text`
  padding: 16px;
  background-color: ${(props: IProps) => props.backgroundColor};
  color: ${(props: IProps) => props.color};
  font-size: 14px;
`;
