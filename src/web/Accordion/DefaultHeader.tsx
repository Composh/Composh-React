import React from 'react';

import {
  DefaultHeaderStyled,
  DefaultHeaderTitle,
} from './styled';



export interface IProps {
  // Prop State
  expanded?: any;
  backgroundColor?: any;
  color?: any;

  // Props Icon Expandable
  normalIcon?: any;
  expandedIcon?: any;

  // Prop Header
  headerStyle?: any;
  title?: any;
};



const DefaultHeader: React.FC<IProps> = (props) => {
  return (

    <DefaultHeaderStyled
      backgroundColor={props.backgroundColor || '#a1a1a1'}
      style={props.headerStyle}>

      <DefaultHeaderTitle
        color={props.color || '#ffffff'}>
        {props.title}
      </DefaultHeaderTitle>

      {props.expanded
        ? props.expandedIcon
        : props.normalIcon
      }

    </DefaultHeaderStyled>

  );
};



export default DefaultHeader;
