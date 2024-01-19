import React from 'react';
import TableHeaderCell from '../HeaderCell';

import {
  HeaderContainer,
} from './styled';



export interface IProps {
  className?: any;
  color?: any;
  columns: any;
  onSort?: any;
  onFilter?: any;
  sortField?: any;
  sortOrder?: any;
  selectRow?: any;
  expandRow?: any;
  currFilters?: any;
  onExternalFilter?: any;
  filterPosition?: any;
  globalSortCaret?: any;
  wrapperClasses?: any;
}



const TableHeader: React.FC<IProps> = (props: IProps) => {
  const childrens = [
    props.columns.map((column: any, index: number) => {
      const currSort = column.dataField === props.sortField;
      const isLastSorting = column.dataField === props.sortField;

      return (

        <TableHeaderCell
          index={index}
          // key={column.dataField}
          column={column}
          // onSort={onSort}
          sorting={currSort}
          // sortOrder={sortOrder}
          // globalSortCaret={globalSortCaret}
          isLastSorting={isLastSorting}
        // onFilter={onFilter}
        // currFilters={currFilters}
        // onExternalFilter={onExternalFilter}
        // filterPosition={filterPosition}
        />

      );
    }),
  ];



  return (

    <HeaderContainer
      backgroundColor={props.color}>

      {childrens}

    </HeaderContainer>

  );
};



export default TableHeader;
