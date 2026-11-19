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
  // Normalmente texto; tambem aceita elementos dentro do texto (span, label etc.)
  children?: string | React.ReactNode;
}



const Text: React.FC<IProps> = (props: IProps) => {
  const className: any = { ...props };



  return (

    <TextStyled
      // Tag renderizada: p por padrao, h1 a h6 so quando vier por props
      as={props.type || 'p'}
      className={className?.className}
      type={props.type}
      fontSize={props.fontSize}
      lineNumbers={props.lineNumbers}
      ellipsiMode={props.ellipsiMode}
      color={props.color}>
      {props.children}
    </TextStyled>

  );
};



export default Text;
