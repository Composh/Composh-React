import React from 'react';

import {
  ButtonComponent,
  ButtonComponentText,
} from './styled';


export interface IProps {
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
  const {
    label,
    color,
    disabled,
    bold,
    uppercase,
    onPress,
    // activeOpacity,
    style,
    styleText,
    ...otherProps
  } = props;



  return (

    <ButtonComponent
      // disabled={disabled}
      // activeOpacity={activeOpacityDialog || 0.2}
      style={style}
      onClick={onPress}>

      <ButtonComponentText
        fontWeight={bold}
        style={styleText}
        {...otherProps}>
        {uppercase ? label.toUpperCase() : label}
      </ButtonComponentText>

    </ButtonComponent>

  );
};



export default DialogButton;
