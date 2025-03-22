import React from 'react';

import {
  Coluna,
  ColunaText,
} from './styled';



export interface IProps {
  column?: any;
  index?: any;
  onSort?: any;
  sorting?: any;
  sortOrder?: any;
  isLastSorting?: any;
  onFilter?: any;
  currFilters?: any;
  filterPosition?: any;
  onExternalFilter?: any;
  globalSortCaret?: any;
}



const TableHeaderCell: React.FC<IProps> = (props: IProps) => {
  const ordenarDados = (coluna: any) => {
    // setOrdenacao((prevOrdenacao) => ({
    //   coluna,
    //   direcao: prevOrdenacao.direcao === 'asc' ? 'desc' : 'asc',
    // }));
  };



  return (

    <Coluna
      key={props.column?.dataField}
      width={props.column?.width}
      minWidth={props.column?.minWidth}
      maxWidth={props.column?.maxWidth}
      onClick={() => ordenarDados(props.column?.label)}
      style={props.column?.headerStyle ? props.column?.headerStyle() : null}>

      <ColunaText
        // headerStyle={coluna?.headerStyle}
        // formatter={coluna?.formatter}
        hasIconRight={props.column?.headerRightIcon}>
        {props.column?.label}
      </ColunaText>


      {props.column?.headerRightIcon && props.column?.headerRightIcon()}

    </Coluna>

  );
};



export default TableHeaderCell;
