import React from 'react';

import {
  Cell,
} from './Cell';

import {
  ViewRowsStyled,
  ViewRowStyled,
} from './styled';

const sum = (arr: any) => arr.reduce((acc: any, n: any) => acc + n, 0);



export interface IProps {
  data?: any;
  flexArr?: any;
  width?: any;
  height?: any;
  widthArr?: any;
  heightArr?: any;
  textStyle?: any;
  style?: any;
}



export const Row: React.FC<IProps> = (props) => {
  const {
    data,
    style,
    widthArr,
    height,
    flexArr,
    textStyle,
  } = props;

  const width = widthArr ? sum(widthArr) : null;

  return data ? (
    <ViewRowStyled
      id={'Row'}
      height={height}
      width={width}
      style={style}>

      {data.map((item: any, i: any) => {
        const flex = flexArr && flexArr[i];
        const wth = widthArr && widthArr[i];
        return (

          <Cell
            key={i}
            data={item}
            width={wth}
            height={height}
            flex={flex}
            textStyle={textStyle}
          // {...props}
          />

        );
      })}

    </ViewRowStyled>
  ) : null;
};



export const Rows: React.FC<IProps> = (props) => {
  const { data, style, widthArr, heightArr, flexArr, textStyle } = props;
  const flex = flexArr ? sum(flexArr) : 0;
  const width = widthArr ? sum(widthArr) : null;

  return data ? (
    <ViewRowsStyled
      id={'Rows'}
      flex={flex}
      width={width}>

      {data.map((item: any, i: any) => {
        const height = heightArr && heightArr[i];
        return (

          <Row
            key={i}
            data={item}
            widthArr={widthArr}
            height={height}
            flexArr={flexArr}
            style={style}
            textStyle={textStyle}
          // {...props}
          />

        );
      })}

    </ViewRowsStyled>
  ) : null;
};
