import React from 'react';

import {
  AccordionSubItemTitle,
} from './styled';



export interface IProps {
  content?: any;
  contentStyle?: any;
  style?: any;
  children?: any;
};



const AccordionSubItem: React.FC<IProps> = (props) => {
  return (

    <AccordionSubItemTitle
      style={props.style}>
      {props.children}
    </AccordionSubItemTitle>

  );
};



export default AccordionSubItem;
