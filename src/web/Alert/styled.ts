import styled from 'styled-components';



export interface IProps {
  fontWeight?: boolean;
}



export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AlertContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 16px;
  padding: 16px;
  background-color: #FFFFFF;
  min-width: 300px;
  min-height: 50px;
  border-radius: 3px;
`;

export const AlertHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

export const BlurModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #FFFFFF;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const ButtonSeparator = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%,
  background-color: #A9ADAE;
  width: 1px;
`;



// Button

export const ButtonComponent = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  cursor: pointer;
`;

export const ButtonComponentText = styled.p`
  color: #000000;
  font-size: 14px;
  font-weight: ${(props: IProps) => props.fontWeight ? '600' : 'normal'}
  text-align: center;
`;
