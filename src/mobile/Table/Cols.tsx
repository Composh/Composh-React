import React from 'react';

import {
  CellComp,
} from './Cell';

import {
  ViewColsStyled,
  ViewColStyled,
} from './styled';

const sum = (arr: any) => arr.reduce((acc: any, n: any) => acc + n, 0);



export interface IProps {
  data?: any;
  width?: any;
  height?: any;
  heightArr?: any;
  flex?: any;
  style?: any;
  textStyle?: any;
  widthArr?: any;
  flexArr?: any;
}



export const ColComp: React.FC<IProps> = (props) => {
  const {
    data,
    style,
    width,
    heightArr,
    flex,
    textStyle,
  } = props;

  return data ? (
    <ViewColStyled
      nativeID={'Col'}
      width={width}
      flex={flex}
      style={style}>

      {data.map((item: any, i: any) => {
        const height = heightArr && heightArr[i];
        return (

          <CellComp
            key={i}
            data={item}
            width={width}
            height={height}
            textStyle={textStyle}
          // {...props}
          />

        );
      })}

    </ViewColStyled>
  ) : null;
};



export const ColsComp: React.FC<IProps> = (props) => {
  const {
    data,
    style,
    widthArr,
    heightArr,
    flexArr,
    textStyle,
  } = props;

  const width = widthArr ? sum(widthArr) : null;

  return data ? (
    <ViewColsStyled
      nativeID={'Cols'}
      width={width}>

      {data.map((item: any, i: any) => {
        const flex = flexArr && flexArr[i];
        const wth = widthArr && widthArr[i];
        return (
          <ColComp
            key={i}
            data={item}
            width={wth}
            heightArr={heightArr}
            flex={flex}
            style={style}
            textStyle={textStyle}
          // {...props}
          />
        );
      })}

    </ViewColsStyled>
  ) : null;
};
