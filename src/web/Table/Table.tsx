import React from 'react';

import {
  ViewTableStyled,
  ViewTableWrapperStyled,
} from './styled';



export interface IProps {
  data?: any;
  borderTopWidth?: any;
  borderRightWidth?: any;
  borderColor?: any;
  width?: any;
  height?: any;
  heightArr?: any;
  flex?: any;
  style?: any;
  textStyle?: any;
  widthArr?: any;
  flexArr?: any;
  borderStyle?: any;
}



export const Table: React.FC<IProps> = (props) => {
  function _renderChildren(props: any) {
    return React.Children.map(props.children, (child) =>
      React.cloneElement(
        child,
        props.borderStyle && child.type.displayName !== 'ScrollView' ? { borderStyle: props.borderStyle } : {},
      ),
    );
  }

  const { borderStyle } = props;
  const borderLeftWidth = (borderStyle && borderStyle.borderWidth) || 0;
  const borderBottomWidth = borderLeftWidth;
  const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

  return (
    <ViewTableStyled
      id={'Table'}
      borderLeftWidth={borderLeftWidth}
      borderBottomWidth={borderBottomWidth}
      borderColor={borderColor}
    // style={[
    //   {
    //     borderLeftWidth,
    //     borderBottomWidth,
    //     borderColor,
    //   },
    //   props.style,
    // ]}
    >
      {_renderChildren(props)}
    </ViewTableStyled>
  );
};



export const TableWrapper: React.FC<IProps> = (props) => {
  function _renderChildren(props: any) {
    return React.Children.map(props.children, (child) =>
      React.cloneElement(child, props.borderStyle ? { borderStyle: props.borderStyle } : {}),
    );
  }

  const { style } = props;
  return (

    <ViewTableWrapperStyled
      id={'TableWrapper'}
      style={style}>
      {_renderChildren(props)}
    </ViewTableWrapperStyled>

  );
};

