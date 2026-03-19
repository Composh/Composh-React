import React,
{
  forwardRef,
} from 'react';

import {
  ScrollVerticalContainer,
} from './styled';



export interface IProps {
  children?: any;
}



const ScrollVertical = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return (

    <ScrollVerticalContainer
      ref={ref}
      {...props}>
      {props.children}
    </ScrollVerticalContainer>

  );
});



ScrollVertical.displayName = 'ScrollVertical';

export default ScrollVertical;
