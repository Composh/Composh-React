import styled from 'styled-components/native';



export interface IProps {
  color?: string;
  center?: boolean;
}



const DialogTitle = styled.Text`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 4px;
  color: ${(props: IProps) => props.color || '#000000'};
  font-size: 18px;
  font-weight: 500;

  ${(props: IProps) => props.center && `
    text-align: center;
  `}
`;



export default DialogTitle;
