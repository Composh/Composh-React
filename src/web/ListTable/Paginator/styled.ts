import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  active?: boolean;
  color?: string;
  accentColor?: string;
  hoverColor?: string;
}



export const Containerpaginationreacttable = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border: 0.5px solid rgba(0, 0, 0, .125) !important;
  border-radius: 4px;
`;



export const PaginatorActive = css<IProps>`
  background-color: ${(props: IProps) => props.accentColor || '#000'};
  box-shadow: none;
`;

export const PaginatorPageItem = styled.a<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 40px;
  margin-left: -0.5px;
  margin-right: -0.5px;
  padding-bottom: 6px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 6px;

  background-color: ${(props: IProps) => props.color || '#fbfaf9'};
  border-left: 0.5px solid rgba(0, 0, 0, .125) !important;
  border-right: 0.5px solid rgba(0, 0, 0, .125) !important;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  ${(props: IProps) => props.active && PaginatorActive};

  :hover {
    background-color: ${(props: IProps) => props.hoverColor};
    background: ${(props: IProps) => props.hoverColor};
    border-color: ${(props: IProps) => props.hoverColor};
  }
`;

// .page-item:first-child .page-link {
//   border-top-left-radius: 0.25rem;
//   border-bottom-left-radius: 0.25rem;
// }

// .page-item:last-child .page-link {
//   border-top-right-radius: 0.25rem;
//   border-bottom-right-radius: 0.25rem;
// }



export const TextActive = css<IProps>`
  color: ${(props: IProps) => props.color || '#fff'} !important;
`;

export const PaginatorPageItemText = styled.p<IProps>`
  color: ${(props: IProps) => props.accentColor || '#000'};
  font-size: 13px;
  ${(props: IProps) => props.active && TextActive}

  ${PaginatorPageItem}:hover & {
    color: ${'#fff'} !important;
  }
`;
