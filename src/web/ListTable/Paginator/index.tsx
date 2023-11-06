import React from 'react';

import {
  Containerpaginationreacttable,
  PaginatorPageItem,
  PaginatorPageItemText,
} from './styled';

export interface IProps {
  color?: string;
}

const ListTablePaginator: React.FC<IProps> = (props: IProps) => {
  const colorPaginator = props.color;

  return (

    <Containerpaginationreacttable>

      <PaginatorPageItem
        active
        color={colorPaginator}
        title="1">
        <PaginatorPageItemText
          active
          color={colorPaginator}>
          1
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem title="2">
        <PaginatorPageItemText
          color={colorPaginator}>
          2
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem title="3">
        <PaginatorPageItemText
          color={colorPaginator}>
          3
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem title="4">
        <PaginatorPageItemText
          color={colorPaginator}>
          4
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem title="5">
        <PaginatorPageItemText
          color={colorPaginator}>
          5
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem title="next page">
        <PaginatorPageItemText
          color={colorPaginator}>
          &gt;
        </PaginatorPageItemText>
      </PaginatorPageItem>


      <PaginatorPageItem title="last page">
        <PaginatorPageItemText
          color={colorPaginator}>
          &gt;&gt;
        </PaginatorPageItemText>
      </PaginatorPageItem>

    </Containerpaginationreacttable>

  );
};



export default ListTablePaginator;
