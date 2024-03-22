import React from 'react';

import {
  ReactTotalStyle,
} from './styled';



export interface IProps {
  color?: string;
  from: number;
  to: number;
  dataSize: number;
  paginationTotalRenderer?: any; // func,
};



const PaginationTotal: React.FC<IProps> = (props: IProps) => {
  if (props.paginationTotalRenderer) {
    return props.paginationTotalRenderer(props.from, props.to, props.dataSize);
  }

  return (
    <ReactTotalStyle
      color={props.color}>
      &nbsp;Showing rows {props.from} to&nbsp;{props.to} of&nbsp;{props.dataSize}
    </ReactTotalStyle>
  );
};



export default PaginationTotal;
