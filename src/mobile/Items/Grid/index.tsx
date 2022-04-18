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
      disabled={
        props.disabled
          ? props.disabled
          : props.onPress
            ? false
            : true
      }
      activeOpacity={props.activeOpacity}
      style={props.style}
      onPress={(!props.disabled || !props.onPress) && props.onPress}>

      <IconContent>
        {props.icon}
      </IconContent>


      <AvailableText
        numberOfLines={2}
        ellipsizeMode="tail"
        style={{ color: props.iconGridColor }}>
        {props.iconGridLabel}
      </AvailableText>

    </GridIconContent>

  );
};



export default GridIcon;
