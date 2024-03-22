import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  active?: boolean;
  color?: string;
  accentColor?: string;
}



export const Containerpaginationreacttable = styled.div`
  display: flex;
  flex-direction: row;
`;



export const PaginatorActive = css`
  background-color: ${(props: IProps) => props.accentColor || '#000'};
  box-shadow: none;
`;

export const PaginatorPageItem = styled.a`
  position: relative;
  display: block;
  background-color: ${(props: IProps) => props.color || '#fbfaf9'};
  border: 1px solid rgba(0, 0, 0, .125) !important;
  border-style: solid;
  border-width: 1px;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  margin-left: -1px;

  ${(props: IProps) => props.active && PaginatorActive}
`;

// .page-item:first-child .page-link {
//   border-top-left-radius: 0.25rem;
//   border-bottom-left-radius: 0.25rem;
// }

// .page-item:last-child .page-link {
//   border-top-right-radius: 0.25rem;
//   border-bottom-right-radius: 0.25rem;
// }



export const TextActive = css`
  color: ${(props: IProps) => props.color || '#fff'} !important;
`;

export const PaginatorPageItemText = styled.p`
  color: ${(props: IProps) => props.accentColor || '#000'};
  font-size: 13px;
  ${(props: IProps) => props.active && TextActive}
`;
