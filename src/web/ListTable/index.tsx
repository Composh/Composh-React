import React from 'react';

import TableBody from './Body';
import TableHeader from './Header';

import {
  TableComponentStyle,
} from './styled';



export interface IProps {
  color: any;
  data: any;
  receivedColumns: any;
  textEmpty: any;
}



const ListTable: React.FC<IProps> = (props: IProps) => {
  const className = { ...props } as any;


  const dataTable = props.data && Array.isArray(props.data) && props.data?.length > 0
    ? props.data.every((item) => item !== null && item !== undefined && item !== '')
      ? props.data
      : []
    : [];



  return (

    <TableComponentStyle
      className={className?.className}>

      <TableHeader
        color={props.color}
        columns={props.receivedColumns}
      />


      {/*
      {hasFilters && filterPosition !== Const.FILTERS_POSITION_INLINE && (
        <Filters
          columns={columns}
          className={this.props.filtersClasses}
          onSort={this.props.onSort}
          onFilter={this.props.onFilter}
          currFilters={this.props.currFilters}
          filterPosition={this.props.filterPosition}
          onExternalFilter={this.props.onExternalFilter}
          selectRow={selectRow}
          expandRow={expandRow}
        />
      )}
      */}


      <TableBody
        data={dataTable}
        columns={props.receivedColumns}
        textEmpty={props.textEmpty}
      />


      {/*
      {hasFooter && (
        <Footer
          data={this.getData()}
          columns={columns}
          selectRow={selectRow}
          expandRow={expandRow}
          className={this.props.footerClasses}
        />
      )}
      */}

    </TableComponentStyle>

  );
};



export default ListTable;
