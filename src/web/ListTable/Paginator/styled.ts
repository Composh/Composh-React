import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  active?: boolean;
  color?: string;
}



export const Containerpaginationreacttable = styled.div`
  display: flex;
  flex-direction: row;
`;



export const PaginatorActive = css`
  background-color: ${(props: IProps) => props.color || '#000'};
  border-color: ${(props: IProps) => props.color || '#000'};
  box-shadow: none;
`;

export const PaginatorPageItem = styled.a`
  position: relative;
  display: block;
  background-color: #fff;
  border: 1px solid #dee2e6;
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
  color: #FFFFFF !important;
`;

export const PaginatorPageItemText = styled.p`
  color: ${(props: IProps) => props.color || '#000'};
  font-size: 13px;
  ${(props: IProps) => props.active && TextActive}
`;
