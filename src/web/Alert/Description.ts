import styled from 'styled-components';



export interface IProps {
  color?: string;
  center?: boolean;
}



const DialogDescription = styled.p`
  margin-top: 12px;
  margin-bottom: 1px;
  color: ${(props: IProps) => props.color || '#33383D'};
  font-size: 16px;

  ${(props: IProps) => props.center && `
    text-align: center;
  `}
`;



export default DialogDescription;
