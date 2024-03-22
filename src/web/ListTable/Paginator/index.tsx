import React from 'react';

import {
  Containerpaginationreacttable,
  PaginatorPageItem,
  PaginatorPageItemText,
} from './styled';



export interface IProps {
  color?: string;
  accentColor?: string;
}



const ListTablePaginator: React.FC<IProps> = (props: IProps) => {
  const colorPaginator = props.color;
  const colorAccentPaginator = props.accentColor;



  return (

    <Containerpaginationreacttable>

      <PaginatorPageItem
        active
        color={colorPaginator}
        accentColor={colorAccentPaginator}
        title="1">
        <PaginatorPageItemText
          active
          color={colorPaginator}
          accentColor={colorAccentPaginator}>
          1
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem
        color={colorPaginator}
        accentColor={colorAccentPaginator}
        title="2">
        <PaginatorPageItemText
          color={colorPaginator}
          accentColor={colorAccentPaginator}>
          2
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem
        color={colorPaginator}
        accentColor={colorAccentPaginator}
        title="3">
        <PaginatorPageItemText
          color={colorPaginator}
          accentColor={colorAccentPaginator}>
          3
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem
        color={colorPaginator}
        accentColor={colorAccentPaginator}
        title="4">
        <PaginatorPageItemText
          color={colorPaginator}
          accentColor={colorAccentPaginator}>
          4
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem
        color={colorPaginator}
        accentColor={colorAccentPaginator}
        title="5">
        <PaginatorPageItemText
          color={colorPaginator}
          accentColor={colorAccentPaginator}>
          5
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem
        color={colorPaginator}
        accentColor={colorAccentPaginator}
        title="next page">
        <PaginatorPageItemText
          color={colorPaginator}
          accentColor={colorAccentPaginator}>
          &gt;
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem
        color={colorPaginator}
        accentColor={colorAccentPaginator}
        title="last page">
        <PaginatorPageItemText
          color={colorPaginator}
          accentColor={colorAccentPaginator}>
          &gt;&gt;
        </PaginatorPageItemText>
      </PaginatorPageItem>

    </Containerpaginationreacttable>

  );
};



export default ListTablePaginator;
