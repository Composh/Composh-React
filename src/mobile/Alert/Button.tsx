import React from 'react';

import {
  ButtonComponent,
  ButtonComponentText,
} from './styled';


export interface IProps {
  center?: boolean;
  label?: any;
  color?: any;
  disabled?: any;
  bold?: any;
  uppercase?: any;
  onPress?: any;
  activeOpacity?: any;
  style?: any;
  styleText?: any;
}



const DialogButton: React.FC<IProps> = (props) => {
  return (

    <ButtonComponent
      // disabled={disabled}
      // activeOpacity={activeOpacityDialog || 0.2}
      center={props.center}
      style={props.style}
      onPress={!props.disabled ? props.onPress : null}>

      <ButtonComponentText
        {...props}
        color={props.color}
        fontWeight={props.bold}
        style={props.styleText}>
        {props.uppercase ? props.label.toUpperCase() : props.label}
      </ButtonComponentText>

    </ButtonComponent>

  );
};



export default DialogButton;
