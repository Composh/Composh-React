import React from 'react';

import {
  GridIconContent,
  IconContent,
  AvailableText,
} from './styled';



export interface IProps {
  disabled?: boolean;
  activeOpacity?: number;
  onPress?: any;

  icon?: any;

  iconGridColor?: string;
  iconGridLabel?: string;

  style?: any;
}



const GridIcon: React.FC<IProps> = (props) => {
  return (

    <GridIconContent
      {...props}
      // disabled={
      //   props.disabled
      //     ? props.disabled
      //     : props.onPress
      //       ? false
      //       : true
      // }
      style={props.style}
      onClick={(!props.disabled || !props.onPress) && props.onPress}>

      <IconContent>
        {props.icon}
      </IconContent>


      <AvailableText
        style={{ color: props.iconGridColor }}>
        {props.iconGridLabel}
      </AvailableText>

    </GridIconContent>

  );
};



export default GridIcon;
