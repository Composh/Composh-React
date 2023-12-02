import React from 'react';

import {
  ScrollVerticalContainer,
} from './styled';



export interface IProps {
  children?: any;
}



const ScrollHorizontal: React.FC<IProps> = (props: IProps) => {
  return (

    <ScrollVerticalContainer
      {...props}>
      {props.children}
    </ScrollVerticalContainer>

  );
};



export default ScrollHorizontal;
