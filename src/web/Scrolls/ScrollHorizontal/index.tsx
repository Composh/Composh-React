import React from 'react';

import {
  ScrollHorizontalContainer,
} from './styled';



export interface IProps {
  children?: any;
}



const ScrollHorizontal: React.FC<IProps> = (props: IProps) => {
  return (

    <ScrollHorizontalContainer
      {...props}>
      {props.children}
    </ScrollHorizontalContainer>

  );
};



export default ScrollHorizontal;
