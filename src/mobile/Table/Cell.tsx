import React from 'react';

import {
  TextCellStyled,
  ViewCellStyled,
} from './styled';



export interface IProps {
  data?: any;
  width?: any;
  height?: any;
  flex?: any;
  style?: any;
  textStyle?: any;
  borderStyle?: any;
}



export const Cell: React.FC<IProps> = (props) => {
  const {
    data,
    width,
    height,
    flex,
    style,
    textStyle,
    borderStyle,
  } = props;

  const textDom = React.isValidElement(data)
    ? (data)
    : (
      <TextCellStyled
        // {...props}
        style={textStyle}>
        {data}
      </TextCellStyled>
    );

  const borderTopWidth = (borderStyle && borderStyle.borderWidth) || 0;
  const borderRightWidth = borderTopWidth;
  const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

  return (
    <ViewCellStyled
      nativeID={'Cell'}
      borderTopWidth={borderTopWidth}
      borderRightWidth={borderRightWidth}
      borderColor={borderColor}
      width={width}
      height={height}
      flex={flex}
      style={style}>
      {textDom}
    </ViewCellStyled>
  );
};
