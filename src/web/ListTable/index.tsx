import React from 'react';

import TableBody from './Body';
import TableHeader from './Header';

import {
  TableComponentStyle,
} from './styled';



const ListTable: React.FC<any> = ({ color, data, colunasVisiveis, textEmpty }) => {
  const dataTable = data && Array.isArray(data) && data?.length > 0 ? data : [];



  return (

    <TableComponentStyle>

      <TableHeader
        color={color}
        columns={colunasVisiveis}
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
        columns={colunasVisiveis}
        textEmpty={textEmpty}
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
