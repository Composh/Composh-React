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

  iconStyle?: any;
  iconGridColor?: string;
  iconGridLabel?: string;
  labelStyle?: any;

  style?: any;
}



const GridIcon: React.FC<IProps> = (props: IProps) => {
  const className: any = { ...props };



  return (

    <GridIconContent
      className={className?.className}

      // disabled={
      //   props.disabled
      //     ? props.disabled
      //     : props.onPress
      //       ? false
      //       : true
      // }
      style={props.style}
      onClick={(!props.disabled || !props.onPress) && props.onPress}>

      <IconContent
        style={props.iconStyle}>
        {props.icon}
      </IconContent>


      <AvailableText
        style={{
          ...props.labelStyle,
          color: props.iconGridColor,
        }}>
        {props.iconGridLabel}
      </AvailableText>

    </GridIconContent>

  );
};



export default GridIcon;
