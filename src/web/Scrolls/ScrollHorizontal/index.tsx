import React from 'react';

import {
  ScrollHorizontalContainer,
} from './styled';



export interface IProps {
  backgroundColor?: any;
  children?: any;
}



const ScrollHorizontal: React.FC<IProps> = (props: IProps) => {
  return (

    <ScrollHorizontalContainer
      {...props}
      backgroundColor={props.backgroundColor}>
      {props.children}
    </ScrollHorizontalContainer>

  );
};



export default ScrollHorizontal;
