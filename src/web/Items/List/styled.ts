import styled from 'styled-components';



export interface IProps {
  disabled?: boolean;
  color?: number;
  fontSize?: number;
  borderBottomColor?: string;
  borderBottomWidth?: number;
}



export const ItemContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 47px;
  padding-top: 8px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 8px;
  border-bottom-color: ${(props: IProps) => props.borderBottomColor || 'gray'};
  border-bottom-style: solid;
  border-bottom-width: ${(props: IProps) => props.borderBottomColor ? props.borderBottomWidth || 1 : 0}px;

  opacity: ${(props: IProps) => props.disabled ? 0.5 : 1};

  cursor: ${(props: IProps) => props.disabled ? 'default' : 'pointer'};
`;



export const IconContent = styled.div`
  display: flex;
  min-width: 35px;
  min-height: 40px;
  margin-left: 3px;
  margin-right: 12px;
  align-items: center;
  justify-content: center;
`;



export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export const ItemTitle = styled.h3`
  color: ${(props: IProps) => props.color ? props.color : 'black'};
  font-size: ${(props: IProps) => props.fontSize ? props.fontSize : 15}px;
  font-weight: 700;
`;

export const ItemSubtitle = styled.h4`
  margin-top: 2px;
  color: ${(props: IProps) => props.color ? props.color : 'black'};
  font-size: ${(props: IProps) => props.fontSize ? props.fontSize : 12}px;
  font-weight: 700;
`;

export const ItemLastTitle = styled.h4`
  margin-top: 4px;
  color: ${(props: IProps) => props.color ? props.color : 'black'};
  font-size: ${(props: IProps) => props.fontSize ? props.fontSize : 12}px;
  font-weight: 400;
`;



export const InfoOptions = styled.div`
  display: flex;
  min-width: 35px;
  min-height: 40px;
  margin-left: 12px;
  margin-right: 3px;
  align-items: center;
  justify-content: center;
`;
