import styled from 'styled-components';



interface IProps {
  color?: string;
}



export const ActivityIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  shadow-offset: 5px 5px;
  shadow-color: gray;
  shadow-opacity: 0.7;
  shadow-radius: 10px;
  elevation: 5;

  .MuiCircularProgress-root {
    color: ${(props: IProps) => props.color ? props.color : 'blue'};
  }
`;

export const TextWait = styled.p`
  margin-top: 8px;
  font-size: 12.5px;
  text-align: center;
`;



export const ModalBackground = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .MuiCircularProgress-root {
    color: ${(props: IProps) => props.color ? props.color : 'blue'};
  }
`;
