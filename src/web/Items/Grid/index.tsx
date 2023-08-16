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



  function onPressComponent() {
    if (props.disabled) {
      return;
    }

    if (!props.disabled || !props.onPress) {
      props.onPress();
    }
  }



  return (

    <GridIconContent
      className={className?.className}

      disabled={props.disabled}
      style={props.style}
      onClick={() => {
        onPressComponent();
      }}>

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
