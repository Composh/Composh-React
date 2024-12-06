import styled from 'styled-components';



export interface IProps {
  color?: string;
  center?: boolean;
}



const DialogText = styled.p<IProps>`
  margin-top: 10px;
  color: ${(props: IProps) => props.color || '#595e64'};
  font-size: 12px;

  ${(props: IProps) => props.center && `
    text-align: center;
  `}
`;



export default DialogText;
