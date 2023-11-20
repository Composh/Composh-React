import styled from 'styled-components/native';



export interface IProps {
  color?: string;
  center?: boolean;
}



const DialogDescription = styled.Text`
  margin-top: 12px;
  margin-bottom: 1px;
  color: ${(props: IProps) => props.color || '#33383D'};
  font-size: 16px;

  ${(props: IProps) => props.center && `
    text-align: center;
  `}
`;



export default DialogDescription;
