import styled from 'styled-components';



export interface IProps {
  height?: number;
  backgroundColor?: string;
}



export const ActionSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  elevation: 0;

  justify-content: flex-end;
  z-index: 9999;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${(props: IProps) => props.height}px;
  background-color: ${(props: IProps) => props.backgroundColor};
  z-index: 9999;
  overflow-y: auto;
`;
