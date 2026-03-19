import React,
{
  forwardRef,
} from 'react';

import {
  ScrollHorizontalContainer,
} from './styled';



export interface IProps {
  backgroundColor?: any;
  children?: any;
}



const ScrollHorizontal = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return (

    <ScrollHorizontalContainer
      ref={ref}
      {...props}
      backgroundColor={props.backgroundColor}>
      {props.children}
    </ScrollHorizontalContainer>

  );
});



ScrollHorizontal.displayName = 'ScrollHorizontal';

export default ScrollHorizontal;
