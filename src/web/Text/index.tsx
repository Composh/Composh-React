import React from 'react';

import {
  TextStyled,
} from './styled';



export interface IProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  lineNumbers?: number; // numberOfLines
  ellipsiMode?: 'tail'; // ellipsizeMode
  color?: string;
  fontSize?: number;
  children?: string;
}



const Text: React.FC<IProps> = (props: IProps) => {
  const className: any = { ...props };



  return (

    <TextStyled
      className={className?.className}
      lineNumbers={props.lineNumbers}
      ellipsiMode={props.ellipsiMode}
      color={props.color}>
      {props.children}
    </TextStyled>

  );
};



export default Text;
